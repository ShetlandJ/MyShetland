/** @format */

import {AppRegistry} from 'react-native';
import Home from './src/components/Home/Home';
import Roads from './src/components/Roads/Home';

import {name as appName} from './app.json';
import { StackNavigator } from 'react-navigation';

// const SimpleApp = StackNavigator({
//   Home: { screen: Home }, //Default entry screen
//   Roads: { screen: Roads }
//
// });
//
// AppRegistry.registerComponent(appName, () => SimpleApp);


AppRegistry.registerComponent(appName, () => Home);
