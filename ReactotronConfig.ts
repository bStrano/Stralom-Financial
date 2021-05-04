import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'Stralom Financial',
    host: '192.168.0.197',
    port: 9090,
  })
  .useReactNative() // add all built-in react native plugins
  .connect();

console.tron = tron;
