import axios from 'axios';
import { BASE_URL } from '../constants/constants';

let axiosInstance;

class TargetClient {

  static setUserInfo(userToken, userIdentifier){
    axiosInstance = axios.create({
      baseURL: BASE_URL + '/users/' + userIdentifier,
      // timeout can be overriden in those cases where the answer might take a while (i.e. images)
      timeout: 2000,
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'X-USER-TOKEN': userToken}
    });
  }

  static getMyTargets() {
    return new Promise((resolve, reject) => {
      axiosInstance.get('/targets').then((({ data })=> {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static createTarget(target) {
    return new Promise((resolve, reject) => {
      axiosInstance.post('/targets', target).then((({ data })=> {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static updateTarget(target) {
    return new Promise((resolve, reject) => {
      axiosInstance.post('/targets', target).then((({ data })=> {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static deleteTarget(targetId) {
    return new Promise((resolve, reject) => {
      axiosInstance.delete('/targets/' + targetId).then((({ data })=> {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

}

export default TargetClient;
