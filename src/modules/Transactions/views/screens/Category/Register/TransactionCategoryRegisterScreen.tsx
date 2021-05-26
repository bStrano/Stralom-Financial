import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, Keyboard, ScrollView, StyleSheet, Text, View} from 'react-native';
import {CheckList, FAB, Header, ICON_CLASS, SHADOW, useTheme} from 'react-native-stralom-components';
import {useNavigation} from '@react-navigation/native';
import useLocale from '../../../../../../shared/hooks/useLocale';
import TextInputCL from './TextInput/TextInputCL';
import {Controller, useForm} from 'react-hook-form';
import TextInputSelector from './TextInput/TextInputSelector';
import ColorSelectorModal from './ColorSelectorModal/ColorSelectorModal';
import ColorItem from './ColorSelectorModal/ColorItem/ColorItem';
import IconSelectorModal from './IconSelectorModal/IconSelectorModal';
import IconItem from './IconSelectorModal/IconItem/IconItem';
import TransactionCategory from '../../../../models/TransactionCategory';
import {TransactionCategoryContext} from '../../../../adapters/providers/TransactionCategoryProvider';
import Reactotron from 'reactotron-react-native';
import TransactionSubcategory from '../../../../models/TransactionSubcategory';

interface ICategoryRegisterModalProps {}

function TransactionCategoryRegisterScreen(props: ICategoryRegisterModalProps) {
  const {intl} = useLocale();
  const theme = useTheme();
  const navigation = useNavigation();
  const transactionCategoryContext = useContext(TransactionCategoryContext);
  const {
    control,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: {errors},
  } = useForm();
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);
  const [iconPickerVisibility, setIconPickerVisibility] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // const onSubmit = (data) => Reactotron.log!(data);
  const onSubmit = (data: any) => {
    transactionCategoryContext?.save(new TransactionCategory(data));
    navigation.goBack();
  };

  return (
    <View style={styles.view}>
      <Header
        title={intl!.category.registration.title}
        fontFamily={'Montserrat-Medium'}
        fontColor={'black'}
        iconLeft={{
          name: 'close',
          class: ICON_CLASS.MaterialIcons,
          onPress: () => {
            navigation.goBack();
          },
        }}
      />
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 20}}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputCL
              placeholder={intl!.commons.glossary.description}
              value={value}
              onChangeText={(text) => onChange(text)}
              onBlur={onBlur}
              divider={true}
              icon={{name: 'microphone', class: ICON_CLASS.FontAwesome}}
            />
          )}
          name="name"
          rules={{required: true}}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <TextInputSelector
                onPress={() => {
                  setColorPickerVisibility(true);
                }}
                placeholder={intl!.commons.glossary.color}
                value={value}
                onBlur={onBlur}
                icon={{
                  name: 'paint-brush',
                  class: ICON_CLASS.FontAwesome,
                }}
                selectedComponent={<ColorItem color={value} selected={false} size={25} />}
              />
              <ColorSelectorModal
                title={intl!.commons.glossary.color}
                onChange={onChange}
                selectedColor={value}
                setVisibility={setColorPickerVisibility}
                visibility={colorPickerVisibility}
              />
            </View>
          )}
          name="color"
          rules={{required: true}}
          defaultValue="#75746e"
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <TextInputSelector
                onPress={() => {
                  setIconPickerVisibility(true);
                }}
                placeholder={intl!.commons.glossary.icon}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                icon={{name: 'icons', class: ICON_CLASS.FontAwesome5}}
                selectedComponent={<IconItem size={25} icon={value} color={control.fieldsRef.current.color!._f.value} fontColor={'white'} selected={false} />}
              />
              <IconSelectorModal
                color={control.fieldsRef.current.color!._f.value}
                title={intl!.commons.glossary.icon}
                onChange={onChange}
                setVisibility={setIconPickerVisibility}
                visibility={iconPickerVisibility}
              />
            </View>
          )}
          name="icon"
          rules={{required: true}}
          defaultValue={{id: -1, name: 'emoji-flirt', class: ICON_CLASS.Entypo}}
        />

        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <View style={{paddingVertical: 10}}>
              <CheckList
                fontFamily={theme.primary.main.font}
                accentColor={theme.primary.main.color}
                fontSize={14}
                initialValue={value}
                placeholder={'Adicionar subcategorias'}
                onItemChange={(data) => {
                  Reactotron.log!(data);
                  let subcategories = data.map((item) => {
                    if (item instanceof TransactionSubcategory) {
                      return item;
                    } else {
                      return new TransactionSubcategory({name: item.value, category: undefined});
                    }
                  });

                  onChange(subcategories);
                }}
                inputPosition={'top'}
                showCheckbox={false}
                focusOnSubmit={false}
              />
              <Text />
            </View>
          )}
          name="subcategories"
          rules={{required: false}}
          defaultValue={[]}
        />
      </ScrollView>

      {!isKeyboardVisible && (
        <FAB
          icon={{
            name: 'check',
            class: ICON_CLASS.MaterialIcons,
            color: theme.success.main.font,
          }}
          position={{
            bottom: 25,
            left: Dimensions.get('window').width / 2 - 45 / 2,
            right: 0,
          }}
          style={{
            fabContainer: {...SHADOW['5']},
          }}
          backgroundColor={theme.success.main.color}
          size={45}
          onPress={handleSubmit(onSubmit)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  title: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default TransactionCategoryRegisterScreen;
