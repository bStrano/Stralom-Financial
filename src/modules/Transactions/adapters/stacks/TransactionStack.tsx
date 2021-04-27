import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TransactionRegisterScreen from '../../views/screens/Register/TransactionRegisterScreen';
import TransactionScreen from '../../views/screens/List/TransactionScreen';
import ScreenEnum from '../../../../enums/ScreenEnum';

const Stack = createStackNavigator();
function TransactionStack() {
  return (
    <Stack.Navigator initialRouteName={'TransactionList'}>
      <Stack.Screen
        name={ScreenEnum.TransactionList}
        component={TransactionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenEnum.TransactionRegistration}
        component={TransactionRegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default TransactionStack;
