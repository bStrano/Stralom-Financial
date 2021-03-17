import React from 'react';
import LoginScreen from 'react-native-authentication-module/src/screens/Login/LoginScreen';
import RegistrationScreen from 'react-native-authentication-module/src/screens/Register/RegistrationScreen';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionRegisterScreen from '../../screens/Transactions/Register/TransactionRegisterScreen';
import BottomTabNavigator from './BottomTabNavigator';
import TransactionCategoryScreen from '../../screens/Transactions/Category/TransactionCategoryScreen';

const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator initialRouteName={'LoginScreen'}>
      <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionRegistrationScreen"
        component={TransactionRegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionCategoryScreen"
        component={TransactionCategoryScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
