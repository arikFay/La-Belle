/**
 * @format
 */

import { enableScreens } from 'react-native-screens';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer

enableScreens(); // Add this line to enable screens


const LaBelleApp = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => LaBelleApp); // Register LaBelleApp instead of App
