import ApiClient from './ApiClient';

let axiosInstance = new ApiClient();
let messagesPath = '/users/';

class MessagesClient {

  static setPath(userIdentifier){
    if (!messagesPath.endsWith('/match_conversations/')) {
      messagesPath += (userIdentifier + '/match_conversations/');
    }
  }

  static getMessages(matchId) {
    return new Promise((resolve, reject) => {
      axiosInstance.get(messagesPath + matchId + '/messages').then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static sendMessage(messsage, matchId) {
    return new Promise((resolve, reject) => {
      axiosInstance.post(messagesPath + matchId + '/messages', messsage).then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static closeConversation(matchId) {
    return new Promise((resolve, reject) => {
      axiosInstance.post(messagesPath + matchId + '/close').then((({ data }) => {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }
}

export default MessagesClient;
