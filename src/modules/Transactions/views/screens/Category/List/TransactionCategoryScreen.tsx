import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import CategoryItem from './Content/CategoryItem/CategoryItem';
import {FAB, useTheme} from 'react-native-stralom-components';
import {useNavigation} from '@react-navigation/native';
import ScreenEnum from '../../../../../../shared/enums/ScreenEnum';
import BaseHeader, {NAVIGATION_TYPE} from '../../../../../../shared/components/BaseHeader/BaseHeader';
import {TransactionCategoryContext} from '../../../../adapters/providers/TransactionCategoryProvider';

interface ITransactionCategoryScreenProps {}

function TransactionCategoryScreen() {
  const navigation = useNavigation();
  const transactionCategoryContext = useContext(TransactionCategoryContext);
  const theme = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: theme.surface}}>
      <BaseHeader title={'Minhas categorias'} type={NAVIGATION_TYPE.BACK} />
      <FlatList keyExtractor={(item) => item.name} data={transactionCategoryContext?.categories.data} renderItem={({item}) => <CategoryItem category={item} />} />
      <FAB onPress={() => navigation.navigate(ScreenEnum.TransactionCategoryRegistration)} />
    </View>
  );
}

export default TransactionCategoryScreen;
