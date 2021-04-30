import React from 'react';
import {Pressable, View} from 'react-native';
import {Icon, ICON_CLASS, SHADOW} from 'react-native-stralom-components';

interface IColorItemProps {
  selected: boolean;
  color: string;
  size?: number;
  onPress?: () => void;
}

function ColorItem(props: IColorItemProps) {
  return (
    <Pressable onPress={props.onPress} disabled={!props.onPress}>
      <View
        style={{
          overflow: 'hidden',
          ...SHADOW['2'],
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          width: props.size,
          height: props.size,
          borderRadius: props.size && props.size / 2,
          backgroundColor: props.color,
        }}>
        {props.selected && (
          <Icon
            name={'check'}
            color={'white'}
            class={ICON_CLASS.Octicons}
            size={props.size && props.size / 2}
          />
        )}
      </View>
    </Pressable>
  );
}

ColorItem.defaultProps = {
  size: 18,
};

export default ColorItem;
