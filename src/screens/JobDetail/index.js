/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {StatusBar, Text} from 'native-base';
import JobTabView from './components/JobTabView';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('screen');

const JobDetail = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: 30,
        // paddingBottom: 100,
        backgroundColor: '#FFFFFF',
      }}>
      {/* <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      /> */}
      <View style={styles.container}>
        <View
          style={{
            marginHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FastImage
              style={{
                width: 40,
                height: 40,
              }}
              source={require('../../assets/icons/ic_back.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FastImage
              style={{
                width: 40,
                height: 40,
                tintColor: 'red',
                marginBottom: 5,
              }}
              source={require('../../assets/icons/ic_save.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainContent}>
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
          <Text
            mx={30}
            numberOfLines={1}
            fontFamily="bold"
            fontSize="24"
            style={{textAlign: 'center'}}>
            {item.job_name}
          </Text>
          <Text
            mx={30}
            numberOfLines={1}
            fontFamily="medium"
            fontSize="20"
            color="#6a676a">
            Đăng bởi: {item.enterprise}
          </Text>
          <View
            style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome5 name={'calendar-alt'} size={20} color={'#8054ef'} />
            <Text
              fontFamily="regular"
              fontSize="18"
              color="#6a676a"
              ml={2.5}
              mb={0.5}>
              8-03-2022
            </Text>
          </View>
          <View style={{}}>
            <JobTabView item={item} />
          </View>
        </View>
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
            borderRadius: 15,
            backgroundColor: '#8054ef',
            bottom: 70,
          }}>
          <Text fontFamily="semibold" fontSize="20" color="#FFFFFF">
            {'Ứng Tuyển Ngay'}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Text fontFamily="regular" fontSize="20" color="#6a676a">
        {item?.description}
      </Text> */}
    </ScrollView>
  );
};

export default JobDetail;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 30,
    paddingBottom: 100,
    backgroundColor: '#FFFFFF',
  },
  mainContent: {
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    margin: 30,
    width: 100,
    height: 100,
    padding: 5,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 25,
  },
});
