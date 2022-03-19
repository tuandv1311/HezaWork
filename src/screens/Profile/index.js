import {StyleSheet, View, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {Avatar, Text} from 'native-base';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          paddingHorizontal: 30,
        }}>
        <Avatar
          size={'xl'}
          bg="green.500"
          source={{
            uri: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/145775551_3261099993996131_3501307941742539165_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IFOij_1MMmgAX-u8VF0&_nc_ht=scontent.fhan2-4.fna&oh=00_AT_0bNLHIOIFRGxzPEg10vPOqn5rVAZfx3YBniCWOzBJtg&oe=6255D11F',
          }}>
          VT
        </Avatar>
        <View style={{marginLeft: 20}}>
          <Text fontFamily="black" fontSize="20" color="#000000">
            {'Tuan Dinh'}
          </Text>
          <Text mt={1} fontFamily="semibold" fontSize="20" color="#6a676a">
            {'Ứng viên tìm việc'}
          </Text>
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <View
          style={{
            paddingHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MaterialIcons name={'phone'} size={20} color={'#000000'} />
          <Text ml={2} fontFamily="semibold" fontSize="18" color="#6a676a90">
            {'0987654321'}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MaterialIcons name={'email'} size={20} color={'#000000'} />
          <Text
            ml={2}
            mb={1}
            fontFamily="semibold"
            fontSize="18"
            color="#6a676a90">
            {'viettuandinh@gmail.com'}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginVertical: 20,
          height: 1,
          backgroundColor: '#00000020',
          width: '100%',
        }}
      />

      <TouchableOpacity style={styles.item}>
        <AntDesign name={'star'} size={20} color={'#8054ef'} />
        <Text ml={4} fontFamily="bold" fontSize="18" color="#6a676a">
          {'Nghề nghiệp quan tâm'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <MaterialIcons name={'auto-fix-high'} size={20} color={'#8054ef'} />
        <Text ml={4} fontFamily="bold" fontSize="18" color="#6a676a">
          {'Sửa đổi thông tin'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <MaterialIcons name={'phonelink'} size={20} color={'#8054ef'} />
        <Text ml={4} fontFamily="bold" fontSize="18" color="#6a676a">
          {'Liên kết hữu ích'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <MaterialIcons name={'perm-device-info'} size={20} color={'#8054ef'} />
        <Text ml={4} fontFamily="bold" fontSize="18" color="#6a676a">
          {'Giới thiệu'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://work.thiendd.com/').catch(err =>
            console.error("Couldn't load page", err),
          );
        }}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          paddingTop: 10,
          paddingBottom: 12,
          paddingHorizontal: 40,
          borderRadius: 20,
          backgroundColor: '#8054ef',
          bottom: 90,
        }}>
        <Text fontFamily="semibold" fontSize="20" color="#FFFFFF">
          {'Đăng xuất'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#ffffff',
  },
  item: {
    borderRadius: 10,
    marginHorizontal: 30,
    marginBottom: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fbf8ff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
