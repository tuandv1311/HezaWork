/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
  Box,
  extendTheme,
  StatusBar,
} from 'native-base';
import AppRoot from './src/AppRoot';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

// Color Switch Component
// function ToggleDarkMode() {
//   const {colorMode, toggleColorMode} = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === 'light'}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
// const App = () => {
//   return (
//     <NativeBaseProvider>
//       <Center
//         _dark={{bg: 'blueGray.900'}}
//         _light={{bg: 'blueGray.50'}}
//         px={4}
//         flex={1}>
//         <VStack space={5} alignItems="center">
//           <Heading size="lg">Welcome to NativeBase</Heading>
//           <HStack space={2} alignItems="center">
//             <Text>Edit</Text>
//             <Code>App.js</Code>
//             <Text>and save to reload.</Text>
//           </HStack>
//           <Link href="https://docs.nativebase.io" isExternal>
//             <Text color="primary.500" underline fontSize={'xl'}>
//               Learn NativeBase
//             </Text>
//           </Link>
//           <ToggleDarkMode />
//         </VStack>
//       </Center>
//     </NativeBaseProvider>
//   );
// };

const theme = extendTheme({
  // fontConfig: {
  //   light: 'LexendDeca-Light',
  //   regular: 'LexendDeca-Regular',
  //   medium: 'LexendDeca-Medium',
  //   semibold: 'LexendDeca-SemiBold',
  //   bold: 'LexendDeca-Bold',
  //   extrabold: 'LexendDeca-ExtraBold',
  //   black: 'LexendDeca-Black',
  // },

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

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <AppRoot />
    </NativeBaseProvider>
  );
};

export default App;
