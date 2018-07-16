import {AppRegistry, NativeModules} from 'react-native';
import App from './src/containers';

if (process.env.NODE_ENV !== 'production') {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

AppRegistry.registerComponent('Shynee', () => App);
