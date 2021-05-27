import React, {useCallback, useContext} from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';

import TransactionCategory from '../../../../../../models/TransactionCategory';
import {Divider, Text} from 'react-native-stralom-components';
import CategoryIcon from './components/CategoryIcon';
import ActionsButtons from './components/ActionsButtons';
import {Menu, MenuOption, MenuOptions, MenuTrigger} from 'react-native-popup-menu';
import useLocale from '../../../../../../../../shared/hooks/useLocale';
import {TransactionCategoryContext} from '../../../../../../adapters/providers/TransactionCategoryProvider';

interface ICategoryItemProps {
  category: TransactionCategory;
}

function CategoryItem(props: ICategoryItemProps) {
  const {intl} = useLocale();
  const transactionCategoryContext = useContext(TransactionCategoryContext);

  const onCancel = useCallback(() => {
    Alert.alert(intl?.category.delete.title + ' ' + props.category.name, intl?.category.delete.confirmation + '?', [
      {
        text: intl?.commons.common.cancel,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: intl?.category.delete.title,
        onPress: () => {
          if (props.category._id) {
            transactionCategoryContext?.remove(props.category._id);
          }
        },
        style: 'default',
      },
    ]);
  }, [intl, props.category._id, props.category.name]);

  return (
    <View>
      <View style={styles.container}>
        <CategoryIcon size={32} color={props.category.color} icon={{name: props.category.icon.name, class: props.category.icon.class}} />
        <Text variant={'regular'} style={styles.label}>
          {props.category.name}
        </Text>

        <Menu onSelect={(value) => onCancel()} style={{marginRight: 10}}>
          <MenuTrigger>
            <ActionsButtons />
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={{maxWidth: 130, padding: 5}}>
            <MenuOption value={1}>
              <Text variant={'regular'}>Editar</Text>
            </MenuOption>
            <Divider />
            <MenuOption value={2}>
              <Text variant={'regular'}>Excluir</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
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
