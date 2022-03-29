/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import dummyNews from './data';
import {FlatList, Text} from 'native-base';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width} = Dimensions.get('screen');

const News = ({navigation}) => {
  const renderLatestNews = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('New', {item: item})}
        style={styles.latestNew}>
        <FastImage
          style={{
            width: '100%',
            height: 130,
            borderRadius: 10,
          }}
          source={{uri: item.image}}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text
          numberOfLines={2}
          fontFamily="bold"
          fontSize="14"
          style={{marginTop: 10}}>
          {item.title}
        </Text>
        <View
          style={{
            marginTop: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 2,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5 name={'calendar-alt'} size={14} color={'#8054ef'} />
            <Text
              fontFamily="light"
              fontSize="13"
              color="#6a676a"
              ml={1.5}
              mt={0.2}>
              8-03-2022
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome5 name={'eye'} size={14} color={'#8054ef'} />
            <Text
              fontFamily="light"
              fontSize="13"
              color="#6a676a"
              ml={1.5}
              mt={0.2}>
              130
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderAllNews = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('New', {item: item})}
        style={{
          flexDirection: 'row',
          backgroundColor: '#fbf8ff',
          padding: 15,
          borderRadius: 15,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 8,
        }}>
        <FastImage
          style={{
            width: 100,
            height: 100,
            borderRadius: 5,
            marginRight: 10,
          }}
          source={{uri: item.image}}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={{flex: 1}}>
          <Text numberOfLines={3} fontFamily="bold" fontSize="14" style={{}}>
            {item.title}
          </Text>
          <View
            style={{
              marginTop: 2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome5 name={'calendar-alt'} size={14} color={'#8054ef'} />
              <Text
                fontFamily="light"
                fontSize="13"
                color="#6a676a"
                ml={1.5}
                mt={0.2}>
                8-03-2022
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome5 name={'eye'} size={14} color={'#8054ef'} />
              <Text
                fontFamily="light"
                fontSize="13"
                color="#6a676a"
                ml={1.5}
                mt={0.2}>
                130
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text mx={30} fontFamily="bold" fontSize="24">
        {'Tin tức'}
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 15,
            paddingBottom: 20,
            paddingLeft: 25,
            // paddingRight: 15,
          }}
          data={dummyNews}
          renderItem={renderLatestNews}
          keyExtractor={item => String(item.id)}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{
            paddingTop: 15,
            paddingBottom: 40,
            paddingHorizontal: 25,
          }}
          data={dummyNews}
          renderItem={renderAllNews}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
  },
  latestNew: {
    width: width / 1.5,
    backgroundColor: '#fbf8ff',
    padding: 15,
    marginRight: 20,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
});
