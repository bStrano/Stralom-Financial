/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import 'react-native-get-random-values';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state', 'Setting a timer']);
AppRegistry.registerComponent(appName, () => App);
