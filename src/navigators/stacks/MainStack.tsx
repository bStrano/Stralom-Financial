import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionRegisterScreen from '../../screens/Transactions/Register/TransactionRegisterScreen';
import BottomTabNavigator from './BottomTabNavigator';
import TransactionCategoryStack from './Transactions/TransactionCategoryStack';
import NavigatorEnum from '../../enums/NavigatorEnum';
import ScreenEnum from '../../enums/ScreenEnum';

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
