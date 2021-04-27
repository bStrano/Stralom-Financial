import React from 'react';
import HomeScreen from '../../../modules/Dashboard/views/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from '../../components/BottomTab/BottomTab';
import StatisticsScreen from '../../../modules/Statistcs/views/screens/StatisticsScreen';
import OptionsScreen from '../../../modules/Settings/views/screens/OptionsScreen';
import TransactionScreen from '../../../modules/Transactions/views/screens/List/TransactionScreen';

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
      <Tab.Screen name="Transactions" component={TransactionScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Options" component={OptionsScreen} />
    </Tab.Navigator>
  );
}

export type {IAuthenticationBottomTabParamList};

export default BottomTabNavigator;
