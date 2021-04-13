import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthenticationStack from './stacks/AuthenticationStack';
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
