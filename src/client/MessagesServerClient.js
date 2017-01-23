import axios from 'axios';
import { BASE_URL } from '../constants/constants';

let instance;

class MessagesClient {

  static setUserInfo(userToken, userIdentifier){
    instance = axios.create({
      baseURL: BASE_URL + '/users/' + userIdentifier,
      timeout: 2000,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-USER-TOKEN': userToken }
    });
  }

  static getMessages(matchId) {
    return new Promise((resolve, reject) => {
      instance.get('/match_conversations/' + matchId + '/messages').then((res => {
        const { data } = res;
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }
}

export default MessagesClient;
