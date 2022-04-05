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
import {WebView} from 'react-native-webview';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomFonts} from '../../../constants/AppConstants';
import RenderHTML from 'react-native-render-html';
import {getNewsDetailApi} from '../../../services/api';
import {getStatusBarHeight} from 'react-native-status-bar-height';

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
