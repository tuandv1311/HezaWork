import axiosService from './axios';

export const getJobsListApi = async (num = 100) => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/ds_viec_fe/${num}`,
  );
};

export const getJobDetailApi = async id => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/viec_lam_ct/${id}`,
  );
};

export const getNewsListApi = async (num = 100) => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/ds_tin/${num}`,
  );
};

export const getNewsDetailApi = async id => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/ct_tin/${id}`,
  );
};
