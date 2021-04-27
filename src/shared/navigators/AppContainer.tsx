import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthenticationStack from '../../modules/Users/adapters/stacks/AuthenticationStack';
import MainStack from './stacks/MainStack';

interface IAppContainerProps {
  isLoggedIn: boolean;
}

function AppContainer({isLoggedIn}: IAppContainerProps) {
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
}

export default AppContainer;
