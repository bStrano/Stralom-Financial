import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import ScreenEnum from '../../../../shared/enums/ScreenEnum';
import {IAuthenticationBottomTabParamList} from '../../../../shared/navigators/stacks/BottomTabNavigator';

interface IHomeScreenProps {
  navigation: StackNavigationProp<
    IAuthenticationBottomTabParamList,
    ScreenEnum.HOME
  >;
}

function HomeScreen(props: IHomeScreenProps) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default HomeScreen;
