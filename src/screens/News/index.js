/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Text,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import dummyNews from './data';
import { FlatList } from 'native-base';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CustomFonts } from '../../constants/AppConstants';
import { getNewsListApi } from '../../services/api';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const safeAreaHeight = getStatusBarHeight();
const { width } = Dimensions.get('screen');

const News = ({ navigation }) => {
  const tabbarHeight = useBottomTabBarHeight();

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const onFocus = navigation.addListener('focus', () => {
      getNewsList();
    });
    return onFocus;
  }, [navigation]);

  const getNewsList = async () => {
    try {
      const data = await getNewsListApi();
      console.log('getNewsList', data);
      setNewsList(data?.data);
    } catch (error) {
      console.log('getNewsList error', error);
      setNewsList([]);
    }
  };

  // const renderLatestNews = ({item}) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => navigation.navigate('New', {item: item})}
  //       style={styles.latestNew}>
  //       <FastImage
  //         style={{
  //           width: '100%',
  //           height: 130,
  //           borderRadius: 10,
  //         }}
  //         source={{
  //           uri: `https://tuyendung.haiphong.vn/assets/uploads/${item?.anh_mh}`,
  //         }}
  //         resizeMode={FastImage.resizeMode.cover}
  //       />
  //       <Text
  //         numberOfLines={2}
  //         style={{
  //           marginTop: 10,
  //           fontFamily: CustomFonts.medium,
  //           fontSize: 14,
  //           color: '#000000',
  //         }}>
  //         {item?.tieu_de}
  //       </Text>
  //       <View
  //         style={{
  //           marginTop: 7,
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           justifyContent: 'space-between',
  //           paddingHorizontal: 2,
  //         }}>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //           }}>
  //           <FontAwesome5 name={'calendar-alt'} size={14} color={'#8054ef'} />
  //           <Text
  //             style={{
  //               fontFamily: CustomFonts.light,
  //               fontSize: 13,
  //               color: '#6a676a',
  //               marginTop: 2,
  //               marginLeft: 5,
  //             }}>
  //             {item?.ngay_gui}
  //           </Text>
  //         </View>
  //         {/* <View
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //           }}>
  //           <FontAwesome5 name={'eye'} size={14} color={'#8054ef'} />
  //           <Text
  //             style={{
  //               fontFamily: CustomFonts.light,
  //               fontSize: 13,
  //               color: '#6a676a',
  //               marginLeft: 5,
  //             }}>
  //             130
  //           </Text>
  //         </View> */}
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  const renderAllNews = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('New', { tintuc: item })}
        style={{
          flexDirection: 'row',
          backgroundColor: '#fbf8ff',
          padding: 15,
          borderRadius: 15,
          marginBottom: 20,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,

          elevation: 5,
        }}>
        <FastImage
          style={{
            width: 100,
            height: 100,
            borderRadius: 5,
            marginRight: 10,
          }}
          source={{
            uri: `https://tuyendung.haiphong.vn/assets/uploads/${item?.anh_mh}`,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={{ flex: 1 }}>
          <Text
            numberOfLines={3}
            style={{
              fontFamily: CustomFonts.medium,
              fontSize: 14,
              color: '#000000',
            }}>
            {item.tieu_de}
          </Text>
          <View
            style={{
              marginTop: 7,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome5 name={'calendar-alt'} size={14} color={'#8054ef'} />
              <Text
                style={{
                  fontFamily: CustomFonts.light,
                  fontSize: 13,
                  color: '#6a676a',
                  marginTop: 2,
                  marginLeft: 5,
                }}>
                {item?.ngay_gui}
              </Text>
            </View>
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome5 name={'eye'} size={14} color={'#8054ef'} />
              <Text
                style={{
                  fontFamily: CustomFonts.light,
                  fontSize: 13,
                  color: '#6a676a',
                  marginLeft: 5,
                }}>
                130
              </Text>
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Text style={styles.title} numberOfLines={1}>
        {'Tin tức'}
      </Text>
      {/* <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 15,
            paddingBottom: 20,
            paddingLeft: 25,
            // paddingRight: 15,
          }}
          data={newsList}
          renderItem={renderLatestNews}
          keyExtractor={item => String(item.id_tin_tuc)}
        />
      </View> */}
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{
            paddingTop: 15,
            paddingBottom: tabbarHeight,
            paddingHorizontal: 25,
          }}
          data={newsList}
          renderItem={renderAllNews}
          keyExtractor={item => String(item.id_tin_tuc)}
        />
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: safeAreaHeight + 20,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
  },
  latestNew: {
    width: width / 1.5,
    backgroundColor: '#fbf8ff',
    padding: 15,
    marginRight: 20,
    borderRadius: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },
  title: {
    marginHorizontal: 25,
    marginBottom: 5,
    fontFamily: CustomFonts.semibold,
    fontSize: 22,
    color: '#000000',
  },
});
