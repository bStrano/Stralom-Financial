import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, IIcon} from 'react-native-stralom-components';

interface ICategoryIconProps {
  icon: IIcon;
  color: string;
  size: number;
}

function CategoryIcon({icon, color, size = 48}: ICategoryIconProps) {
  const styles = useMemo(() => {
    return stylesheet({size, color});
  }, [size, color]);

  return (
    <View style={styles.container}>
      <Icon {...icon} color={'white'} size={size / 2.4} />
    </View>
  );
}

const stylesheet = ({size, color}: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: color,
      width: size,
      height: size,
      borderRadius: size / 2,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
  });

export default CategoryIcon;
