import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

import {SAVED_JOBS} from '../constants/AppConstants';

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
