import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import TransactionCategory from '../../../../../../models/TransactionCategory';
import {Text} from 'react-native-stralom-components';
import CategoryIcon from './components/CategoryIcon';
import ActionsButtons from './components/ActionsButtons';

interface ICategoryItemProps {
  category: TransactionCategory;
}

function CategoryItem(props: ICategoryItemProps) {
  return (
    <View>
      <View style={styles.container}>
        <CategoryIcon size={32} color={props.category.color} icon={{name: props.category.icon.name, class: props.category.icon.class}} />
        <Text variant={'regular'} style={styles.label}>
          {props.category.name}
        </Text>
        <ActionsButtons />
      </View>
      <FlatList
        data={props.category.subcategories}
        renderItem={({item}) => (
          <View style={{paddingLeft: 55}}>
            <Text variant={'regular'}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {flex: 1, fontSize: 16},
});

export default CategoryItem;
