import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  // timeout can be overriden in those cases where the answer might take a while
  timeout: 2000,
  headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
});

class UserClient {
  static signUp(user) {
    return new Promise((resolve, reject)=> {
        instance.post('/users', user).then((res=> {
          let data = res.data;
          console.log(data);
          resolve(data);
        })).catch(error => {
          console.log(error);
          reject(error.message);
        });
    })
  }

  static signIn(user) {
    return new Promise((resolve, reject)=> {
        instance.post('/users/sign_in', user).then((res=> {
          let data = res.data;
          console.log(data);
          resolve(data);
        })).catch(error => {
          console.log(error);
          reject(error.message);
        });
    })
  }

  static signOut(token) {
    // axios.delete('http://localhost:3001/api/v1/users/sign_out', {
    //   headers: {
    //   'uid': uid,
    //   'Content-Type': 'application/json'
    //   }
    // });

    instance.defaults.headers['X-USER-TOKEN'] = token;
    return new Promise((resolve, reject) => {
      instance.delete('users/sign_out', null).then((res=> {
        let data = res.data;
        console.log(data);
        resolve(data);
      })).catch(error => {
        console.log(error);
        reject(error.message);
      });
    });
  }
}

export default UserClient;
