import React, {Dispatch, SetStateAction} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {ColorUtil, Divider, Text} from 'react-native-stralom-components';
import ColorItem from './ColorItem/ColorItem';

interface IColorSelectorModalProps {
  title: string;
  visibility: boolean;
  selectedColor?: string;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  onChange: (color: string) => void;
}

function ColorSelectorModal({
  title,
  visibility,
  setVisibility,
  selectedColor,
  onChange,
}: IColorSelectorModalProps) {
  return (
    <Modal
      onBackdropPress={() => setVisibility(false)}
      isVisible={visibility}
      swipeDirection={['up', 'down']}
      useNativeDriverForBackdrop
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}>
      <View style={styleSheet.container}>
        <Text variant={'title'} style={styleSheet.title}>
          {title}
        </Text>
        <Divider width={'94%'} style={{marginHorizontal: '3%'}} />
        <FlatList
          numColumns={9}
          data={[
            ...ColorUtil.getColorArray('#d93651', -60, 100, 20),
            ...ColorUtil.getColorArray('#FF9F1A', -60, 100, 20),
            ...ColorUtil.getColorArray('#FFD500', -60, 100, 20),
            ...ColorUtil.getColorArray('#8ACC47', -60, 100, 20),
            ...ColorUtil.getColorArray('#47CC8A', -60, 100, 20),
            ...ColorUtil.getColorArray('#30BFBF', -60, 100, 20),
            ...ColorUtil.getColorArray('#00AAFF', -60, 100, 20),
            ...ColorUtil.getColorArray('#8F7EE6', -100, 60, 20),
            ...ColorUtil.getColorArray('#727272', -60, 100, 20),
          ]}
          renderItem={({item, index, separators}) => (
            <ColorItem
              color={item}
              selected={item === selectedColor}
              onPress={() => {
                setVisibility(false);
                onChange(item);
              }}
            />
          )}
        />
      </View>
    </Modal>
  );
}

const styleSheet = StyleSheet.create({
  title: {padding: 20, paddingLeft: 10, paddingBottom: 0},
  container: {
    backgroundColor: 'white',
    maxHeight: '80%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingBottom: 30,
  },
});

export default ColorSelectorModal;
