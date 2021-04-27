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
import AppContainer from './src/shared/navigators/AppContainer';
import codePush from 'react-native-code-push';

import Toast from 'react-native-toast-message';
import {ThemeProvider} from 'react-native-stralom-components';
import theme from './src/shared/constants/Theme';
import LocaleProvider from './src/shared/providers/LocaleProvider';
import locales from './src/shared/locales/locales';
import LanguageHelper from './src/shared/utils/LanguageHelper';

declare const global: {HermesInternal: null | {}};
const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ThemeProvider initialTheme={theme}>
        <LocaleProvider
          locales={locales}
          language={LanguageHelper.getLanguage()}>
          <AppContainer isLoggedIn={true} />
        </LocaleProvider>
      </ThemeProvider>
      <Toast
        ref={(ref: any) => {
          return Toast.setRef(ref);
        }}
      />
    </View>
  );
};

export default codePush(codePushOptions)(App);
