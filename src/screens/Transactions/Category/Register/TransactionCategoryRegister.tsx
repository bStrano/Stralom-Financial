import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, ButtonRounded} from 'react-native-stralom-components';
import useLocale from '../../../../hooks/useLocale';
import {useNavigation} from '@react-navigation/native';

interface ICategoryRegisterModalProps {
  isVisible: boolean;
  setVisibility: (value: boolean) => void;
}

function TransactionCategoryRegister(props: ICategoryRegisterModalProps) {
  const {intl} = useLocale();
  const navigation = useNavigation();
  console.log(intl);
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text variant={'subtitle'} style={styles.title}>
          {intl!.category.registration.title}
        </Text>

        <View style={styles.buttonContainer}>
          <ButtonRounded
            mode={'outline'}
            stylesheet={{container: {flex: 1}}}
            color={'red'}
            fontColor={'white'}
            label={intl!.commons.common.cancel}
            onPress={() => navigation.goBack()}
          />
          <ButtonRounded
            mode={'normal'}
            stylesheet={{container: {flex: 1}}}
            color={'red'}
            fontColor={'white'}
            label={intl!.commons.common.save}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default TransactionCategoryRegister;
