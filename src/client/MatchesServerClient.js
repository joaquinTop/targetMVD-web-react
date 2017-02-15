import axios from 'axios';
import { BASE_URL } from '../constants/constants';

let axiosInstance;

class MatchesClient {

  static setUserInfo(userToken, userIdentifier){
    axiosInstance = axios.create({
      baseURL: BASE_URL + '/users/' + userIdentifier,
      timeout: 2000,
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-USER-TOKEN': userToken }
    });
  }

  static getMatches() {
    return new Promise((resolve, reject) => {
      axiosInstance.get('/match_conversations').then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }
}

export default MatchesClient;
