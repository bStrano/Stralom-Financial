import React, {Dispatch, SetStateAction, useMemo} from 'react';
import {ColorUtil} from 'react-native-stralom-components';
import ColorItem from './ColorItem/ColorItem';
import SelectorModal from '../SelectorModal/SelectorModal';

interface IColorSelectorModalProps {
  title: string;
  visibility: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  selectedColor?: {color: string; key: string};
  onChange: (item: {color: string; key: string}) => void;
}

function ColorSelectorModal({title, visibility, setVisibility, selectedColor, onChange}: IColorSelectorModalProps) {
  const colors = useMemo(() => {
    const hexadecimals = [
      ...ColorUtil.getColorArray('#d93651', -60, 100, 20),
      ...ColorUtil.getColorArray('#FF9F1A', -60, 100, 20),
      ...ColorUtil.getColorArray('#FFD500', -60, 100, 20),
      ...ColorUtil.getColorArray('#8ACC47', -60, 100, 20),
      ...ColorUtil.getColorArray('#47CC8A', -60, 100, 20),
      ...ColorUtil.getColorArray('#30BFBF', -60, 100, 20),
      ...ColorUtil.getColorArray('#00AAFF', -60, 100, 20),
      ...ColorUtil.getColorArray('#8F7EE6', -100, 60, 20),
      ...ColorUtil.getColorArray('#727272', -60, 100, 20),
    ];
    return hexadecimals.map((item) => {
      return {key: item, color: item};
    });
  }, []);

  return (
    <SelectorModal
      title={title}
      visibility={visibility}
      setVisibility={setVisibility}
      numColumns={9}
      data={colors}
      renderItem={({item}: {item: {color: string; key: string}}) => (
        <ColorItem
          color={item.color}
          selected={item.color === selectedColor?.color}
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
