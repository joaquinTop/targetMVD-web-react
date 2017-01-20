import axios from 'axios';
import { BASE_URL } from '../constants/constants';

let instance;

class TopicClient {

  static setUserInfo(userToken){
    instance = axios.create({
      baseURL: BASE_URL,
      timeout: 2000,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-USER-TOKEN': userToken }
    });
  }

  static getTopics() {
    return new Promise((resolve, reject) => {
      instance.get('/topics').then((res => {
        const { data } = res;
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }
}

export default TopicClient;
