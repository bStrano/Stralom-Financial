import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {ICON_CLASS, IIcon} from 'react-native-stralom-components';
import IconItem from './IconItem/IconItem';
import icons from '../../../../../../../shared/constants/icons';
import SelectorModal from '../SelectorModal/SelectorModal';

interface IIconSelectorModalProps {
  title: string;
  color: string;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  onChange: (item: IIcon) => void;
}

function IconSelectorModal({title, color, visibility, setVisibility, onChange}: IIconSelectorModalProps) {
  return (
    <SelectorModal
      title={title}
      visibility={visibility}
      setVisibility={setVisibility}
      numColumns={6}
      data={icons}
      renderItem={({item}) => (
        <IconItem
          key={item.id}
          size={item.class === ICON_CLASS.EvilIcons ? 50 : 35}
          icon={item}
          selected={false}
          onPress={() => {
            setVisibility(false);
            onChange(item);
          }}
          color={color}
          fontColor={'white'}
        />
      )}
    />
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
