import React from 'react';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-stralom-components';

interface ISubcategoryListProps {
  category: ITransactionCategory;
}

function SubcategoryList(props: ISubcategoryListProps) {
  return (
    <FlatList
      data={props.category.subcategories}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={{paddingLeft: 55}}>
          <Text variant={'regular'}>{item.name}</Text>
        </View>
      )}
    />
  );
}

export default SubcategoryList;
