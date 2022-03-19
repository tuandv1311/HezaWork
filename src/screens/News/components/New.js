import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import {Text} from 'native-base';
import FastImage from 'react-native-fast-image';

const New = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FastImage
            style={{
              width: 40,
              height: 40,
              marginBottom: 5,
            }}
            source={require('../../../assets/icons/ic_back.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        <Text mx={30} mb={2} fontFamily="black" fontSize="24">
          {'Tin tức'}
        </Text>
      </View>
      <WebView source={{uri: 'https://work.thiendd.com/'}} />
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ffffff',
  },
});
