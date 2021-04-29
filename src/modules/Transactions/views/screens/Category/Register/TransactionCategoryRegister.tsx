import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonRounded, ICON_CLASS, Text} from 'react-native-stralom-components';
import {useNavigation} from '@react-navigation/native';
import useLocale from '../../../../../../shared/hooks/useLocale';
import TextInputCL from './TextInput/TextInputCL';
import {Controller, useForm} from 'react-hook-form';
import TextInputSelector from './TextInput/TextInputSelector';
import ColorSelectorModal from './ColorSelectorModal/ColorSelectorModal';
import ColorItem from './ColorSelectorModal/ColorItem/ColorItem';
import IconSelectorModal from './IconSelectorModal/IconSelectorModal';
import IconItem from './IconSelectorModal/IconItem/IconItem';

interface ICategoryRegisterModalProps {
  isVisible: boolean;
  setVisibility: (value: boolean) => void;
}

function TransactionCategoryRegister(props: ICategoryRegisterModalProps) {
  const {intl} = useLocale();
  const navigation = useNavigation();
  const {
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: {errors},
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const [colorPickerVisibility, setColorPickerVisibility] = useState(false);
  const [iconPickerVisibility, setIconPickerVisibility] = useState(false);
  console.log(intl);
  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text variant={'subtitle'} style={styles.title}>
          {intl!.category.registration.title}
        </Text>

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputCL
              placeholder={'Description'}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              divider={true}
              icon={{name: 'phone', class: ICON_CLASS.MaterialIcons}}
            />
          )}
          name="firstName"
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
                placeholder={'Color'}
                value={value}
                onBlur={onBlur}
                icon={{
                  name: 'paint-brush',
                  class: ICON_CLASS.FontAwesome,
                }}
                selectedComponent={
                  <ColorItem color={value} selected={false} size={24} />
                }
              />
              <ColorSelectorModal
                title={'Color'}
                onChange={onChange}
                selectedColor={value}
                setVisibility={setColorPickerVisibility}
                visibility={colorPickerVisibility}
              />
            </View>
          )}
          name="color"
          rules={{required: true}}
          defaultValue=""
        />

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <TextInputSelector
                onPress={() => {
                  setIconPickerVisibility(true);
                }}
                placeholder={'Icon'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                icon={{name: 'icons', class: ICON_CLASS.FontAwesome5}}
                selectedComponent={
                  <IconItem
                    size={24}
                    icon={value}
                    color={'#75746e'}
                    fontColor={'white'}
                    selected={false}
                  />
                }
              />
              <IconSelectorModal
                title={'Color'}
                onChange={onChange}
                setVisibility={setIconPickerVisibility}
                visibility={iconPickerVisibility}
              />
            </View>
          )}
          name="firstName"
          rules={{required: true}}
          defaultValue=""
        />

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
