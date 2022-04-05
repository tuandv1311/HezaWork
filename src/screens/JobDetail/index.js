/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
  Platform,
  StatusBar,
  Text,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FastImage from 'react-native-fast-image';
// import JobTabView from './components/JobTabView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RenderHtml from 'react-native-render-html';
import {CustomFonts} from '../../constants/AppConstants';
import {getJobDetailApi} from '../../services/api';
import {addJobData} from '../../services/helpers';
import LoadingView from '../../components/LoadingView';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const safeAreaHeight = getStatusBarHeight();
const {width} = Dimensions.get('screen');

const JobDetail = ({navigation, route}) => {
  const {item} = route.params;
  const [jobDetail, setJobDetail] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getJobDetail();
  }, []);

  const onAddJobData = async data => {
    await addJobData(data);
  };

  const getJobDetail = async () => {
    try {
      const data = await getJobDetailApi(item?.id_viec);
      console.log('getJobDetail', data);
      setJobDetail(data?.data[0]);
      setLoading(false);
    } catch (error) {
      console.log('getJobDetail error', error);
      setJobDetail({});
      setLoading(false);
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
            marginHorizontal: 20,
            marginBottom: 1,
            fontFamily: CustomFonts.semibold,
            fontSize: 22,
            color: '#000000',
          }}
          numberOfLines={2}>
          {jobDetail?.ten_cong_viec}
        </Text>
      </View>
      {loading ? (
        <LoadingView />
      ) : (
        <View style={{paddingBottom: 120}}>
          <View style={styles.separator} />
          <ScrollView contentContainerStyle={{paddingBottom: 120}}>
            <View
              style={{paddingHorizontal: 25, marginTop: 15, marginBottom: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{marginRight: 10, flex: 1}}>
                  <Text
                    style={{
                      fontFamily: CustomFonts.medium,
                      fontSize: 16,
                      color: '#000000',
                    }}
                    numberOfLines={1}>
                    {item?.ten_dn}
                  </Text>
                  <Text
                    style={{
                      marginTop: 7,
                      fontFamily: CustomFonts.regular,
                      fontSize: 13,
                      color: '#6a676a',
                    }}
                    numberOfLines={3}>
                    {jobDetail?.noi_lam_viec}
                  </Text>
                </View>
                <View style={styles.logo}>
                  <FastImage
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    source={{
                      uri: `https://tuyendung.haiphong.vn/assets/uploads/${jobDetail?.logo}`,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // flexShrink: 1,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 20,
                    borderColor: '#ebebeb',
                    borderWidth: 2,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      marginBottom: 1,
                      fontFamily: CustomFonts.medium,
                      fontSize: 14,
                      color: '#8054ef',
                    }}
                    numberOfLines={2}>
                    {jobDetail?.ten_loai_viec}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 20,
                    borderColor: '#ebebeb',
                    borderWidth: 2,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      marginBottom: 1,
                      fontFamily: CustomFonts.medium,
                      fontSize: 14,
                      color: '#8054ef',
                    }}
                    numberOfLines={2}>
                    {jobDetail?.loai_tg_lv}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 20,
                    borderColor: '#ebebeb',
                    borderWidth: 2,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      marginBottom: 1,
                      fontFamily: CustomFonts.medium,
                      fontSize: 14,
                      color: '#8054ef',
                    }}
                    numberOfLines={2}>
                    {jobDetail?.ten_chuc_danh}
                  </Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 20,
                    borderColor: '#ebebeb',
                    borderWidth: 2,
                    marginRight: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      marginBottom: 1,
                      fontFamily: CustomFonts.medium,
                      fontSize: 14,
                      color: '#8054ef',
                    }}
                    numberOfLines={2}>
                    {jobDetail?.ten_nganh_nghe}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.separator} />
            <View
              style={{marginTop: 15, marginHorizontal: 30, marginBottom: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 45 / 2,
                    backgroundColor: '#8054ef90',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                  }}>
                  <FontAwesome5 name={'coins'} size={22} color={'#FFFFFF'} />
                </View>
                <View style={{marginLeft: 14}}>
                  <Text
                    style={{
                      fontFamily: CustomFonts.regular,
                      fontSize: 16,
                      color: '#b9b9b9',
                    }}
                    numberOfLines={1}>
                    Mức lương
                  </Text>
                  <Text
                    style={{
                      marginBottom: 1,
                      fontFamily: CustomFonts.medium,
                      fontSize: 15,
                      color: '#3d3d3d',
                    }}
                    numberOfLines={1}>
                    {jobDetail?.ten_muc_luong}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 45 / 2,
                    backgroundColor: '#8054ef90',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                  }}>
                  <FontAwesome5
                    name={'briefcase'}
                    size={22}
                    color={'#FFFFFF'}
                  />
                </View>
                <View style={{marginLeft: 14, flex: 1}}>
                  <Text
                    style={{
                      fontFamily: CustomFonts.regular,
                      fontSize: 16,
                      color: '#b9b9b9',
                    }}
                    numberOfLines={1}>
                    Nơi làm việc
                  </Text>
                  <Text
                    style={{
                      marginBottom: 1,
                      fontFamily: CustomFonts.medium,
                      fontSize: 15,
                      color: '#3d3d3d',
                    }}
                    numberOfLines={3}>
                    {jobDetail?.noi_lam_viec}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.separator} />
            <View
              style={{
                paddingHorizontal: 25,
                marginTop: 5,
              }}>
              {/* <Text
            style={{marginBottom: 1}}
            numberOfLines={2}
            fontFamily="bold"
            fontSize="18"
            color={'#000000'}>
            Mô tả công việc
          </Text> */}
              <View>
                <RenderHtml
                  contentWidth={width - 50}
                  source={{
                    html: jobDetail?.mota_vl,
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
              </View>
            </View>
          </ScrollView>
        </View>
      )}

      <View
        style={{
          position: 'absolute',
          bottom: 30,
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: 25,
        }}>
        <TouchableOpacity onPress={() => onAddJobData(jobDetail)}>
          <FastImage
            style={{width: 60, height: 60}}
            source={require('../../assets/icons/ic_save.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://work.thiendd.com/').catch(err =>
              console.error("Couldn't load page", err),
            );
          }}
          style={{
            flex: 1,
            marginLeft: 15,
            // width: '70%',
            backgroundColor: '#8054ef',
            borderRadius: 30,
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
            ỨNG TUYỂN NGAY
          </Text>
        </TouchableOpacity>
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
    // paddingBottom: 100,
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
    backgroundColor: '#f1f0f7',
    borderColor: '#f1f0f7',
    borderWidth: 2,
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
  separator: {
    // marginBottom: 15,
    height: 1,
    marginHorizontal: 30,
    backgroundColor: '#f3f3f3',
  },
});
