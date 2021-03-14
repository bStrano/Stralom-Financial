import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TransactionRegisterScreen from '../../screens/Transactions/Register/TransactionRegisterScreen';
import TransactionScreen from '../../screens/Transactions/List/TransactionScreen';


const Stack = createStackNavigator();
function TransactionStack() {
  return (
    <Stack.Navigator initialRouteName={'TransactionList'}>
      <Stack.Screen
        name="TransactionList"
        component={TransactionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionRegistration"
        component={TransactionRegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default TransactionStack;
