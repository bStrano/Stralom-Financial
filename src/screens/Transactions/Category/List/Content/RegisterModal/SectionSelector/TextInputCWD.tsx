import React from 'react';
import {View} from 'react-native';
import {Icon, IIcon} from 'react-native-stralom-components';

interface ITextInputCwdProps {
  icon: IIcon;
}

function TextInputCwd(props: ITextInputCwdProps) {
  return (
    <View>
      <Icon {...props.icon} />
    </View>
  );
}

export default TextInputCwd;
