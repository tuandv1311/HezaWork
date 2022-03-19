/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  StyleSheet,
  View,
  Platform,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import React, {useState} from 'react';
import {TabBar, TabView} from 'react-native-tab-view';
// import {ms} from 'react-native-size-matters';
import {CustomFonts} from '../../../constants/AppConstants';
import {Text} from 'native-base';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const {width} = Dimensions.get('screen');

const JobTabView = ({item}) => {
  const initialLayout = {width: width};
  //   alert(item?.description);

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {key: 'job_description', title: 'Mô tả'},
    {key: 'company', title: 'Công ty'},
  ]);

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        renderLabel={renderLabel}
        scrollEnabled={true}
        indicatorStyle={styles.indicator}
        tabStyle={styles.tabStyle}
        style={styles.tabBar}
      />
    );
  };

  const renderLabel = props => {
    const {route, focused} = props;
    return (
      <View
        style={{
          width: width / 2 - 60,
          height: 40,
          //   marginBottom: 6,
          alignItems: 'center',
          justifyContent: 'center',
          // paddingHorizontal: 12,
          // marginHorizontal: 5,
          borderRadius: 10,
          overflow: 'hidden',
          // paddingVertical: 9,
          backgroundColor: focused ? '#8054ef' : 'transparent',
        }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: CustomFonts.bold,
            color: focused ? '#FFFFFF' : '#000000',
            // marginBottom: 2,
          }}>
          {route.title}
        </Text>
      </View>
    );
  };

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'job_description':
        return (
          <View style={{marginHorizontal: 30}}>
            <Text fontFamily="regular" fontSize="20" color="#6a676a">
              {item?.description}
            </Text>
          </View>
        );

      case 'company':
        return (
          <View style={{marginHorizontal: 30}}>
            <Text fontFamily="regular" fontSize="20" color="#6a676a">
              {item?.company}
            </Text>
          </View>
        );
    }
  };

  const handleIndexChange = i => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIndex(i);
  };

  return (
    <TabView
      lazy
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={handleIndexChange}
      initialLayout={initialLayout}
    />
  );
};

export default JobTabView;

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 50,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  tabStyle: {
    // paddingVertical: 4,
    // paddingHorizontal: 4,
    // margin: 4,
    // backgroundColor: '#8054ef',
    width: width / 2 - 50,
    height: 50,
  },
  indicator: {
    backgroundColor: '#8054ef',
    height: 0,
  },
});
