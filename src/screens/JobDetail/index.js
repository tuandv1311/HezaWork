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
  Text,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import JobTabView from './components/JobTabView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RenderHtml from 'react-native-render-html';
import {CustomFonts, source} from '../../constants/AppConstants';

const {width} = Dimensions.get('screen');

const JobDetail = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          marginTop: 60,
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
            marginBottom: 1,
            fontFamily: CustomFonts.semibold,
            fontSize: 22,
            color: '#000000',
          }}
          numberOfLines={1}>
          {'Kỹ thuật viên nhà máy'}
        </Text>
      </View>
      <View style={styles.separator} />
      <ScrollView contentContainerStyle={{paddingBottom: 120}}>
        <View style={{paddingHorizontal: 25, marginTop: 15, marginBottom: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginRight: 10, flex: 1}}>
              <Text
                style={{
                  fontFamily: CustomFonts.medium,
                  fontSize: 16,
                  color: '#000000',
                }}
                numberOfLines={1}>
                {'Công ty TNHH Đóng tàu Bình An'}
              </Text>
              <Text
                style={{
                  marginTop: 7,
                  fontFamily: CustomFonts.regular,
                  fontSize: 13,
                  color: '#6a676a',
                }}
                numberOfLines={2}>
                {
                  'Km 92/QL5, hường Hùng Vương, quận Hồng Bàng, thành phố Hải Phòng'
                }
              </Text>
            </View>
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
          </View>
          <View
            style={{
              flexDirection: 'row',
              // flexShrink: 1,
              flexWrap: 1,
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
                Thực tập
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
                Giờ hành chính
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
                Trưởng nhóm / Giám sát
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
                Kỹ thuật cơ khí
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={{marginTop: 15, marginHorizontal: 30, marginBottom: 15}}>
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
                10-15 Triệu
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
              <FontAwesome5 name={'briefcase'} size={22} color={'#FFFFFF'} />
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
                numberOfLines={2}>
                Công ty 4p electronics, khu CN Tràng Duệ, An Dương, Hải phòng
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
              source={source}
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
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 30,
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: 25,
        }}>
        <TouchableOpacity>
          <FastImage
            style={{width: 60, height: 60}}
            source={require('../../assets/icons/ic_save.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        <TouchableOpacity
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
  separator: {
    // marginBottom: 15,
    height: 1,
    marginHorizontal: 30,
    backgroundColor: '#f3f3f3',
  },
});
