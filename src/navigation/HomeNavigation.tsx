import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  StackActionHelpers,
  TabActionHelpers,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import AppMain from './../components/AppMain';
import NewSignUp from './../components/NewSignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppMain"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppMain" component={AppMain}></Stack.Screen>
      <Stack.Screen name="NewSignUp" component={NewSignUp}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
