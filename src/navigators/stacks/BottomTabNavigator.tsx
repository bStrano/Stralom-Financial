import React from 'react';
import HomeScreen from '../../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from '../../components/BottomTab/BottomTab';
import StatisticsScreen from '../../screens/StatisticsScreen';
import TransactionsScreen from '../../screens/TransactionsScreen';
import OptionsScreen from '../../screens/OptionsScreen';

const Tab = createBottomTabNavigator();

type IAuthenticationBottomTabParamList = {
  Home: undefined;
  Transaction: undefined;
  Statistics: undefined;
  Options: undefined;
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Options" component={OptionsScreen} />
    </Tab.Navigator>
  );
}

export type {IAuthenticationBottomTabParamList};

export default BottomTabNavigator;
