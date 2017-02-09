import { Pushwoosh } from 'web-push-notifications';
import * as C from '../constants/constants';

let pwInstance;

class PushwooshService {

  static initPushwoosh(){
    pwInstance = new Pushwoosh();
    pwInstance.push(['init', {
        logLevel: 'debug', // or debug
        applicationCode: C.PUSHWOOSH_APP_CODE,
        defaultNotificationTitle: 'Pushwoosh',
        defaultNotificationImage: 'https://cp.pushwoosh.com/img/logo-medium.png'
    }]);
  }

  static registerDevice(setPushToken, userId){
    pwInstance.push((api) => {
      const tokenJson = {
        push_token: api.pushToken
      };
      api.registerDevice().then(() => {
        setPushToken(tokenJson, userId);
      }).catch(error => {
        console.log(error);
      });
    });
  }

  static unregisterDevice(){
    pwInstance.push((api) => {
      api.unregisterDevice().then(() => {
        console.log("Success");
      }).catch(error => {
        console.log(error);
      });
    });
  }
}

export default PushwooshService;
