import React from 'react';
import {Pressable, View} from 'react-native';
import TextInputCL, {ITextInputCLProps} from './TextInputCL';
import {Divider} from 'react-native-stralom-components';

interface ITextInputSelectorProps extends ITextInputCLProps {
  onPress: (value: any) => void;
  selectedComponent: JSX.Element;
}

function TextInputSelector(props: ITextInputSelectorProps) {
  return (
    <View>
      <Pressable
        onPress={props.onPress}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}>
          <TextInputCL
            divider={false}
            icon={props.icon}
            value={props.placeholder}
            editable={false}
          />
        </View>

        {props.selectedComponent}
      </Pressable>
      <Divider width={'100%'} style={{marginVertical: 0}} />
    </View>
  );
}

export default TextInputSelector;
