// store/actions/...
// store/reducers/...
import React, { useEffect, useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import OredersReducer from './src/store/reducers/OredersReducer';
import LaunchScreen from './src/components/LaunchScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Load the font
Icon.loadFont();


// Combine your reducers
const rootReducer = combineReducers({
  oreders: OredersReducer
});

const store = createStore(rootReducer);

const App = () => {
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Simulate initialization process
    setTimeout(() => {
      setIsInitializing(false);
    }, 5000); // Adjust this time based on your app's initialization time
  }, []);

  return (
    <Provider store={store}>
      {isInitializing ? <LaunchScreen /> : <AppNavigator />}
    </Provider>
  );
};

export default App;
