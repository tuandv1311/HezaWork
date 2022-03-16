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
} from 'native-base';
import AppRoot from './src/AppRoot';

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
  fontConfig: {
    light: 'LeagueSpartan-Light',
    regular: 'LeagueSpartan-Regular',
    medium: 'LeagueSpartan-Medium',
    semibold: 'LeagueSpartan-SemiBold',
    bold: 'LeagueSpartan-Bold',
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    light: 'LeagueSpartan-Light',
    regular: 'LeagueSpartan-Regular',
    medium: 'LeagueSpartan-Medium',
    semibold: 'LeagueSpartan-SemiBold',
    bold: 'LeagueSpartan-Bold',
  },
});

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AppRoot />
    </NativeBaseProvider>
  );
};

export default App;
