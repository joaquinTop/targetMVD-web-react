import axios from 'axios';
import { BASE_URL } from '../constants/constants';

let axiosInstance;

class MessagesClient {

  static setUserInfo(userToken, userIdentifier){
    axiosInstance = axios.create({
      baseURL: BASE_URL + '/users/' + userIdentifier,
      timeout: 2000,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-USER-TOKEN': userToken }
    });
  }

  static getMessages(matchId) {
    return new Promise((resolve, reject) => {
      axiosInstance.get('/match_conversations/' + matchId + '/messages').then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static sendMessage(messsage, matchId) {
    return new Promise((resolve, reject) => {
      axiosInstance.post('/match_conversations/' + matchId + '/messages', messsage).then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static closeConversation(matchId) {
    return new Promise((resolve, reject) => {
      axiosInstance.post('/match_conversations/' + matchId + '/close').then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }
}

export default MessagesClient;
