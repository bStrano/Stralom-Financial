import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-stralom-components';
import TransactionSubcategory from '../../../../../../entities/TransactionSubcategory';

interface ISubcategoryItemProps {
  subcategory: TransactionSubcategory;
}

function SubcategoryItem(props: ISubcategoryItemProps) {
  return (
    <View style={styles.container}>
      <Text variant={'regular'}>{props.subcategory.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 55,
  },
});
export default SubcategoryItem;
