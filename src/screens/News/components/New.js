/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomFonts} from '../../../constants/AppConstants';

const New = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <WebView source={{uri: 'https://work.thiendd.com/'}} />
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          right: 20,
          // marginTop: 50,
          paddingHorizontal: 25,
          // marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,
            elevation: 5,
          }}>
          <MaterialIcons
            name={'keyboard-backspace'}
            size={27}
            color={'#000000'}
            // style={{marginRight: 1, marginTop: 2}}
          />
        </TouchableOpacity>
        {/* <Text
          style={{
            marginLeft: 20,
            fontFamily: CustomFonts.medium,
            fontSize: 22,
            color: '#000000',
          }}
          numberOfLines={1}>
          {'Trở lại'}
        </Text> */}
      </View>
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ffffff',
  },
});
