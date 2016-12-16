import axios from 'axios';

let instance;

class TargetClient {

  static setUserInfo(userToken, userIdentifier){
    if (instance === undefined) {
      instance = axios.create({
        baseURL: 'http://localhost:3001/api/v1/users/' + userIdentifier,
        // timeout can be overriden in those cases where the answer might take a while (i.e. images)
        timeout: 2000,
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'X-USER-TOKEN': userToken}
      });
    }
  }

  static createTarget(target) {
    return new Promise((resolve, reject)=> {
      instance.post('/targets', target).then((res=> {
        let data = res.data;
        console.log(data);
        resolve(data);
      })).catch(error => {
        console.log(error);
        reject(error.message);
      });
    });
  }

  static getMyTargets() {
    debugger;
    return new Promise((resolve, reject) => {
      instance.get('/targets').then((res=> {
        let data = res.data;
        console.log(data);
        resolve(data);
      })).catch(error => {
        console.log(error);
        reject(error.message);
      });
    });
  }

  // static deleteTarget(target) {
  //   return new Promise((resolve, reject)=> {
  //
  //   });
  // }
  //
  // static getCompatibleTargets() {
  //   return new Promise((resolve, reject) => {
  //
  //   });
  // }
}

export default TargetClient;
