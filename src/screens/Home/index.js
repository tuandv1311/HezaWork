import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Text, Input, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { CustomFonts } from '../../constants/AppConstants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
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
      <View>
        <Text fontFamily="semibold" fontSize="20" color="#fe5073">{'Best Popular Jobs'}</Text>

        <View style={styles.bestJobs}>
          <View style={styles.jobItem}>
            <Text fontFamily="semibold" fontSize="20" color={'#6a676a'}>{'Google'}</Text>

          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 25,
    backgroundColor: '#ffffff'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row'
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
    marginTop: 20
  },
  jobItem: {
    backgroundColor: '#fbf8ff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 25,
  }
});
