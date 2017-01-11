import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  // timeout can be overriden in those cases where the answer might take a while
  // target-mvd-api.herokuapp.com
  timeout: 10000,
  headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
});

class UserClient {

  static signUp(user) {
    return new Promise((resolve, reject) => {
        instance.post('/users', user).then((res => {
          const {data} = res;
          resolve(data);
        })).catch(error => {
          console.log(error);
          reject(error.message);
        });
    })
  }

  static signIn(user) {
    return new Promise((resolve, reject) => {
        instance.post('/users/sign_in', user).then((res => {
          const {data} = res;
          resolve(data);
        })).catch(error => {
          console.log(error);
          reject(error.message);
        });
    })
  }

  static signInWithFB(accessToken) {
    const infoJson = {
      type: 'facebook',
      fb_access_token: accessToken
    }
    return new Promise((resolve, reject) => {
        instance.post('/users/sign_in', infoJson).then((res => {
          const {data} = res;
          resolve(data);
        })).catch(error => {
          console.log(error);
          reject(error.message);
        });
    })
  }

  static signOut(token) {
    instance.defaults.headers['X-USER-TOKEN'] = token;
    return new Promise((resolve, reject) => {
      instance.delete('users/sign_out', null).then((res => {
        const {data} = res;
        resolve(data);
      })).catch(error => {
        console.log(error);
        reject(error.message);
      });
    });
  }
}

export default UserClient;
