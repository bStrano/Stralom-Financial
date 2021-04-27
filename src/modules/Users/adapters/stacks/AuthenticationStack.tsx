import React from 'react';
import LoginScreen from 'react-native-authentication-module/src/screens/Login/LoginScreen';
import RegistrationScreen from 'react-native-authentication-module/src/screens/Register/RegistrationScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
function AuthenticationStack() {
  return (
    <Stack.Navigator initialRouteName={'LoginScreen'}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthenticationStack;
