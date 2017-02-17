import ApiClient from './ApiClient';

let axiosInstance = new ApiClient();

class TopicClient {

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
