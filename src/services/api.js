import axiosService from './axios';

export const loginApi = async (email, password) => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/xl_dn/${email}/${password}`,
  );
};

export const getJobsListApi = async (num = 100) => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/ds_viec_fe/${num}`,
  );
};

export const jobsSearchApi = async keyword => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/tim_kiem/${keyword}`,
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
