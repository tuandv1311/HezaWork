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
} from 'react-native';
import React from 'react';
import {Text, Input, Icon, Avatar} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {CustomFonts} from '../../constants/AppConstants';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('screen');

const popularJobs = [
  {
    id: 0,
    logo: require('../../assets/images/logo_google.png'),
    enterprise: 'PEGATRON',
    job_name: 'Kỹ Sư Cho KCN Hải Phòng',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.\n- Khảo sát, lập qui trình công nghệ, dự toán sửa chữa, hồ sơ kỹ thuật, hồ sơ hoàn công.\n- Thực hiện các công việc khác theo yêu cầu của Trưởng bộ phận.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$50k',
  },
  {
    id: 1,
    logo: require('../../assets/images/logo_dribbble.png'),
    enterprise: 'Dribble',
    job_name: 'UI/UX Product Designer',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$30k',
  },
  {
    id: 2,
    logo: require('../../assets/images/logo_apple.png'),
    enterprise: 'Apple',
    job_name: 'Lead Creative Director',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$55k',
  },
  {
    id: 3,
    logo: require('../../assets/images/logo_steam.png'),
    enterprise: 'Steam',
    job_name: 'UI/UX Product Designer',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$40k',
  },
];

const recommendedJobs = [
  {
    id: 2,
    logo: require('../../assets/images/logo_apple.png'),
    enterprise: 'Pegatron Vietnam',
    job_name: 'Thiết Kế Đồ Họa',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$55k',
  },
  {
    id: 3,
    logo: require('../../assets/images/logo_steam.png'),
    enterprise: 'Bosch',
    job_name: 'Thực Tập Sinh Quản Lý Cơ Sở Vật Chất',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$40k',
  },
  {
    id: 0,
    logo: require('../../assets/images/logo_google.png'),
    enterprise: 'LG Vietnam',
    job_name: 'Nhân Viên Kỹ Thuật',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$50k',
  },
  {
    id: 1,
    logo: require('../../assets/images/logo_dribbble.png'),
    enterprise: 'IDG Vietnam',
    job_name: 'Thực Tập Sinh',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$30k',
  },
  {
    id: 4,
    logo: require('../../assets/images/logo_apple.png'),
    enterprise: 'Pegatron Vietnam',
    job_name: 'Thiết Kế Đồ Họa',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$55k',
  },
  {
    id: 5,
    logo: require('../../assets/images/logo_steam.png'),
    enterprise: 'Bosch',
    job_name: 'Thực Tập Sinh Quản Lý Cơ Sở Vật Chất',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$40k',
  },
  {
    id: 6,
    logo: require('../../assets/images/logo_google.png'),
    enterprise: 'LG Vietnam',
    job_name: 'Nhân Viên Kỹ Thuật',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$50k',
  },
  {
    id: 7,
    logo: require('../../assets/images/logo_dribbble.png'),
    enterprise: 'IDG Vietnam',
    job_name: 'Thực Tập Sinh',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$30k',
  },
  {
    id: 8,
    logo: require('../../assets/images/logo_apple.png'),
    enterprise: 'Pegatron Vietnam',
    job_name: 'Thiết Kế Đồ Họa',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$55k',
  },
  {
    id: 9,
    logo: require('../../assets/images/logo_steam.png'),
    enterprise: 'Bosch',
    job_name: 'Thực Tập Sinh Quản Lý Cơ Sở Vật Chất',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$40k',
  },
  {
    id: 10,
    logo: require('../../assets/images/logo_google.png'),
    enterprise: 'LG Vietnam',
    job_name: 'Nhân Viên Kỹ Thuật',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$50k',
  },
  {
    id: 11,
    logo: require('../../assets/images/logo_dribbble.png'),
    enterprise: 'IDG Vietnam',
    job_name: 'Thực Tập Sinh',
    description:
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
    company:
      'Công ty Pegatron Việt Nam, thuộc tập đoàn Pegatron, là đối tác chiến lược của các tập đoàn Công nghệ hàng đầu thế giới. Tại đây, chúng tôi sản xuất các linh kiện, sản phẩm điện tử với môi trường làm việc sạch sẽ.',
    salary: '$30k',
  },
];

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
                  ? require('../../assets/icons/ic_notsave.png')
                  : require('../../assets/icons/ic_save.png')
              }
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity> */}
          <Text
            fontFamily="medium"
            fontSize="16"
            color={'#FFFFFF'}
            numberOfLines={2}
            style={{flex: 1, marginLeft: 7}}>
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
              fontFamily="regular"
              fontSize="14"
              color={'#FFFFFF90'}>
              Công việc
            </Text>
            <Text
              numberOfLines={1}
              fontFamily="medium"
              fontSize="15"
              color={'#FFFFFF'}>
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
          {/* <Text
            style={{marginBottom: 1}}
            fontFamily="medium"
            fontSize="16"
            color={'#FFFFFF'}>
            Mức lương:{' '}
          </Text> */}
          {/* <View
            style={{
              paddingHorizontal: 5,
              borderRadius: 10,
              backgroundColor: '#FFFFFF',
              marginLeft: 5,
            }}>
            <Text
              style={{marginBottom: 2}}
              fontFamily="medium"
              fontSize="16"
              color={'#8054ef'}>
              10-15 Triệu
            </Text>
          </View> */}
          <View style={{marginLeft: 7}}>
            <Text
              numberOfLines={1}
              fontFamily="regular"
              fontSize="14"
              color={'#FFFFFF90'}>
              Mức lương
            </Text>
            <Text
              style={{marginBottom: 1}}
              numberOfLines={1}
              fontFamily="medium"
              fontSize="15"
              color={'#FFFFFF'}>
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
              style={{marginBottom: 1}}
              fontFamily="medium"
              fontSize="14"
              color={'#FFFFFF'}>
              Làm chính thức
            </Text>
          </View>
          <TouchableOpacity style={{marginRight: 5}}>
            <FontAwesome name={'star'} size={28} color={'#FFFFFF'} />
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
            borderColor: index % 2 ? '#8054ef' : '#fe5073',
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
              style={{width: '100%'}}
              numberOfLines={1}
              fontFamily="medium"
              fontSize="16"
              color={'#000000'}>
              {item.job_name}
            </Text>
            <Text
              style={{marginTop: 5}}
              numberOfLines={1}
              fontFamily="regular"
              fontSize="14"
              color={'#6a676a'}>
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
                  style={{marginBottom: 1}}
                  numberOfLines={1}
                  fontFamily="regular"
                  fontSize="14"
                  color={'#FFFFFF'}>
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
                  style={{marginBottom: 1}}
                  numberOfLines={1}
                  fontFamily="regular"
                  fontSize="14"
                  color={'#FFFFFF'}>
                  {'Làm chính thức'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* <TouchableOpacity>
          <FastImage
            style={{
              width: 40,
              height: 40,
              tintColor: 'red',
            }}
            source={
              index % 2
                ? require('../../assets/icons/ic_notsave.png')
                : require('../../assets/icons/ic_save.png')
            }
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity> */}
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
            <Text fontFamily="bold" fontSize="24" color={'#FFFFFF'}>
              {'Welcome back !'}
            </Text>
            <Text fontFamily="medium" fontSize="18" color="#FFFFFF">
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
            style={{marginHorizontal: 25}}
            fontFamily="semibold"
            fontSize="20"
            color="#000000">
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
        <View>
          <Text
            style={{marginHorizontal: 25}}
            fontFamily="semibold"
            fontSize="20"
            color="#393939">
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
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
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
    // marginTop: 20,
  },
  jobItem: {
    marginRight: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
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
