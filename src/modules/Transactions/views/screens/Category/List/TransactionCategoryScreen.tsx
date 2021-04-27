import React from 'react';
import {FlatList, Text, View} from 'react-native';
import CategoryItem from './Content/CategoryItem/CategoryItem';
import TransactionCategory from '../../../../entities/TransactionCategory';
import {FAB} from 'react-native-stralom-components';
import {useNavigation} from '@react-navigation/native';
import ScreenEnum from '../../../../../../shared/enums/ScreenEnum';

interface ITransactionCategoryScreenProps {}

function TransactionCategoryScreen() {
  const navigation = useNavigation();

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
      <FAB
        onPress={() =>
          navigation.navigate(ScreenEnum.TransactionCategoryRegistration)
        }
      />
    </View>
  );
}

export default TransactionCategoryScreen;
