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
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider, useStore} from 'react-redux';
import AppHeader from './src/components/AppHeader';
import AppMain from './src/components/AppMain';
import Maind from './src/components/AppMain';
import Main from './src/components/AppMain';
import NewSignUp from './src/components/NewSignUp';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          <AppMain></AppMain>
        </View>
      </SafeAreaView>
    </Provider>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"

    //     {/* <AppHeader></AppHeader> */}

    //       <AppMain></AppMain>
    //       {/* <NewSignUp></NewSignUp> */}
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
