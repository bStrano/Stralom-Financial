import React from 'react';
import LoginScreen from 'react-native-authentication-module/src/screens/Login/LoginScreen';
import RegistrationScreen from 'react-native-authentication-module/src/screens/Register/RegistrationScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {IUser} from 'react-native-authentication-module';

interface IAuthenticationStackProps {
  onSuccess: (data: any) => void;
  onError: (error: Error) => void;
}

const Stack = createStackNavigator();
function AuthenticationStack(props: IAuthenticationStackProps) {
  return (
    <Stack.Navigator initialRouteName={'LoginScreen'}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        initialParams={{
          onSuccess: (data: IUser) => {
            props.onSuccess(data);
          },
          onError: (error: Error) => props.onError(error),
        }}
        options={{headerShown: false}}
      />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default AuthenticationStack;
