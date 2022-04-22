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

export const submitCVApi = async (jobId, userId) => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/luu_nop_don/${jobId}/${userId}`,
  );
};

export const checkSubmitCVApi = async (jobId, userId) => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/kt_nop_don/${jobId}/${userId}`,
  );
};

export const checkCompleteCVApi = async userId => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/kt_ho_so/${userId}`,
  );
};

export const getAppliedJobsApi = async userId => {
  return axiosService.get(
    `https://tuyendung.haiphong.vn/callback/ct_vl_uv/${userId}`,
  );
};
