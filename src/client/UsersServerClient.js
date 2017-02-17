import ApiClient from './ApiClient';

const axiosInstance = new ApiClient();

class UserClient {

  static signUp(user) {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/users', user).then((({ data }) => {
          axiosInstance.defaults.headers['X-USER-TOKEN'] = data.token;
          resolve(data);
        })).catch(error => {
          reject(error.message);
        });
    });
  }

  static signIn(user) {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/users/sign_in', user).then((({ data }) => {
          axiosInstance.defaults.headers['X-USER-TOKEN'] = data.token;
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

  static resetPassword(settings, userId) {
    return new Promise((resolve, reject) => {
        axiosInstance.put('/users/' + userId + '/password/change', settings).then((({ data }) => {
          resolve(data);
        })).catch(error => {
          reject(error.message);
        });
    });
  }

  static signOut() {
    return new Promise((resolve, reject) => {
      axiosInstance.delete('users/sign_out').then((() => {
        resolve();
      })).catch(error => {
        reject(error.message);
      });
    });
  }
}

export default UserClient;
