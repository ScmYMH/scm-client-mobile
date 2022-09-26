import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/ict_logo.png';

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        source={Logo}
        style={{width: 110, height: 50, resizeMode: 'cover'}}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightgray',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});

export default AppHeader;
