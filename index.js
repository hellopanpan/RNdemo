/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

if (__DEV__) {
  import('./src/ReactotronConfig').then(() => {
    console.log('Reactotron Configured')
  })
}
