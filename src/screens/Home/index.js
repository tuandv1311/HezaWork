/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Text,
  Platform,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {CustomFonts} from '../../constants/AppConstants';
import FastImage from 'react-native-fast-image';
import {getJobsListApi, submitCVApi} from '../../services/api';
import {addJobData, getLoginData} from '../../services/helpers';
import LoadingView from '../../components/LoadingView';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import DeviceInfo from 'react-native-device-info';

const hasNotch = DeviceInfo.hasNotch();
const safeAreaHeight = getStatusBarHeight();
const {width} = Dimensions.get('screen');

const HomeScreen = ({navigation}) => {
  const tabbarHeight = useBottomTabBarHeight();
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    setLoading(true);
    onGetLoginData();
  }, []);

  useEffect(() => {
    const onFocus = navigation.addListener('focus', () => {
      getJobsList();
    });
    return onFocus;
  }, [navigation]);

  const getJobsList = async () => {
    try {
      const data = await getJobsListApi();
      console.log('getJobsList', data);
      setJobsList(data?.data);
      setLoading(false);
    } catch (error) {
      console.log('getJobsList error', error);
      setJobsList([]);
      setLoading(false);
    }
  };

  const onGetLoginData = async () => {
    const result = await getLoginData();
    console.log('onGetLoginData', result);
    setName(result.ho_ten);
    setUserId(result.id_nguoi_dung);
  };

  const onSaveJob = async data => await addJobData(data);

  const renderPopularItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('JobDetail', {item: item, userId: userId})
        }
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
              source={{
                uri: `https://tuyendung.haiphong.vn/assets/uploads/${item?.logo}`,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text
            numberOfLines={2}
            style={{
              flex: 1,
              marginLeft: 7,
              fontFamily: CustomFonts.medium,
              fontSize: 17,
              color: '#FFFFFF',
            }}>
            {item?.ten_dn}
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
          <View style={{marginHorizontal: 7, flex: 1}}>
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
              {item?.ten_cong_viec}
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
              {item?.ten_muc_luong}
            </Text>
          </View>
        </View>

        {/* <View
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
            <FontAwesome5 name={'people-arrows'} size={22} color={'#FFFFFF'} />
          </View>
          <View style={{marginLeft: 7}}>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: CustomFonts.regular,
                fontSize: 14,
                color: '#FFFFFF90',
              }}>
              Vị trí công việc
            </Text>
            <Text
              style={{
                marginBottom: 1,
                fontFamily: CustomFonts.medium,
                fontSize: 15,
                color: '#FFFFFF',
              }}
              numberOfLines={1}>
              {item?.ten_loai_viec}
            </Text>
          </View>
        </View> */}

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
              paddingHorizontal: 7,
              borderRadius: 7,
              backgroundColor: '#FFFFFF30',
            }}>
            <Text
              style={{
                marginBottom: 1,
                fontFamily: CustomFonts.regular,
                fontSize: 14,
                color: '#FFFFFF',
              }}>
              {item?.ten_loai_viec}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => onSaveJob(item)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 7,
              backgroundColor: '#f5a545',
              paddingVertical: 5,
              paddingHorizontal: 5,
            }}>
            <FastImage
              style={{width: 20, height: 20}}
              source={require('../../assets/icons/ic_save.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text
              style={{
                marginLeft: 7,
                fontFamily: CustomFonts.regular,
                fontSize: 14,
                color: '#FFFFFF',
              }}
              numberOfLines={1}>
              {'Lưu'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderAllItem = item => {
    return (
      <TouchableOpacity
        key={String(item?.id_viec)}
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
                borderRadius: 15,
                marginRight: 10,
                width: 70,
                height: 70,
                backgroundColor: '#f1f0f7',
              },
            ]}>
            <FastImage
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{
                uri: `https://tuyendung.haiphong.vn/assets/uploads/${item?.logo}`,
              }}
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
              {item.ten_cong_viec}
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: CustomFonts.regular,
                fontSize: 14,
                color: '#6a676a',
              }}
              numberOfLines={1}>
              {item.ten_dn}
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
                  {item.ten_muc_luong}
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
                  {item.ten_loai_viec}
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
          paddingTop: safeAreaHeight,
          // position: 'absolute',
          backgroundColor: '#8054ef',
          width: '100%',
          height: Platform.OS === 'android' ? 160 : hasNotch ? 170 : 150,
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
              {'Chào, '}
              {name}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cá nhân')}>
            {/* <Ionicons name={'newspaper'} size={24} color={'#000000'} /> */}
            <Avatar
              padding={'1'}
              bg="#FFFFFF"
              source={require('../../assets/images/employee.png')}>
              {name}
            </Avatar>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Công việc')}
          style={styles.searchBar}>
          <Ionicons name={'search'} size={24} color={'#cacdd8'} />
          <Text style={styles.search}>Tìm kiếm công việc ...</Text>
        </TouchableOpacity>
        {loading ? (
          <LoadingView />
        ) : (
          <View>
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
                data={jobsList}
                renderItem={renderPopularItem}
                keyExtractor={item => String(item.id_viec)}
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
              {/* <FlatList
                scrollEnabled={false}
                contentContainerStyle={{
                  paddingTop: 15,
                  paddingBottom: 20,
                  paddingHorizontal: 25,
                }}
                data={jobsList}
                renderItem={renderAllItem}
                keyExtractor={item => String(item.id_viec)}
              /> */}
              <View
                style={{
                  paddingTop: 15,
                  paddingBottom: 20,
                  paddingHorizontal: 25,
                }}>
                {jobsList.map(item => renderAllItem(item))}
              </View>
            </View>
          </View>
        )}
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
    // padding: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF30',
    borderRadius: 10,
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
