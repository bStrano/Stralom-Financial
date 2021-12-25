import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-stralom-components';

interface ISubcategoryItemProps {
  subcategory: ITransactionCategory;
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
