/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native';
import React from 'react';
import {Input, Icon, Avatar} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {CustomFonts, popularJobs} from '../../constants/AppConstants';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const tabbarHeight = useBottomTabBarHeight();

  const renderPopularItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('JobDetail', {item: item})}
        style={[
          styles.jobItem,
          {
            width: (width * 60) / 100,
            backgroundColor:
              index % 3 === 0
                ? '#6ecb96'
                : index % 2 === 0
                ? '#ea5f71'
                : '#6174fa',
          },
        ]}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
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
          {/* <TouchableOpacity>
            <FastImage
              style={{
                width: 40,
                height: 40,
              }}
              source={
                index % 2
                  ? require('../../assets/icons/ic_save.png')
                  : require('../../assets/icons/ic_save.png')
              }
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity> */}
          <Text
            numberOfLines={2}
            style={{
              flex: 1,
              marginLeft: 7,
              fontFamily: CustomFonts.medium,
              fontSize: 17,
              color: '#FFFFFF',
            }}>
            Công ty TNHH Đóng tàu Bình An
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              backgroundColor: '#8054ef90',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name={'briefcase'} size={22} color={'#FFFFFF'} />
          </View>
          <View style={{marginLeft: 7}}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: CustomFonts.regular,
                fontSize: 14,
                color: '#FFFFFF90',
              }}>
              Công việc
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: CustomFonts.medium,
                fontSize: 15,
                color: '#FFFFFF',
              }}>
              Thợ sắt hàn
            </Text>
          </View>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              backgroundColor: '#8054ef90',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name={'coins'} size={22} color={'#FFFFFF'} />
          </View>
          <View style={{marginLeft: 7}}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: CustomFonts.regular,
                fontSize: 14,
                color: '#FFFFFF90',
              }}>
              Mức lương
            </Text>
            <Text
              style={{
                marginBottom: 1,
                fontFamily: CustomFonts.medium,
                fontSize: 15,
                color: '#FFFFFF',
              }}
              numberOfLines={1}>
              10-15 Triệu
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <View
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
              backgroundColor: '#FFFFFF30',
            }}>
            <Text
              style={{
                marginBottom: 1,
                fontFamily: CustomFonts.medium,
                fontSize: 14,
                color: '#FFFFFF',
              }}>
              Làm chính thức
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 7,
              backgroundColor: '#f5a545',
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}>
            <FastImage
              style={{width: 20, height: 20}}
              source={require('../../assets/icons/ic_save.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text
              style={{
                marginLeft: 7,
                fontFamily: CustomFonts.medium,
                fontSize: 14,
                color: '#FFFFFF',
              }}
              numberOfLines={1}>
              {'Like'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRecommendedItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('JobDetail', {item: item})}
        style={[
          styles.jobItem,
          {
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: undefined,
            borderRadius: 20,
            // borderLeftWidth: 7,
            marginBottom: 10,
          },
        ]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={[
              styles.logo,
              {
                marginRight: 10,
                width: 70,
                height: 70,
                padding: 10,
                backgroundColor: '#f1f0f7',
              },
            ]}>
            <FastImage
              style={{
                width: '100%',
                height: '100%',
              }}
              source={item.logo}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                width: '100%',
                fontFamily: CustomFonts.medium,
                fontSize: 16,
                color: '#000000',
              }}
              numberOfLines={1}>
              {item.job_name}
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: CustomFonts.regular,
                fontSize: 14,
                color: '#6a676a',
              }}
              numberOfLines={1}>
              {'Công ty TNHH Đóng tàu Bình An'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  backgroundColor: '#6ecb96',
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    marginBottom: 1,
                    fontFamily: CustomFonts.regular,
                    fontSize: 14,
                    color: '#FFFFFF',
                  }}
                  numberOfLines={1}>
                  {'10-15 Triệu'}
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  backgroundColor: '#6174fa',
                  borderRadius: 15,
                  marginLeft: 5,
                }}>
                <Text
                  style={{
                    marginBottom: 1,
                    fontFamily: CustomFonts.regular,
                    fontSize: 14,
                    color: '#FFFFFF',
                  }}
                  numberOfLines={1}>
                  {'Làm chính thức'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: tabbarHeight + 50}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        // backgroundColor="red"
        translucent={true}
      />
      <View
        style={{
          // position: 'absolute',
          backgroundColor: '#8054ef',
          width: '100%',
          height: 170,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      />
      <View style={{marginTop: -145}}>
        <View style={styles.header}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: CustomFonts.bold,
                fontSize: 24,
                color: '#FFFFFF',
              }}>
              {'Welcome back !'}
            </Text>
            <Text
              style={{
                fontFamily: CustomFonts.medium,
                fontSize: 18,
                color: '#FFFFFF',
                marginTop: 5,
              }}>
              {'Chào, Tuan Dinh'}
            </Text>
          </View>
          <View>
            {/* <Ionicons name={'newspaper'} size={24} color={'#000000'} /> */}
            <Avatar
              bg="green.500"
              source={{
                uri: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/145775551_3261099993996131_3501307941742539165_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IFOij_1MMmgAX-u8VF0&_nc_ht=scontent.fhan2-4.fna&oh=00_AT_0bNLHIOIFRGxzPEg10vPOqn5rVAZfx3YBniCWOzBJtg&oe=6255D11F',
              }}>
              VT
            </Avatar>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Công việc')}
          style={styles.searchBar}>
          <Ionicons name={'search'} size={24} color={'#cacdd8'} />
          <Text style={styles.search}>Tìm kiếm công việc ...</Text>
        </TouchableOpacity>
        <View style={styles.bestJobs}>
          <Text
            style={{
              marginHorizontal: 25,
              fontFamily: CustomFonts.medium,
              fontSize: 20,
              color: '#000000',
            }}>
            {'Việc làm tốt nhất'}
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 15,
              paddingBottom: 20,
              paddingLeft: 25,
              // paddingRight: 15,
            }}
            data={popularJobs}
            renderItem={renderPopularItem}
            keyExtractor={item => String(item.id)}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              marginHorizontal: 25,
              fontFamily: CustomFonts.medium,
              fontSize: 20,
              color: '#393939',
            }}>
            {'Việc làm mới đăng tuyển'}
          </Text>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{
              paddingTop: 15,
              paddingBottom: 20,
              paddingHorizontal: 25,
            }}
            data={popularJobs}
            renderItem={renderRecommendedItem}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 25,
  },
  searchBar: {
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: '#fbf8ff',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 3,
  },
  search: {
    fontFamily: CustomFonts.regular,
    color: '#cacdd8',
    fontSize: 16,
    marginLeft: 10,
  },
  menu: {
    borderRadius: 10,
    height: 48,
    width: 48,
    marginLeft: 10,
    backgroundColor: '#8054ef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestJobs: {
    marginTop: 10,
  },
  jobItem: {
    marginRight: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 50,
    height: 50,
    padding: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF30',
    borderRadius: 15,
    shadowColor: '#00000010',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 5,
  },
});
