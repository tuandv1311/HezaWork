import axios from 'axios';

class AxiosService {
  constructor() {
    this.instance = axios.create({
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    this.instanceUpload = axios.create({
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
    this.instance.interceptors.response.use(
      response => this.handleSuccess(response),
      error => this.handleError(error),
    );
    this.instanceUpload.interceptors.response.use(
      response => this.handleSuccess(response),
      error => this.handleError(error),
    );
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    console.log('err', error);
    return Promise.reject(error);
  }

  get(url, params = null, config = null) {
    return this.instance.get(url, {params, ...config});
  }
  post(url, data, config = null) {
    return this.instance.post(url, data, config);
  }
  put(url, data, config = null) {
    return this.instance.put(url, data, config);
  }

  uploadPost(url, data, config = null) {
    console.log(url, data, config);
    return this.instanceUpload.post(url, data, config);
  }

  upload(url, data, config = null) {
    return this.instanceUpload.put(url, data, config);
  }

  delete(url, param) {
    return this.instance.delete(url, param);
  }

  setToken = token => {
    this.instance.defaults.headers.common.Authorization = token;
  };
}

const axiosService = new AxiosService();
export default axiosService;
