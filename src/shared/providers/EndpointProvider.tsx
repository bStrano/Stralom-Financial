import React, {createContext, useContext, useMemo, useState} from 'react';

import axios, {AxiosInstance} from 'axios';
import ENDPOINTS from '../constants/Endpoints';
import {SessionContext} from './SessionProvider';
import {useAuthentication} from 'react-native-authentication-module';
import axiosCore from '../infra/axios/axiosCore';
import StorageHelper from '../helpers/StorageHelper';

interface IEndpointProviderProps {
  children: JSX.Element;
}

interface IEndpointContext {
  axiosCore: AxiosInstance;
}

const EndpointContext = createContext<IEndpointContext | null>(null);
function EndpointProvider(props: IEndpointProviderProps) {
  const [endpoint, setEndpoint] = useState(ENDPOINTS.API);
  const {restoreRefreshToken} = useAuthentication();
  const sessionContext = useContext(SessionContext);

  const axiosInstance = useMemo(() => {
    axiosCore.interceptors.request.use(
      async (config) => {
        const token = await StorageHelper.getToken();
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
    axiosCore.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        let authenticationRoute = `${ENDPOINTS.AUTHENTICATION}/session/token`;
        if (error.response.status === 403 && originalRequest.url === authenticationRoute) {
          sessionContext?.clearSession();
          return Promise.reject(error);
        }

        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;
          let token = await restoreRefreshToken();
          let res = await axios.post(authenticationRoute, {token});
          if (res.status === 200) {
            await StorageHelper.updateToken(res.data);
            axiosCore.defaults.headers.common.Authorization = 'Bearer ' + res.data;
            return axiosCore.request(originalRequest);
          }
        }
        return Promise.reject(error);
      },
    );
    return axiosCore;
  }, [endpoint, restoreRefreshToken, sessionContext]);

  return <EndpointContext.Provider value={{axiosCore: axiosInstance}}>{props.children}</EndpointContext.Provider>;
}

export default EndpointProvider;
