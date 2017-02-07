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

  static sendPushToken(token, user_id) {
    return new Promise((resolve, reject) => {
        instance.post('/users/' + user_id + '/push_tokens', token).then(((res) => {
          debugger;
          const {data} = res;
          resolve(data);
        })).catch(error => {
          debugger;
          reject(error.message);
        });
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
