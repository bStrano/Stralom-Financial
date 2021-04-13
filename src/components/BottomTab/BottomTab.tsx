import React, {createContext} from 'react';
import {Dimensions, View} from 'react-native';
import Tab from './components/Tab';
import {FABGroupModal, useTheme} from 'react-native-stralom-components';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import NavigatorEnum from '../../enums/NavigatorEnum';

// @ts-ignore
export const BottomTabContext = createContext<BottomTabBarProps>(null);

function BottomTab({state, descriptors, navigation}: BottomTabBarProps) {
  const theme = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <BottomTabContext.Provider value={{descriptors, navigation, state}}>
      <View style={{flexDirection: 'row', backgroundColor: theme.surface}}>
        <Tab
          icon={{
            name: 'home',
            class: 'Feather',
          }}
          color={theme.primary.textColor}
          toggledColor={theme.primary.main.color}
          index={0}
        />
        <Tab
          icon={{
            name: 'list',
            class: 'Ionicons',
          }}
          color={theme.primary.textColor}
          toggledColor={theme.primary.main.color}
          index={1}
        />
        <View style={{width: 50, marginHorizontal: 10}}>
          <FABGroupModal
            mainFabPosition={{
              bottom: 0,
              left: Dimensions.get('window').width / 2 - 25,
            }}
            mode={'circular-180'}
            actions={[
              {
                label: 'CategoriasTemp',
                onPress: () =>
                  navigation.navigate(NavigatorEnum.TransactionCategoryStack),
                icon: {
                  size: 28,
                  name: 'calendar',
                  color: 'blue',
                  class: 'EvilIcons',
                },
                position: {
                  bottom: 90,
                  left: 0,
                },
                color: 'white',
              },
              {
                label: 'Receita',
                onPress: () =>
                  navigation.navigate('TransactionRegistrationScreen', {
                    params: {type: 1},
                  }),
                icon: {
                  size: 18,
                  name: 'trending-up',
                  color: 'green',
                  class: 'Feather',
                },
                position: {
                  bottom: 30,
                  left: -90,
                },
                color: 'white',
              },
              {
                label: 'Despesas',
                onPress: () =>
                  navigation.navigate('Transactions', {
                    screen: 'TransactionRegistration',
                    initial: false,
                    params: {type: 1},
                  }),
                icon: {
                  size: 18,
                  name: 'trending-down',
                  color: 'red',
                  class: 'Feather',
                },
                position: {
                  bottom: 30,
                  left: 90,
                },
                color: 'white',
              },
            ]}
            fab={{
              backgroundColor: theme.primary.light.color,
              position: {
                bottom: 20,
                left: 0,
              },
            }}
          />
        </View>
        <Tab
          icon={{
            name: 'pie-chart',
            class: 'Feather',
          }}
          color={theme.primary.textColor}
          toggledColor={theme.primary.main.color}
          index={2}
        />
        <Tab
          icon={{
            name: 'dots-horizontal',
            class: 'MaterialCommunityIcons',
          }}
          color={theme.primary.textColor}
          toggledColor={theme.primary.main.color}
          index={3}
        />
      </View>
    </BottomTabContext.Provider>
  );
}
export default BottomTab;
