/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NativeBaseProvider, extendTheme, StatusBar} from 'native-base';
import AppRoot from './src/AppRoot';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import ModalUpdateApp from './src/components/ModalUpdateApp';

LogBox.ignoreAllLogs();

const theme = extendTheme({
  fontConfig: {
    light: 'LexendDeca-Light',
    regular: 'LexendDeca-Regular',
    medium: 'LexendDeca-Medium',
    semibold: 'LexendDeca-SemiBold',
    bold: 'LexendDeca-Bold',
    extrabold: 'LexendDeca-ExtraBold',
    black: 'LexendDeca-Black',
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    light: 'LexendDeca-Light',
    regular: 'LexendDeca-Regular',
    medium: 'LexendDeca-Medium',
    semibold: 'LexendDeca-SemiBold',
    bold: 'LexendDeca-Bold',
    extrabold: 'LexendDeca-ExtraBold',
    black: 'LexendDeca-Black',
  },
});

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_START};

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <AppRoot />
      <ModalUpdateApp />
    </NativeBaseProvider>
  );
};

export default codePush(codePushOptions)(App);
