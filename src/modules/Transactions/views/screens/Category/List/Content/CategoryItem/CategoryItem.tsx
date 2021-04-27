import React from 'react';
import {StyleSheet, View} from 'react-native';

import TransactionCategory from '../../../../../../entities/TransactionCategory';
import {Text} from 'react-native-stralom-components';
import CategoryIcon from './components/CategoryIcon';
import ActionsButtons from './components/ActionsButtons';

interface ICategoryItemProps {
  category: TransactionCategory;
}

function CategoryItem(props: ICategoryItemProps) {
  const styles = stylesheet(props);

  return (
    <View style={styles.container}>
      <CategoryIcon
        size={42}
        color={props.category.color}
        icon={props.category.icon}
      />
      <Text variant={'subtitle'} style={styles.label}>
        {props.category.name}
      </Text>
      <ActionsButtons />
    </View>
  );
}

const stylesheet = (props: ICategoryItemProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {flex: 1, fontSize: 16},
  });

export default CategoryItem;
