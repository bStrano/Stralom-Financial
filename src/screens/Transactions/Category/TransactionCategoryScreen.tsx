import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CategoryItem from './components/CategoryItem/CategoryItem';
import TransactionCategory from '../../../models/transactions/TransactionCategory';

interface ITransactionCategoryScreenProps {}

function TransactionCategoryScreen(props: ITransactionCategoryScreenProps) {
  return (
    <View style={{flex: 1}}>
      <Text>TransactionCategoryScreen</Text>
      <FlatList
        data={[
          new TransactionCategory({
            name: 'Teste',
            color: 'red',
            icon: {name: 'tv', class: 'MaterialIcons'},
            user: 1,
            subcategories: [],
          }),
          new TransactionCategory({
            name: 'Teste 2',
            color: 'green',
            icon: {name: 'tv', class: 'MaterialIcons'},
            user: 1,
            subcategories: [],
          }),
        ]}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
}

export default TransactionCategoryScreen;
