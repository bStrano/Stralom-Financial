import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthenticationStack from '../../modules/Users/adapters/stacks/AuthenticationStack';
import MainStack from './stacks/MainStack';
import {SessionContext} from '../providers/SessionProvider';
import {IUser} from 'react-native-authentication-module';

function AppContainer() {
  const sessionContext = useContext(SessionContext);
  return (
    <NavigationContainer>
      {sessionContext?.hasSession ? (
        <MainStack />
      ) : (
        <AuthenticationStack
          onSuccess={(data: IUser) => {
            sessionContext?.createSession({id: String(data.id), accessToken: data.accessToken, name: data.name});
          }}
          onError={(e: Error) => console.error(e)}
        />
      )}
    </NavigationContainer>
  );
}

export default AppContainer;
