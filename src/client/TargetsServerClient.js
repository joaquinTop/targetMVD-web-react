import ApiClient from './ApiClient';

let axiosInstance = new ApiClient();
let targetsPath = '/users/';

class TargetClient {

  static setPath(userIdentifier){
    targetsPath += (userIdentifier + '/targets/');
  }

  static getMyTargets() {
    return new Promise((resolve, reject) => {
      axiosInstance.get(targetsPath).then((({ data })=> {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static createTarget(target) {
    return new Promise((resolve, reject) => {
      axiosInstance.post(targetsPath, target).then((({ data })=> {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static updateTarget(targetJson, targetId) {
    return new Promise((resolve, reject) => {
      axiosInstance.put(targetsPath + targetId, targetJson).then((({ data })=> {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

  static deleteTarget(targetId) {
    return new Promise((resolve, reject) => {
      axiosInstance.delete(targetsPath + targetId).then((({ data })=> {
        resolve(data);
      })).catch(error => {
        reject(error.message);
      });
    });
  }

}

export default TargetClient;
