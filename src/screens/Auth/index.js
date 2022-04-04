/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {CustomFonts} from '../../constants/AppConstants';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {fakeLogin, getFakeAuth} from '../../services/helpers';
import {AuthContext} from '../../AppRoot';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const safeAreaHeight = getStatusBarHeight();

const AuthScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const {signIn} = useContext(AuthContext);

  useEffect(() => {}, []);

  const onChangeAuthRoute = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowLogin(!showLogin);
  };

  const Login = () => {
    return (
      <View>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 25,
            marginBottom: 20,
          }}>
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: CustomFonts.medium,
              fontSize: 28,
              color: '#000000',
            }}
            numberOfLines={2}>
            {'Đăng nhập'}
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              fontFamily: CustomFonts.regular,
              fontSize: 16,
              color: '#6a676a',
            }}
            numberOfLines={2}>
            {'Sử dụng email đã đăng ký của bạn'}
          </Text>
        </View>
        <View style={styles.textInput}>
          <MaterialIcons name={'email'} size={24} color={'#cacdd8'} />
          <TextInput
            placeholder={'Email'}
            placeholderTextColor={'#cacdd8'}
            style={styles.searchBar}
            value={email}
            onChangeText={setEmail}
            keyboardType={'email-address'}
          />
        </View>
        <View style={styles.textInput}>
          <MaterialIcons name={'lock'} size={24} color={'#cacdd8'} />
          <TextInput
            placeholder={'Password'}
            placeholderTextColor={'#cacdd8'}
            style={styles.searchBar}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={showPassword}
          />
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={'eye'} size={24} color={'#cacdd8'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => signIn({username: 'viettuan', password: 'viettuan'})}
          style={{
            flex: 1,
            marginTop: 30,
            marginHorizontal: 30,
            paddingVertical: 20,
            backgroundColor: '#6ecb96',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginBottom: 1,
              fontFamily: CustomFonts.semibold,
              fontSize: 18,
              color: '#FFFFFF',
            }}
            numberOfLines={1}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <View
          style={{
            marginTop: 15,
            alignItems: 'center',
            marginHorizontal: 30,
          }}>
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: CustomFonts.medium,
              fontSize: 14,
              color: '#6a676a',
            }}
            numberOfLines={2}>
            {'Chưa có tài khoản?'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onChangeAuthRoute}
          style={{
            flex: 1,
            marginTop: 15,
            marginHorizontal: 30,
            paddingVertical: 20,
            backgroundColor: '#e1d2fe',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginBottom: 1,
              fontFamily: CustomFonts.semibold,
              fontSize: 18,
              color: '#8054ef',
            }}
            numberOfLines={1}>
            Tạo tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const SignUp = () => {
    return (
      <View>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 25,
            marginBottom: 20,
          }}>
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: CustomFonts.medium,
              fontSize: 28,
              color: '#000000',
            }}
            numberOfLines={2}>
            {'Tạo tài khoản'}
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              marginTop: 10,
              fontFamily: CustomFonts.regular,
              fontSize: 16,
              color: '#6a676a',
            }}
            numberOfLines={2}>
            {'Sử dụng email để đăng ký tài khoản'}
          </Text>
        </View>
        <View style={styles.textInput}>
          <MaterialIcons name={'email'} size={24} color={'#cacdd8'} />
          <TextInput
            placeholder={'Email'}
            placeholderTextColor={'#cacdd8'}
            style={styles.searchBar}
            value={email}
            onChangeText={setEmail}
            keyboardType={'email-address'}
          />
        </View>
        <View style={styles.textInput}>
          <MaterialIcons name={'lock'} size={24} color={'#cacdd8'} />
          <TextInput
            placeholder={'Password'}
            placeholderTextColor={'#cacdd8'}
            style={styles.searchBar}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={showPassword}
          />
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={'eye'} size={24} color={'#cacdd8'} />
          </TouchableOpacity>
        </View>
        <View style={styles.textInput}>
          <MaterialIcons name={'lock'} size={24} color={'#cacdd8'} />
          <TextInput
            placeholder={'Nhập lại password'}
            placeholderTextColor={'#cacdd8'}
            style={styles.searchBar}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={showPassword}
          />
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={'eye'} size={24} color={'#cacdd8'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => signIn({username: 'viettuan', password: 'viettuan'})}
          style={{
            flex: 1,
            marginTop: 30,
            marginHorizontal: 30,
            paddingVertical: 20,
            backgroundColor: '#6ecb96',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginBottom: 1,
              fontFamily: CustomFonts.semibold,
              fontSize: 18,
              color: '#FFFFFF',
            }}
            numberOfLines={1}>
            Đăng ký
          </Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <View
          style={{
            marginTop: 15,
            alignItems: 'center',
            marginHorizontal: 30,
          }}>
          <Text
            style={{
              marginHorizontal: 10,
              fontFamily: CustomFonts.medium,
              fontSize: 14,
              color: '#6a676a',
            }}
            numberOfLines={2}>
            {'Đã có tài khoản?'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={onChangeAuthRoute}
          style={{
            flex: 1,
            marginTop: 15,
            marginHorizontal: 30,
            paddingVertical: 20,
            backgroundColor: '#e1d2fe',
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginBottom: 1,
              fontFamily: CustomFonts.semibold,
              fontSize: 18,
              color: '#8054ef',
            }}
            numberOfLines={1}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          // backgroundColor="red"
          translucent={true}
        />
        <FastImage
          style={{
            height: 200,
            marginHorizontal: 30,
          }}
          source={require('../../assets/images/welcome.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
        {showLogin ? <Login /> : <SignUp />}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: safeAreaHeight,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flex: 1,
    fontFamily: CustomFonts.regular,
    fontSize: 16,
    marginLeft: 10,
    paddingVertical: 15,
    backgroundColor: '#fbf8ff',
  },
  separator: {
    height: 2,
    marginHorizontal: 30,
    backgroundColor: '#f3f3f3',
    marginTop: 30,
  },
  textInput: {
    marginTop: 25,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#8054ef',
    backgroundColor: '#fbf8ff',
    borderRadius: 30,
    overflow: 'hidden',
    paddingLeft: 15,
    paddingRight: 10,
  },
});
