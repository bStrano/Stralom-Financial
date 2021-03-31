import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, ButtonRounded} from 'react-native-stralom-components';
import Modal from 'react-native-modal';

interface ICategoryRegisterModalProps {
  isVisible: boolean;
  setVisibility: (value: boolean) => void;
}

function CategoryRegisterModal(props: ICategoryRegisterModalProps) {
  return (
    <Modal
      testID={'modal'}
      isVisible={props.isVisible}
      style={styles.view}
      animationInTiming={600}
      animationOutTiming={600}>
      <View style={styles.container}>
        <Text variant={'subtitle'} style={styles.title}>
          Criar categoria
        </Text>
        <View style={styles.buttonContainer}>
          <ButtonRounded
            mode={'outline'}
            stylesheet={{container: {flex: 1}}}
            color={'red'}
            fontColor={'white'}
            label={'CANCELAR'}
            onPress={() => props.setVisibility(false)}
          />
          <ButtonRounded
            mode={'normal'}
            stylesheet={{container: {flex: 1}}}
            color={'red'}
            fontColor={'white'}
            label={'CONFIRMAR'}
          />
        </View>
      </View>
    </Modal>
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

export default CategoryRegisterModal;
