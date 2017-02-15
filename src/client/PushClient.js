import axios from 'axios';
import { BASE_URL } from '../constants/constants';

let axiosInstance;

class PushClient {

  static setUserInfo(userToken){
    axiosInstance = axios.create({
      baseURL: BASE_URL,
      timeout: 2000,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-USER-TOKEN': userToken }
    });
  }

  static sendPushToken(token, user_id) {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/users/' + user_id + '/push_tokens', token).then((({ data }) => {
          resolve(data);
        })).catch(error => {
          reject(error.message);
        });
    });
  }

}

export default PushClient;
