import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import TransactionCategoryRegisterScreen from '../../views/screens/Category/Register/TransactionCategoryRegisterScreen';
import TransactionCategoryScreen from '../../views/screens/Category/List/TransactionCategoryScreen';
import ScreenEnum from '../../../../shared/enums/ScreenEnum';
import TransactionCategoryProvider from '../providers/TransactionCategoryProvider';
import TransactionCategory from '../../models/TransactionCategory';

type TransactionCategoryStackParamList = {
  TransactionCategory: undefined;
  TransactionCategoryRegistration: {category?: TransactionCategory} | undefined;
};

const Stack = createStackNavigator<TransactionCategoryStackParamList>();
function TransactionCategoryStack() {
  return (
    <TransactionCategoryProvider>
      <Stack.Navigator>
        <Stack.Screen name={ScreenEnum.TransactionCategory} component={TransactionCategoryScreen} options={{headerShown: false}} />
        <Stack.Screen name={ScreenEnum.TransactionCategoryRegistration} component={TransactionCategoryRegisterScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </TransactionCategoryProvider>
  );
}

export default TransactionCategoryStack;
