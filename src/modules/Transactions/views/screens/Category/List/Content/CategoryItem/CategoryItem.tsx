import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from 'react-native-stralom-components';
import CategoryIcon from './components/CategoryIcon';
import SubcategoriesList from './SubcategoryList/SubcategoriesList';
import ItemMenu from './Menu/ItemMenu';
import icons from '../../../../../../../../shared/constants/icons';

interface ICategoryItemProps {
  category: ITransactionCategory;
}

function CategoryItem(props: ICategoryItemProps) {
  const icon = useMemo(() => {
    return icons.find((item) => item.id === props.category.icon);
  }, [props.category]);
  return (
    <View>
      <View style={styles.container}>
        <CategoryIcon size={32} color={props.category.color} icon={{name: icon!.name, class: icon!.class}} />
        <Text variant={'regular'} style={styles.label}>
          {props.category.name}
        </Text>

        <ItemMenu category={props.category} />
      </View>
      <SubcategoriesList category={props.category} />
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
