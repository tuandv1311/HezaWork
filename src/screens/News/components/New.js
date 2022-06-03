/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import {WebView} from 'react-native-webview';
// import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomFonts} from '../../../constants/AppConstants';
import RenderHTML from 'react-native-render-html';
import {getNewsDetailApi} from '../../../services/api';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import admob, {
  BannerAd,
  BannerAdSize,
  TestIds,
  MaxAdContentRating,
} from '@react-native-firebase/admob';

admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(rs => {
    // Request config successfully set!
    console.log('result', rs);
  });

const adUnitIdAndroid = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-4710174142760302/9135480149';
const adUnitIdiOS = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-4710174142760302/9135480149';
// const adUnitIdAndroid = 'ca-app-pub-4710174142760302/9135480149';

const safeAreaHeight = getStatusBarHeight();

const {width} = Dimensions.get('screen');

const NewsDetail = ({navigation, route}) => {
  const {tintuc} = route.params;

  const [newsDetail, setNewsDetail] = useState([]);

  useEffect(() => {
    const onFocus = navigation.addListener('focus', () => {
      getNewsDetail();
    });
    return onFocus;
  }, [navigation]);

  const getNewsDetail = async () => {
    try {
      const data = await getNewsDetailApi(tintuc?.id_tin_tuc);
      console.log('getNewsDetail', data?.data?.ct_tin);
      setNewsDetail(data?.data?.ct_tin[0]);
    } catch (error) {
      console.log('getNewsDetail error', error);
      setNewsDetail([]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          marginTop: safeAreaHeight + 20,
          paddingHorizontal: 25,
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#eaeaea',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialIcons
            name={'keyboard-backspace'}
            size={27}
            color={'#000000'}
            // style={{marginRight: 1, marginTop: 2}}
          />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 30,
            marginBottom: 1,
            fontFamily: CustomFonts.medium,
            fontSize: 17,
            color: '#000000',
          }}>
          {newsDetail?.tieu_de}
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 20}}>
        <RenderHTML
          contentWidth={width}
          source={{
            html: newsDetail?.noi_dung,
          }}
          tagsStyles={{
            div: {
              fontSize: 15,
              fontFamily: CustomFonts.regular,
              lineHeight: 22,
            },
            h3: {
              fontSize: 16,
              fontFamily: CustomFonts.bold,
            },
            p: {
              fontSize: 16,
              fontFamily: CustomFonts.regular,
              lineHeight: 22,
            },
          }}
        />
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <BannerAd
            unitId={Platform.OS === 'android' ? adUnitIdAndroid : adUnitIdiOS}
            size={BannerAdSize.MEDIUM_RECTANGLE}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
            onAdOpened={e => console.log('onAdOpened', e)}
            onAdFailedToLoad={e => {
              console.log('onAdFailedToLoad', e);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    backgroundColor: '#ffffff',
  },
});
