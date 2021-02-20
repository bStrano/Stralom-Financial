import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthenticationStack from './stacks/AuthenticationStack';
import BottomTabNavigator from './stacks/BottomTabNavigator';

interface IAppContainerProps {
  isLoggedIn: boolean;
}

function AppContainer({isLoggedIn}: IAppContainerProps) {
  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <AuthenticationStack />}
    </NavigationContainer>
  );
}

export default AppContainer;
