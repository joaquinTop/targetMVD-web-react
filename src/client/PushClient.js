import ApiClient from './ApiClient';

let axiosInstance = new ApiClient();

class PushClient {

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
