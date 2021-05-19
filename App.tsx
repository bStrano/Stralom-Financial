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
import {StyleSheet, View} from 'react-native';
import AppContainer from './src/shared/navigators/AppContainer';
import codePush from 'react-native-code-push';
import Toast from 'react-native-toast-message';
import {ThemeProvider} from 'react-native-stralom-components';
import theme from './src/shared/constants/Theme';
import LocaleProvider from './src/shared/providers/LocaleProvider';
import locales from './src/shared/locales/locales';
import LanguageHelper from './src/shared/utils/LanguageHelper';
import {QueryClient, QueryClientProvider} from 'react-query';
import LocaleEnum from './src/shared/enums/LocaleEnum';
import SessionProvider from './src/shared/providers/SessionProvider';
import EndpointProvider from './src/shared/providers/EndpointProvider';

declare const global: {HermesInternal: null | {}};
const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

const queryClient = new QueryClient();
const App = () => {
  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider initialTheme={theme}>
          <LocaleProvider locales={locales} language={LanguageHelper.getLanguage()} defaultLocale={LocaleEnum.pt_br}>
            <SessionProvider>
              <EndpointProvider>
                <AppContainer />
              </EndpointProvider>
            </SessionProvider>
          </LocaleProvider>
        </ThemeProvider>
      </QueryClientProvider>
      <Toast
        ref={(ref: any) => {
          return Toast.setRef(ref);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default codePush(codePushOptions)(App);
