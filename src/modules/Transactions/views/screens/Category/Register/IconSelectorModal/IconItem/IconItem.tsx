import React from 'react';
import {Pressable, View} from 'react-native';
import {Icon, IIcon} from 'react-native-stralom-components';

interface IColorItemProps {
  selected: boolean;
  color: string;
  fontColor: string;
  size?: number;
  icon?: IIcon;
  onPress?: () => void;
}

function IconItem(props: IColorItemProps) {
  return (
    <Pressable onPress={props.onPress} disabled={!props.onPress}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          width: props.size,
          height: props.size,
          borderRadius: props.size && props.size / 2,
          backgroundColor: props.color,
        }}>
        <Icon
          size={props.size && props.size / 2}
          color={props.fontColor}
          {...props.icon}
        />
      </View>
    </Pressable>
  );
}

IconItem.defaultProps = {
  size: 18,
};

export default IconItem;
