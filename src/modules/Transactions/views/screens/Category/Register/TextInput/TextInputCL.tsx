import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {Divider, Icon, ICON_CLASS} from 'react-native-stralom-components';
import React from 'react';

export interface ITextInputCLProps extends TextInputProps {
  icon: {name: string; class: ICON_CLASS};
  divider?: boolean;
}

function TextInputCL(props: ITextInputCLProps) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Icon {...props.icon} size={18} container={styles.iconContainer} />
        <TextInput {...props} />
      </View>
      {props.divider && <Divider width={'100%'} style={{marginVertical: 0}} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 0, justifyContent: 'center'},
  subContainer: {flexDirection: 'row', alignItems: 'center'},
  iconContainer: {paddingHorizontal: 10, marginBottom: 0},
});

export default TextInputCL;
