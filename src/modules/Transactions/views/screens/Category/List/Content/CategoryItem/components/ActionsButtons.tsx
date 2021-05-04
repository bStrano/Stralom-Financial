import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, useTheme} from 'react-native-stralom-components';

interface IActionsButtonsProps {}

function ActionsButtons() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {/*<Icon*/}
      {/*  name={'add-circle'}*/}
      {/*  class={'MaterialIcons'}*/}
      {/*  color={theme.primary.main.color}*/}
      {/*  size={22}*/}
      {/*  container={{*/}
      {/*    style: {*/}
      {/*      marginHorizontal: 25,*/}
      {/*    },*/}
      {/*  }}*/}
      {/*  onPress={() => console.log('Create subcategory')}*/}
      {/*/>*/}
      <Icon
        name={'more-vert'}
        class={'MaterialIcons'}
        color={theme.primary.main.color}
        size={18}
        container={{
          style: {
            marginRight: 10,
          },
        }}
        onPress={() => console.log('Edit Category')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default ActionsButtons;
