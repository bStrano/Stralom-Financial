import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import TransactionCategoryScreen from '../../../screens/Transactions/Category/List/TransactionCategoryScreen';
import ScreenEnum from '../../../enums/ScreenEnum';
import TransactionCategoryRegister from '../../../screens/Transactions/Category/Register/TransactionCategoryRegister';

const Stack = createStackNavigator();
function TransactionCategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenEnum.TransactionCategory}
        component={TransactionCategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenEnum.TransactionCategoryRegistration}
        component={TransactionCategoryRegister}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default TransactionCategoryStack;
