/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
  FlatList,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {CustomFonts} from '../../constants/AppConstants';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  clearAll,
  fakeLogout,
  getJobsData,
  getLoginData,
  removeJobData,
} from '../../services/helpers';
import {AuthContext} from '../../AppRoot';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const safeAreaHeight = getStatusBarHeight();

const Profile = ({navigation}) => {
  const tabbarHeight = useBottomTabBarHeight();
  const [name, setName] = useState();
  const [savedJobs, setSavedJobs] = useState([]);

  const {signOut} = useContext(AuthContext);

  useEffect(() => {
    onGetLoginData();
  }, []);

  useEffect(() => {
    const onFocus = navigation.addListener('focus', () => {
      getJobsDataLocal();
    });
    return onFocus;
  }, [navigation]);

  const onGetLoginData = async () => {
    const result = await getLoginData();
    console.log('onGetLoginData', result);
    setName(result.ho_ten);
  };

  const getJobsDataLocal = async () => {
    const oldData = await getJobsData();
    setSavedJobs(oldData);
    console.log('getJobsDataLocal', oldData);
  };

  const removeJobFromLocal = async data => {
    Alert.alert(
      'Xóa công việc?',
      'Bạn có chắc chắn muốn xóa việc này khỏi danh sách không?',
      [
        {
          text: 'Xóa',
          onPress: async () => {
            await removeJobData(data);
            getJobsDataLocal();
          },
          style: 'destructive',
        },
        {text: 'Hủy', onPress: () => console.log('Cancel')},
      ],
    );
  };

  const onLogout = () => {
    Alert.alert('Đăng xuất', 'Bạn có chắc muốn đăng xuất?', [
      {
        text: 'Có',
        onPress: async () => {
          await clearAll();
          signOut();
        },
        style: 'destructive',
      },
      {text: 'Hủy', onPress: () => console.log('Cancel')},
    ]);
  };

  const renderSavedJobs = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('JobDetail', {item: item})}
        style={styles.jobItem}>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
          <View
            style={[
              styles.logo,
              {
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
                marginBottom: 5,
                fontFamily: CustomFonts.medium,
                fontSize: 16,
                color: '#8054ef',
              }}
              numberOfLines={1}>
              {item?.ten_loai_viec}
            </Text>
            <Text
              style={{
                width: '100%',
                fontFamily: CustomFonts.medium,
                fontSize: 16,
                color: '#000000',
              }}
              numberOfLines={1}>
              {item?.ten_cong_viec}
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontFamily: CustomFonts.regular,
                fontSize: 14,
                color: '#6a676a',
              }}
              numberOfLines={1}>
              {item?.ten_dn}
            </Text>
          </View>
        </View>
        <View style={styles.separator2} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 7,
            marginLeft: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5 name={'coins'} size={18} color={'#8054ef'} />
            <Text
              style={{
                marginLeft: 7,
                fontFamily: CustomFonts.medium,
                fontSize: 15,
                color: '#000000',
              }}
              numberOfLines={1}>
              {item?.ten_muc_luong}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => removeJobFromLocal(item)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 7,
              backgroundColor: '#f5a545',
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}>
            <FontAwesome name={'star'} size={15} color={'#FFFFFF'} />
            <Text
              style={{
                marginLeft: 7,
                fontFamily: CustomFonts.medium,
                fontSize: 14,
                color: '#FFFFFF',
              }}
              numberOfLines={1}>
              {'Xóa'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const renderEmptySavedJobs = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <FastImage
          style={{
            width: '100%',
            height: 200,
          }}
          source={require('../../assets/icons/ic_empty.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text
          style={{fontFamily: CustomFonts.medium, fontSize: 16, marginTop: -30}}
          numberOfLines={1}>
          {'Bạn chưa lưu công việc nào cả'}
        </Text>
      </View>
    );
  };

  // const onLogout = async () => await fakeLogout();

  return (
    <View style={[styles.container, {paddingBottom: tabbarHeight}]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1}>
          {'Hồ sơ'}
        </Text>
        <TouchableOpacity onPress={onLogout} style={styles.logout}>
          <AntDesign
            name={'logout'}
            size={20}
            color={'#000000'}
            style={{marginLeft: 2}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 30,
          // marginTop: 5,
          marginBottom: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.role} numberOfLines={1}>
            {'Người tìm việc'}
          </Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
            backgroundColor: '#00000010',
            padding: 5,
          }}>
          <FastImage
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require('../../assets/images/employee.png')}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </View>
      <View style={styles.separator} />
      <View style={{marginTop: 15}}>
        <Text
          style={[
            styles.name,
            {marginHorizontal: 30, marginBottom: 15, color: '#6a676a'},
          ]}
          numberOfLines={1}>
          {'Danh sách công việc đã chú ý'}
        </Text>
        <FlatList
          // scrollEnabled={false}
          contentContainerStyle={{
            paddingTop: 5,
            paddingBottom: tabbarHeight + 200,
            paddingHorizontal: 25,
          }}
          data={savedJobs}
          renderItem={renderSavedJobs}
          ListEmptyComponent={renderEmptySavedJobs}
          keyExtractor={item => String(item?.id_viec)}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    marginTop: safeAreaHeight + 20,
    paddingHorizontal: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 1,
    fontFamily: CustomFonts.semibold,
    fontSize: 22,
    color: '#000000',
  },
  logout: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: CustomFonts.medium,
    fontSize: 20,
    color: '#000000',
  },
  role: {
    fontFamily: CustomFonts.regular,
    fontSize: 18,
    color: '#6a676a90',
    marginTop: 5,
  },
  separator: {
    height: 1,
    marginHorizontal: 30,
    backgroundColor: '#00000020',
  },
  separator2: {
    height: 1,
    backgroundColor: '#00000010',
  },
  jobItem: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    borderRadius: 15,
    marginBottom: 15,
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
