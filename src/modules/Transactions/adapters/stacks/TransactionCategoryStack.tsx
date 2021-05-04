import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import TransactionCategoryRegister from '../../views/screens/Category/Register/TransactionCategoryRegister';
import TransactionCategoryScreen from '../../views/screens/Category/List/TransactionCategoryScreen';
import ScreenEnum from '../../../../shared/enums/ScreenEnum';
import TransactionCategoryProvider from '../providers/TransactionCategoryProvider';

const Stack = createStackNavigator();
function TransactionCategoryStack() {
  return (
    <TransactionCategoryProvider>
      <Stack.Navigator>
        <Stack.Screen name={ScreenEnum.TransactionCategory} component={TransactionCategoryScreen} options={{headerShown: false}} />
        <Stack.Screen name={ScreenEnum.TransactionCategoryRegistration} component={TransactionCategoryRegister} options={{headerShown: false}} />
      </Stack.Navigator>
    </TransactionCategoryProvider>
  );
}

export default TransactionCategoryStack;
