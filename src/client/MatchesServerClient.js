import ApiClient from './ApiClient';

let axiosInstance = new ApiClient();
let matchesPath = '/users/';

class MatchesClient {

  static setPath(userIdentifier){
    matchesPath += (userIdentifier + '/match_conversations/');
  }

  static getMatches() {
    return new Promise((resolve, reject) => {
      axiosInstance.get(matchesPath).then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }
}

export default MatchesClient;
