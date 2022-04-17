import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import JobSearch from './screens/JobSearch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeviceInfo from 'react-native-device-info';
import {CustomFonts, SET_LOGIN} from './constants/AppConstants';
// import {View} from 'native-base';
import JobDetail from './screens/JobDetail';
import Auth from './screens/Auth';

import News from './screens/News';
import New from './screens/News/components/New';
import Profile from './screens/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getLoginData, saveLoginData} from './services/helpers';

const AuthContext = React.createContext();

const hasNotch = DeviceInfo.hasNotch();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconColor;
          if (route.name === 'Trang chủ') {
            iconName = 'home';
            iconColor = focused ? '#8054ef' : '#A7A7A7';
          }
          if (route.name === 'Công việc') {
            iconName = 'briefcase';
            iconColor = focused ? '#8054ef' : '#A7A7A7';
          }
          if (route.name === 'Tin tức') {
            iconName = 'newspaper';
            iconColor = focused ? '#8054ef' : '#A7A7A7';
          }
          if (route.name === 'Cá nhân') {
            iconName = 'people';
            iconColor = focused ? '#8054ef' : '#A7A7A7';
          }
          return <Ionicons name={iconName} size={24} color={iconColor} />;
        },
        tabBarActiveTintColor: '#8054ef',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? '10%' : 70,
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
        safeAreaInset: {bottom: 'never', top: 'never'},
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Trang chủ"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Công việc"
        component={JobSearch}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Tin tức"
        component={News}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Cá nhân"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const AppRoot = () => {
  const [userData, setUserData] = React.useState();

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    getUserData();
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = JSON.parse(await AsyncStorage.getItem(SET_LOGIN));
        console.log('userToken', userToken);
      } catch (e) {
        // Restoring token failed
        console.log('Restoring token failed', e);
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  React.useEffect(() => {}, [userData]);

  const getUserData = async () => {
    const result = await getLoginData();
    console.log('getUserData', result);

    setUserData(result);
  };

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        saveLoginData(data);
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? (
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Auth"
              component={Auth}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="BottomTab"
              component={BottomTab}
            />
            <Stack.Screen
              name={'JobDetail'}
              component={JobDetail}
              options={{
                headerShown: false,
                tabBarVisible: false,
              }}
            />
            <Stack.Screen
              name={'New'}
              component={New}
              options={{
                headerShown: false,
                tabBarVisible: false,
              }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export {AuthContext};

export default AppRoot;
