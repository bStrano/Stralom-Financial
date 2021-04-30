import React, {Dispatch, SetStateAction} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Divider, Text} from 'react-native-stralom-components';

export interface ISelectorProps {
  title: string;
  visibility: boolean;
  selectedColor?: string;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  data: any[];
  numColumns: number;
  renderItem: ({item, index}: {item: any; index: number}) => JSX.Element;
}

function SelectorModal<T>({
  title,
  visibility,
  setVisibility,
  data,
  numColumns,
  renderItem,
}: ISelectorProps) {
  return (
    <Modal
      onBackdropPress={() => setVisibility(false)}
      isVisible={visibility}
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
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={numColumns}
          data={data}
          renderItem={renderItem}
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
    paddingBottom: 0,
  },
});

export default SelectorModal;
