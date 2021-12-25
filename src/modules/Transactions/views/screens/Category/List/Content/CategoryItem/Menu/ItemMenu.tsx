import React, {useCallback, useContext} from 'react';
import {Alert} from 'react-native';
import {Menu, MenuOption, MenuOptions, MenuTrigger} from 'react-native-popup-menu';
import ActionsButtons from '../components/ActionsButtons';
import {Divider, Text} from 'react-native-stralom-components';
import ScreenEnum from '../../../../../../../../../shared/enums/ScreenEnum';
import {useNavigation} from '@react-navigation/native';
import useLocale from '../../../../../../../../../shared/hooks/useLocale';
import {TransactionCategoryContext} from '../../../../../../../adapters/providers/TransactionCategoryProvider';

interface ICategoryItemMenuProps {
  category: ITransactionCategory;
}

function ItemMenu(props: ICategoryItemMenuProps) {
  const {intl} = useLocale();
  const navigation = useNavigation();
  const transactionCategoryContext = useContext(TransactionCategoryContext);

  const onEdit = useCallback(() => {
    navigation.navigate(ScreenEnum.TransactionCategoryRegistration, {category: props.category});
  }, [navigation, props.category]);

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
          if (props.category.id) {
            transactionCategoryContext?.remove(props.category.id, () => console.log('Item deleted'));
          }
        },
        style: 'default',
      },
    ]);
  }, [intl, props.category.id, props.category.name]);

  const onActionTrigger = useCallback(
    (value) => {
      switch (value) {
        case 1:
          return onEdit();
        case 2:
          return onCancel();
      }
    },
    [onCancel, onEdit],
  );

  return (
    <Menu onSelect={onActionTrigger} style={{marginRight: 10}}>
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
  );
}

export default ItemMenu;
