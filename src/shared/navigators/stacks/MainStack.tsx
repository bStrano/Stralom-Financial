import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionRegisterScreen from '../../../modules/Transactions/views/screens/Register/TransactionRegisterScreen';
import BottomTabNavigator from './BottomTabNavigator';
import NavigatorEnum from '../../enums/NavigatorEnum';
import ScreenEnum from '../../enums/ScreenEnum';
import TransactionCategoryStack from '../../../modules/Transactions/adapters/stacks/TransactionCategoryStack';

const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigatorEnum.Tabs}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenEnum.TransactionRegistration}
        component={TransactionRegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigatorEnum.TransactionCategoryStack}
        component={TransactionCategoryStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
