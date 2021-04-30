import React, {Dispatch, SetStateAction} from 'react';
import {ColorUtil} from 'react-native-stralom-components';
import ColorItem from './ColorItem/ColorItem';
import SelectorModal from '../SelectorModal/SelectorModal';

interface IColorSelectorModalProps {
  title: string;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  selectedColor?: string;
  onChange: (item: string) => void;
}

function ColorSelectorModal({
  title,
  visibility,
  setVisibility,
  selectedColor,
  onChange,
}: IColorSelectorModalProps) {
  return (
    <SelectorModal
      title={title}
      visibility={visibility}
      setVisibility={setVisibility}
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
      renderItem={({item}: {item: string}) => (
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
  );
}

export default ColorSelectorModal;
