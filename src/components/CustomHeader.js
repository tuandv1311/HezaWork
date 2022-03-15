import React from 'react';
import { StyleSheet } from 'react-native';
import { CustomFonts } from '../constants/AppConstants';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Box, HStack, Icon, IconButton, StatusBar, Text, Avatar } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image'

const safeAreaHeight = getStatusBarHeight();

const CustomHeader = ({ title, logo, avatar, search, icon, backIcon }) => {
  return (
    <>
      <StatusBar bg="#FFFFFF" barStyle="light-content" />
      <Box safeAreaTop bg="#FFFFFF" />
      <HStack
        bg="#FFFFFF"
        px="4"
        // py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="100%">
        <HStack alignItems="center" my={3}>
          <Text fontFamily="semibold" fontSize="24">
            {title}
          </Text>
          {logo && <FastImage
            style={{ width: 170, height: 80, position: 'absolute' }}
            source={require('../assets/images/heza_logo.png')}
            resizeMode={FastImage.resizeMode.contain}
          />}
          <Text fontFamily="semibold" fontSize="24">{' '}</Text>

        </HStack>
        <HStack alignItems="center">
          {search && <Box alignSelf="center" bg="#6b47ba" p="2.5" mr="2" style={{ borderRadius: 10 }}>
            <Icon
              as={Ionicons}
              name={'search'}
              size="25"
              color="#FFFFFF"
            />
          </Box>}
          {avatar && <Avatar bg="green.500" source={{
            uri: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/145775551_3261099993996131_3501307941742539165_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=IFOij_1MMmgAX-u8VF0&_nc_ht=scontent.fhan2-4.fna&oh=00_AT_0bNLHIOIFRGxzPEg10vPOqn5rVAZfx3YBniCWOzBJtg&oe=6255D11F"
          }}>
            VT
          </Avatar>}
        </HStack>
      </HStack>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  safeArea: {
    height: safeAreaHeight,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 15,
  },
  headerText: {
    color: '#000000',
    fontSize: 24,
    // fontWeight: '700',
    fontFamily: CustomFonts.semibold,
  },
});

export default CustomHeader;
