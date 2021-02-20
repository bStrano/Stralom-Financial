import React, {createContext} from 'react';
import {View} from 'react-native';
import Tab from './components/Tab';
import {FAB, useTheme} from 'react-native-stralom-components';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

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
          <FAB
            backgroundColor={theme.primary.light.color}
            onPress={null}
            style={{
              container: {
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
