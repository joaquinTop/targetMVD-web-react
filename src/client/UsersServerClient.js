import axios from 'axios';
import { BASE_URL } from '../constants/constants';

let axiosInstance = axios.create({
  baseURL: BASE_URL,
  // timeout can be overriden in those cases where the answer might take a while
  timeout: 10000,
  headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
});

class UserClient {

  static signUp(user) {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/users', user).then((({ data }) => {
          resolve(data);
        })).catch(error => {
          reject(error.message);
        });
    });
  }

  static signIn(user) {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/users/sign_in', user).then((({ data }) => {
          resolve(data);
        })).catch(error => {
          reject(error.message);
        });
    });
  }

  static signInWithFB(accessToken) {
    const infoJson = {
      type: 'facebook',
      fb_access_token: accessToken
    };
    return new Promise((resolve, reject) => {
        axiosInstance.post('/users/sign_in', infoJson).then((({ data }) => {
          resolve(data);
        })).catch(error => {
          reject(error.message);
        });
    });
  }

  static signOut(token) {
    axiosInstance.defaults.headers['X-USER-TOKEN'] = token;
    return new Promise((resolve, reject) => {
      axiosInstance.delete('users/sign_out', null).then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }
}

export default UserClient;
