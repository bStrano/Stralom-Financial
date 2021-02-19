/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import AppContainer from './src/navigators/AppContainer';
import codePush from 'react-native-code-push';

import Toast from 'react-native-toast-message';

declare const global: {HermesInternal: null | {}};
const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppContainer isLoggedIn={true} />
      <Toast
        ref={(ref: any) => {
          return Toast.setRef(ref);
        }}
      />
    </View>
  );
};

export default codePush(codePushOptions)(App);
