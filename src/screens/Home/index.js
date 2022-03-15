import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader logo avatar search />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
