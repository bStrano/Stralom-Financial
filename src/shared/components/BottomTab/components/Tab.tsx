import React, {useContext, useMemo} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Icon, IIcon} from 'react-native-stralom-components';
import {BottomTabContext} from '../BottomTab';

interface ITabProps {
  icon: IIcon;
  color?: string;
  toggledColor: string;
  index: number;
}

function Tab({index, icon, color, toggledColor}: ITabProps) {
  const bottomTabContext = useContext(BottomTabContext);
  const isFocused = useMemo(() => {
    // @ts-ignore
    return bottomTabContext.state.index === index;
  }, [bottomTabContext.state.index, index]);

  const route = useMemo(() => {
    return bottomTabContext.state.routes[index];
  }, [index, bottomTabContext.state]);

  const fontColor = useMemo(() => {
    if (!isFocused) {
      return color;
    } else {
      return toggledColor;
    }
  }, [color, isFocused, toggledColor]);

  const {options} = bottomTabContext.descriptors[route.key];
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const onPress = () => {
    const event = bottomTabContext.navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      bottomTabContext.navigation.navigate(route.name);
    }
  };

  const onLongPress = () => {
    bottomTabContext.navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styleSheet.container}>
      <Icon {...icon} color={fontColor} size={25} />
      <Text
        adjustsFontSizeToFit={true}
        numberOfLines={1}
        style={{color: fontColor, fontSize: 12}}>
        {label}
      </Text>
    </Pressable>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tab;
