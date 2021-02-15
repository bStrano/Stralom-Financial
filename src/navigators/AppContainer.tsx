import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthenticationStack from './stacks/AuthenticationStack';

interface IAppContainerProps {
  isLoggedIn: boolean;
}

function AppContainer({isLoggedIn}: IAppContainerProps) {
  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthenticationStack /> : <AuthenticationStack />}
    </NavigationContainer>
  );
}

export default AppContainer;
