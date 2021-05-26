import React, {createContext, useEffect, useMemo, useState} from 'react';
import StorageHelper from '../helpers/StorageHelper';

interface ISessionProviderProps {
  children: JSX.Element;
}

interface IUserSession {
  accessToken: string;
  id: string;
  name: string;
}

interface ISessionContext {
  user: IUserSession | null;
  hasSession: boolean;
  createSession: (props: IUserSession) => Promise<void>;
  updateAccessToken: (accessToken: string) => void;
  restoreSession: () => Promise<void>;
  clearSession: () => void;
}

export const SessionContext = createContext<ISessionContext | null>(null);
function SessionProvider(props: ISessionProviderProps) {
  const [user, setUser] = useState<IUserSession | null>(null);

  const hasSession = useMemo(() => {
    return user != null;
  }, [user]);

  useEffect(() => {
    restoreSession().catch((err) => console.log(err));
  }, []);

  async function clearSession() {
    setUser(null);
  }

  async function createSession({accessToken, id, name}: IUserSession) {
    await StorageHelper.createSession(accessToken, String(id), name);
    setUser({accessToken, id, name});
  }

  async function restoreSession() {
    try {
      let {accessToken, id, name}: IUserSession = await StorageHelper.restoreSession();
      setUser({accessToken, id, name});
    } catch (e) {
      console.warn(e);
    }
  }

  async function updateAccessToken(accessToken: string) {
    if (user) {
      setUser({...user, accessToken});
    }
  }

  return <SessionContext.Provider value={{user, createSession, restoreSession, clearSession, updateAccessToken, hasSession}}>{props.children}</SessionContext.Provider>;
}

export default SessionProvider;
