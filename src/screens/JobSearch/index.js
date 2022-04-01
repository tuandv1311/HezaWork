/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomFonts} from '../../constants/AppConstants';
import {FlatList, Text} from 'native-base';

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

const JobSearch = ({navigation}) => {
  const renderItem = ({item, index}) => {
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
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        // backgroundColor="red"
        translucent={true}
      />

      <View
        style={{
          marginHorizontal: 30,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <FastImage
            style={{
              width: 40,
              height: 40,
            }}
            source={require('../../assets/icons/ic_back.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity> */}

        <View style={{flex: 1}}>
          <TextInput
            placeholder={'Tìm kiếm công việc'}
            placeholderTextColor={'#cacdd8'}
            style={styles.searchBar}
          />
        </View>
        <Ionicons
          name={'search'}
          size={24}
          color={'#cacdd8'}
          style={{position: 'absolute', left: 10, top: 30}}
        />
      </View>
      <View style={{flex: 1, marginTop: 10}}>
        <FlatList
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 25,
          }}
          data={recommendedJobs}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  );
};

export default JobSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    fontFamily: CustomFonts.regular,
    fontSize: 16,
    paddingVertical: 15,
    paddingLeft: 40,
    backgroundColor: '#fbf8ff',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    // marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
