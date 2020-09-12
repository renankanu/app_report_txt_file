import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '0.0.0.0' })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
  console.log = Reactotron.log;
  console.warn = Reactotron.warn;
  console.error = Reactotron.error;
}
