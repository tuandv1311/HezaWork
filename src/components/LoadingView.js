/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Dimensions} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';

const {width, height} = Dimensions.get('window');
const LoadingView = ({navigation, route}) => {
  return (
    <View
      style={{
        width: width,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SkypeIndicator color="#8054ef" size={60} />
    </View>
  );
};

export default LoadingView;
