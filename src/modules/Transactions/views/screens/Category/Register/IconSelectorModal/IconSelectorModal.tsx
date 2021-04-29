import React, {Dispatch, SetStateAction} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Divider, ICON_CLASS, Text} from 'react-native-stralom-components';
import IconItem from './IconItem/IconItem';
import icons from '../../../../../../../shared/constants/icons';

interface IColorSelectorModalProps {
  title: string;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  onChange: (color: string) => void;
}

function IconSelectorModal({
  title,
  visibility,
  setVisibility,
  onChange,
}: IColorSelectorModalProps) {
  return (
    <Modal
      onBackdropPress={() => setVisibility(false)}
      isVisible={visibility}
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
          numColumns={5}
          data={icons}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-around',
          }}
          renderItem={({item}) => (
            <IconItem
              size={item.class === ICON_CLASS.EvilIcons ? 50 : 35}
              icon={item}
              selected={false}
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
    maxHeight: '75%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingBottom: 30,
  },
});

export default IconSelectorModal;
