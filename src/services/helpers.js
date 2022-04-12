import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

import {SAVED_JOBS, SET_LOGIN} from '../constants/AppConstants';

export const addJobData = async job => {
  try {
    const jobsData = (await getJobsData()) || [];
    const duplicate = jobsData.some(oldJob => oldJob?.id_viec === job?.id_viec);
    !duplicate && jobsData.push(job);
    const jsonValue = JSON.stringify(jobsData);
    await AsyncStorage.setItem(SAVED_JOBS, jsonValue);
    Alert.alert('Thành công', 'Đã lưu công việc vào danh sách của bạn', [
      {
        text: 'OK',
        style: 'default',
      },
    ]);
  } catch (e) {
    console.log('addJobData error', e);
  }
};

export const removeJobData = async job => {
  try {
    const jobsData = await getJobsData();
    const newJobsData = jobsData.filter(
      oldJob => oldJob?.id_viec !== job?.id_viec,
    );
    const jsonValue = JSON.stringify(newJobsData);
    await AsyncStorage.setItem(SAVED_JOBS, jsonValue);
  } catch (e) {
    console.log('addJobData error', e);
  }
};

export const getJobsData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(SAVED_JOBS);
    return jsonValue != null || jsonValue !== undefined
      ? JSON.parse(jsonValue)
      : [];
  } catch (e) {
    console.log('getJobsData error', e);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log('Done.');
};

export const saveLoginData = async data => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(SET_LOGIN, jsonValue);
  } catch (error) {
    console.log('saveLoginData error', error);
  }
};

export const fakeLogout = async () => {
  try {
    await AsyncStorage.setItem(SET_LOGIN, null);
  } catch (error) {
    console.log('fakeAuth error', error);
  }
};

export const getLoginData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(SET_LOGIN);
    return jsonValue != null || jsonValue !== undefined
      ? JSON.parse(jsonValue)
      : [];
  } catch (error) {
    console.log('fakeAuth error', error);
  }
};
