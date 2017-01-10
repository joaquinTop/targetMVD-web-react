import axios from 'axios';

let instance;

class TopicClient {

  static setUserInfo(userToken){
    instance = axios.create({
      baseURL: 'http://localhost:3001/api/v1',
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
        console.log(error);
        reject(error.message);
      });
    });
  }
}

export default TopicClient;
