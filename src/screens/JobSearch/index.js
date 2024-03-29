/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CustomFonts} from '../../constants/AppConstants';
import {FlatList} from 'native-base';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {getJobsListApi, jobsSearchApi} from '../../services/api';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import LoadingView from '../../components/LoadingView';

const safeAreaHeight = getStatusBarHeight();

const JobSearch = ({navigation}) => {
  const tabbarHeight = useBottomTabBarHeight();
  const [jobsList, setJobsList] = useState([]);
  const [searchParam, setSearchParam] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJobsList();
  }, []);

  // useEffect(() => {
  //   const onFocus = navigation.addListener('focus', () => {
  //     getJobsList();
  //   });
  //   return onFocus;
  // }, [navigation]);

  const getJobsList = async () => {
    try {
      const data = await getJobsListApi();
      console.log('getJobsList', data);
      setJobsList(data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('getJobsList error', error);
      setJobsList([]);
    }
  };

  const onSearchJobs = async searchParam => {
    try {
      const data = await jobsSearchApi(searchParam);
      console.log('onSearchJobs', data);
      setJobsList(data?.data);
    } catch (error) {
      console.log('onSearchJobs error', error);
      setJobsList([]);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('JobDetail', {item: item})}
        style={styles.jobItem}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.logo}>
            <FastImage
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{
                uri: `https://tuyendung.haiphong.vn/assets/uploads/${item?.logo}`,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontFamily: CustomFonts.medium,
                fontSize: 20,
                color: '#000000',
              }}
              numberOfLines={1}>
              {item?.ten_cong_viec}
            </Text>

            <Text
              style={{
                marginTop: 5,
                width: '100%',
                fontFamily: CustomFonts.medium,
                fontSize: 15,
                color: '#6a676a',
              }}
              numberOfLines={2}>
              {item?.ten_dn}
            </Text>
            <View style={{marginTop: 10, marginBottom: 5}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5 name={'coins'} size={22} color={'#8054ef'} />
                <View style={{marginLeft: 14}}>
                  <Text
                    style={{
                      marginBottom: 1,
                      fontFamily: CustomFonts.regular,
                      fontSize: 15,
                      color: '#3d3d3d',
                    }}
                    numberOfLines={1}>
                    {item?.ten_muc_luong}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <FontAwesome5 name={'building'} size={22} color={'#8054ef'} />
                <View style={{marginLeft: 14, flex: 1}}>
                  <Text
                    style={{
                      fontFamily: CustomFonts.regular,
                      fontSize: 15,
                      color: '#3d3d3d',
                    }}>
                    {item?.dia_chi}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const renderEmptyJobs = () => {
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
          style={{
            fontFamily: CustomFonts.medium,
            fontSize: 16,
            marginTop: -30,
            textAlign: 'center',
          }}>
          {'Không tìm thấy công việc với từ khóa này'}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        // backgroundColor="red"
        translucent={true}
      />

      <View
        style={{
          marginTop: 20,
          marginHorizontal: 30,
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
          borderWidth: 3,
          borderColor: '#8054ef',
          backgroundColor: '#fbf8ff',
          borderRadius: 30,
          overflow: 'hidden',
          paddingLeft: 15,
          paddingRight: 10,
        }}>
        <Ionicons name={'search'} size={24} color={'#cacdd8'} />
        <TextInput
          placeholder={'Tìm kiếm công việc'}
          placeholderTextColor={'#cacdd8'}
          style={styles.searchBar}
          value={searchParam}
          onChangeText={text => {
            console.log(text);
            setSearchParam(text);
            onSearchJobs(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            setSearchParam();
            getJobsList();
          }}>
          <Ionicons name={'close-circle'} size={24} color={'#cacdd8'} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        {loading ? (
          <LoadingView />
        ) : (
          <FlatList
            contentContainerStyle={{
              paddingBottom: 20 + tabbarHeight,
              paddingHorizontal: 25,
            }}
            data={jobsList}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
            keyExtractor={item => String(item.id_viec)}
            ListEmptyComponent={renderEmptyJobs}
          />
        )}
      </View>
    </View>
  );
};

export default JobSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: safeAreaHeight,
    // paddingBottom: 30,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    flex: 1,
    fontFamily: CustomFonts.regular,
    fontSize: 16,
    marginLeft: 10,
    paddingVertical: 15,
    backgroundColor: '#fbf8ff',
  },
  search: {
    fontFamily: CustomFonts.medium,
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#faf7fe',
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
  jobItem: {
    // backgroundColor: '#fbf8ff',
    paddingVertical: 15,

    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 70,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#f1f0f7',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 25,
    marginRight: 15,
  },
  separator: {
    marginBottom: 10,
    height: 1,
    // marginHorizontal: 30,
    backgroundColor: '#f3f3f3',
  },
});
