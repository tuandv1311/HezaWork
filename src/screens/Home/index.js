import { FlatList, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Text, Input, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { CustomFonts } from '../../constants/AppConstants';
import FastImage from 'react-native-fast-image';

const popularJobs = [
  {
    id: 0,
    logo: require('../../assets/images/logo_google.png'),
    enterprise: 'Google',
    job_name: 'Lead Creative Director',
    salary: '$50k'
  },
  {
    id: 1,
    logo: require('../../assets/images/logo_dribbble.png'),
    enterprise: 'Dribble',
    job_name: 'UI/UX Product Designer',
    salary: '$30k'
  },
  {
    id: 2,
    logo: require('../../assets/images/logo_apple.png'),
    enterprise: 'Apple',
    job_name: 'Lead Creative Director',
    salary: '$55k'
  },
  {
    id: 3,
    logo: require('../../assets/images/logo_steam.png'),
    enterprise: 'Steam',
    job_name: 'UI/UX Product Designer',
    salary: '$40k'
  },
]

const recommendedJobs = [
  {
    id: 2,
    logo: require('../../assets/images/logo_apple.png'),
    enterprise: 'Apple Inc',
    job_name: 'Design Graphic',
    salary: '$55k'
  },
  {
    id: 3,
    logo: require('../../assets/images/logo_steam.png'),
    enterprise: 'Steam',
    job_name: 'UI/UX Product Designer',
    salary: '$40k'
  },
  {
    id: 0,
    logo: require('../../assets/images/logo_google.png'),
    enterprise: 'Google',
    job_name: 'Lead Creative Director',
    salary: '$50k'
  },
  {
    id: 1,
    logo: require('../../assets/images/logo_dribbble.png'),
    enterprise: 'Dribble',
    job_name: 'UI/UX Product Designer',
    salary: '$30k'
  },
]

const HomeScreen = () => {

  const renderPopularItem = ({ item }) => {
    return (
      <View style={styles.jobItem}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.logo}>
            <FastImage
              style={{
                width: "100%", height: "100%"
              }}
              source={item.logo}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Fontisto name={'favorite'} size={30} color={'#7936ff'} />
        </View>
        <Text style={{ marginTop: 5 }} fontFamily="semibold" fontSize="18" color={'#6a676a'}>{item.enterprise}</Text>
        <Text style={{ marginTop: 10, width: '70%' }} fontFamily="regular" fontSize="18" color={'#6a676a'}>{item.job_name}</Text>
        <Text style={{ marginTop: 10 }} fontFamily="regular" fontSize="16" color={'#6a676a'}>
          <Text fontFamily="semibold" fontSize="18" color={'#fe5073'}>{item.salary}</Text>/month
        </Text>

      </View>
    )
  }

  const renderRecommendedItem = ({ item, index }) => {
    return (
      <View style={[styles.jobItem, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: undefined, borderRadius: 0, borderLeftWidth: 7, borderColor: index % 2 ? '#7936ff' : "#fe5073", marginBottom: 10 }]}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={[styles.logo, { marginRight: 15 }]}>
            <FastImage
              style={{
                width: "100%", height: "100%"
              }}
              source={item.logo}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ width: '100%' }} fontFamily="semibold" fontSize="18" color={'#6a676a'}>{item.job_name}</Text>
            <Text style={{ marginTop: 5 }} fontFamily="regular" fontSize="18" color={'#6a676a'}>{item.enterprise}</Text>
          </View>
        </View>

        <Fontisto name={'favorite'} size={30} color={'#7936ff'} />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text fontFamily="semibold" fontSize="24">{'Welcome back !'}</Text>
          <Text fontFamily="medium" fontSize="18" color="#00000090">{'Hi, Tuan Dinh'}</Text>
        </View>
        <View>
          <Ionicons name={'newspaper'} size={24} color={'#000000'} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={{ flex: 1 }}>
          <TextInput placeholder={'Search Job'} style={styles.search} />
          <Ionicons name={'search'} size={24} color={'#a3a1a4'} style={{ position: 'absolute', right: 20, top: '25%' }} />
        </View>
        <View style={styles.menu}>
          <AntDesign name={'menuunfold'} size={18} color={'#FFFFFF'} />
        </View>
      </View>
      <View style={styles.bestJobs}>
        <Text style={{ marginHorizontal: 25 }} fontFamily="medium" fontSize="20" color="#fe5073">{'Popular Jobs'}</Text>
        <FlatList
          horizontal
          contentContainerStyle={{ paddingTop: 15, paddingBottom: 20, paddingHorizontal: 25 }}
          data={popularJobs}
          renderItem={renderPopularItem}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
      <View>
        <Text style={{ marginHorizontal: 25 }} fontFamily="medium" fontSize="20" color="#393939">{'Recommended'}</Text>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{ paddingTop: 15, paddingBottom: 20, paddingHorizontal: 25 }}
          data={recommendedJobs}
          renderItem={renderRecommendedItem}
          keyExtractor={(item) => String(item.id)}
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
    backgroundColor: '#ffffff'
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
    fontFamily: CustomFonts.regular,
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#faf7fe'
  },
  menu: {
    borderRadius: 10,
    height: 48,
    width: 48,
    marginLeft: 10,
    backgroundColor: '#7936ff',
    justifyContent: 'center',
    alignItems: 'center'
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
    shadowRadius: 8.30,

    elevation: 13,
  },
  logo: {
    width: 60, height: 60,
    padding: 5,
    overflow: "hidden",
    backgroundColor: "#FFFFFF", borderRadius: 30, shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 25,
    marginRight: 60
  }

});
