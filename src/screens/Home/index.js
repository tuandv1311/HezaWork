import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Text, Input, Icon, Avatar} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      '- Tốt nghiệp Đại học các chuyên ngành Kỹ thuật liên quan đến: Điện - Điện tử, Tự động hóa, Cơ khí, Cơ điện tử, Quản lý chất lượng, Viễn thông, Vật liệu kỹ thuật, ...\n- Chấp nhận ứng viên mới tốt nghiệp.',
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
        style={[styles.jobItem, {maxWidth: (width * 60) / 100}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          <TouchableOpacity>
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
          </TouchableOpacity>
        </View>
        <Text
          style={{marginTop: 10}}
          numberOfLines={1}
          fontFamily="extrabold"
          fontSize="18"
          color={'#6a676a'}>
          {item.enterprise}
        </Text>
        <Text
          style={{marginTop: 10, width: '70%'}}
          numberOfLines={2}
          fontFamily="semibold"
          fontSize="18"
          color={'#6a676a'}>
          {item.job_name}
        </Text>
        <Text
          style={{marginTop: 10}}
          fontFamily="medium"
          fontSize="16"
          color={'#6a676a'}>
          <Text fontFamily="bold" fontSize="18" color={'#fe5073'}>
            {item.salary}
          </Text>
          /month
        </Text>
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
            borderRadius: 0,
            borderLeftWidth: 7,
            borderColor: index % 2 ? '#8054ef' : '#fe5073',
            marginBottom: 10,
          },
        ]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={[styles.logo, {marginRight: 15}]}>
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
              numberOfLines={2}
              fontFamily="extrabold"
              fontSize="18"
              color={'#6a676a'}>
              {item.job_name}
            </Text>
            <Text
              style={{marginTop: 5}}
              numberOfLines={1}
              fontFamily="medium"
              fontSize="18"
              color={'#6a676a'}>
              {item.enterprise}
            </Text>
          </View>
        </View>

        <TouchableOpacity>
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
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: tabbarHeight + 50}}>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text fontFamily="black" fontSize="24">
            {'Welcome back !'}
          </Text>
          <Text fontFamily="bold" fontSize="18" color="#00000090">
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
        <View pointerEvents="none" style={{flex: 1}}>
          <TextInput placeholder={'Tìm kiếm công việc'} style={styles.search} />
          <Ionicons
            name={'search'}
            size={24}
            color={'#a3a1a4'}
            style={{position: 'absolute', right: 20, top: '25%'}}
          />
        </View>
        <View style={styles.menu}>
          <AntDesign name={'menuunfold'} size={18} color={'#FFFFFF'} />
        </View>
      </TouchableOpacity>
      <View style={styles.bestJobs}>
        <Text
          style={{marginHorizontal: 25}}
          fontFamily="bold"
          fontSize="20"
          color="#fe5073">
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
          fontFamily="bold"
          fontSize="20"
          color="#393939">
          {'Top doanh nghiệp uy tín'}
        </Text>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            paddingTop: 15,
            paddingBottom: 20,
            paddingHorizontal: 25,
          }}
          data={recommendedJobs}
          renderItem={renderRecommendedItem}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
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
  bestJobs: {
    // marginTop: 20,
  },
  jobItem: {
    marginRight: 20,
    backgroundColor: '#fbf8ff',
    borderRadius: 15,
    padding: 20,
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
    width: 60,
    height: 60,
    padding: 5,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 25,
    marginRight: 60,
  },
});
