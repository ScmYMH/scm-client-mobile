/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {Provider, useStore} from 'react-redux';
import HomeNavigation from './src/navigation/HomeNavigation';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeNavigation></HomeNavigation>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
