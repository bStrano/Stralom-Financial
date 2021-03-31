import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import CategoryItem from './Content/CategoryItem/CategoryItem';
import TransactionCategory from '../../../../models/transactions/TransactionCategory';
import {FAB} from 'react-native-stralom-components';
import CategoryRegisterModal from './Content/RegisterModal/CategoryRegisterModal';

interface ITransactionCategoryScreenProps {}

function TransactionCategoryScreen() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

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
      <CategoryRegisterModal
        isVisible={showRegisterModal}
        setVisibility={setShowRegisterModal}
      />
      <FAB onPress={() => setShowRegisterModal(true)} />
    </View>
  );
}

export default TransactionCategoryScreen;
