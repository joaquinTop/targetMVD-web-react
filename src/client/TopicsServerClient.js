import axios from 'axios';
import { BASE_URL } from '../constants/constants';

let axiosInstance;

class TopicClient {

  static setUserInfo(userToken){
    axiosInstance = axios.create({
      baseURL: BASE_URL,
      timeout: 2000,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-USER-TOKEN': userToken }
    });
  }

  static getTopics() {
    return new Promise((resolve, reject) => {
      axiosInstance.get('/topics').then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }
}

export default TopicClient;
