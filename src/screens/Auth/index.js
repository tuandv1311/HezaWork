/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  // LayoutAnimation,
  Linking,
  // Platform,
  // UIManager,
  // Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {CustomFonts} from '../../constants/AppConstants';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {} from '../../services/helpers';
import {AuthContext} from '../../AppRoot';
import {loginApi} from '../../services/api';
// import {WebView} from 'react-native-webview';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import LoadingView from '../../components/LoadingView';

// if (Platform.OS === 'android') {
//   if (UIManager.setLayoutAnimationEnabledExperimental) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//   }
// }
const {height} = Dimensions.get('window');
const safeAreaHeight = getStatusBarHeight();
// const emailDummy = 'yenlinh25122008@gmail.com';
// const passwordDummy = 'phamhaiyen';

const AuthScreen = ({navigation, setShowLoginPage}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [validate, setValidate] = useState();

  const [showPassword, setShowPassword] = useState(true);
  // const [showLogin, setShowLogin] = useState(true);
  const {signIn} = useContext(AuthContext);

  // const email = useRef('');
  // const password = useRef('');

  // useEffect(() => {
  //   // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  //   setValidate();
  // }, [email, password]);

  // const onChangeAuthRoute = () => {
  //   setShowLogin(!showLogin);
  // };

  const onLogin = async () => {
    setLoading(true);
    try {
      const result = await loginApi(email, password);
      console.log('onLogin result', result, email, password);
      if (result.data !== '') {
        setShowLoginPage(false);
        signIn(result.data);
        setLoading(false);
      } else {
        // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setValidate('Email hoặc Password chưa chính xác!');
        setLoading(false);
      }
    } catch (error) {
      console.log('onLogin error', error);
      setLoading(false);
    }
  };

  const onValidateBeforeLogin = () => {
    if (email.length === 0 || password.length === 0) {
      setValidate('Email và Password không được để trống!');
    } else {
      setValidate();
      onLogin();
    }
  };

  const onSignup = async () => {
    try {
      const url = 'https://work.thiendd.com/dang_ky';
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'automatic',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });
        console.log('onSignup', result);
      } else {
        Linking.openURL(url);
      }
    } catch (error) {
      console.log('onSignup error', error.message);
    }
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
              onChangeText={onChangeEmail}
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
              onChangeText={onChangePassword}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Ionicons name={'eye'} size={24} color={'#cacdd8'} />
              ) : (
                <Ionicons name={'eye-off'} size={24} color={'#cacdd8'} />
              )}
            </TouchableOpacity>
          </View>
          {validate && (
            <View
              style={{alignItems: 'center', marginTop: 20, marginBottom: -10}}>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontFamily: CustomFonts.regular,
                  fontSize: 16,
                  color: '#f5222d',
                }}>
                {validate}
              </Text>
            </View>
          )}
          <TouchableOpacity
            onPress={onValidateBeforeLogin}
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
                textAlign: 'center',
              }}
              numberOfLines={2}>
              {'Chưa có tài khoản?'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={onSignup}
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
      </View>
      {loading && (
        <View style={styles.loading}>
          <LoadingView />
        </View>
      )}
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
  loading: {
    // backgroundColor: '#00000050',
    position: 'absolute',
    width: '100%',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
