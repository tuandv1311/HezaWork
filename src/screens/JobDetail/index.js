/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Text} from 'native-base';
import JobTabView from './components/JobTabView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('screen');

const JobDetail = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        // backgroundColor="red"
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/images/bg_detail.png')}
        resizeMode="cover"
        style={styles.bgImage}>
        <View style={{marginTop: 50, paddingHorizontal: 25}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#FFFFFF90',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              name={'md-chevron-back'}
              size={27}
              color={'#FFFFFF'}
              style={{marginRight: 1, marginTop: 2}}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{marginTop: -30, paddingHorizontal: 25}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.logo}>
            <FastImage
              style={{
                width: '100%',
                height: '100%',
              }}
              source={item.logo}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={{marginLeft: 10, flex: 1}}>
            <Text
              style={{}}
              numberOfLines={1}
              fontFamily="medium"
              fontSize="15"
              color={'#FFFFFF'}>
              {'Công ty TNHH Đóng tàu Bình An'}
            </Text>
            <Text
              style={{marginTop: 5}}
              numberOfLines={2}
              fontFamily="regular"
              fontSize="12"
              color={'#6a676a'}>
              {
                'Km 92/QL5, hường Hùng Vương, quận Hồng Bàng, thành phố Hải Phòng'
              }
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default JobDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 30,
    // paddingTop: 40,
    paddingBottom: 100,
    backgroundColor: '#FFFFFF',
  },
  bgImage: {
    width: '100%',
    height: 160,
  },
  mainContent: {
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    padding: 10,
    backgroundColor: '#f1f0f7',

    overflow: 'hidden',
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 5,
  },
});
