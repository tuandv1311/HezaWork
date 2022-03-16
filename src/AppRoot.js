import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import JobSearch from './screens/JobSearch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeviceInfo from 'react-native-device-info';
import { CustomFonts } from './constants/AppConstants';
import { View } from 'native-base';

const hasNotch = DeviceInfo.hasNotch();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;
          if (route.name === 'Home') {
            iconName = 'home';
            iconColor = focused ? '#7936ff' : '#A7A7A7';
          } else if (route.name === 'Jobs') {
            iconName = 'briefcase';
            iconColor = focused ? '#7936ff' : '#A7A7A7';
          } else {
            iconName = 'settings-outline';
            iconColor = focused ? '#7936ff' : '#A7A7A7';
          }
          return <Ionicons name={iconName} size={24} color={iconColor} />;
        },
        tabBarActiveTintColor: '#7936ff',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarStyle: {
          height: '10%',
          // height: 90,
          paddingTop: 10,
          // backgroundColor: 'rgba(196, 196, 196, 0.01)',
          // borderTopColor: 'rgba(196, 196, 196, 0.01)',
          // borderTopColor: '#E5E5E533',
          // borderTopWidth: 0.5,
          // borderRadius: 20,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,
          elevation: 25,
        },
        // tabBarBackground: () => (
        //   <View
        //     style={{
        //       backgroundColor: '#FFFFFF',
        //       width: '100%',
        //       height: '100%',
        //       borderTopLeftRadius: 16,
        //       borderTopRightRadius: 16,
        //     }}
        //   />
        // ),
        tabBarLabelStyle: {
          fontFamily: CustomFonts.semibold,
          fontSize: 13,
          marginBottom: Platform.OS === 'ios' && hasNotch ? undefined : 12,
        },
        style: {
          backgroundColor: '#FFFFFF',
        },
        safeAreaInset: { bottom: 'never', top: 'never' },
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Jobs"
        component={JobSearch}
      />
    </Tab.Navigator>
  );
}

const AppRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="BottomTab"
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoot;
