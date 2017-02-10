import { Pushwoosh } from 'web-push-notifications';
import * as firebase from 'firebase';
import * as C from '../constants/constants';

let pwInstance;

class PushwooshService {

  // Initialize Firebase
  static initFirebase(){
    const config = {
      apiKey: "AIzaSyDeWz7yKFIdTOGYe-xGxxzx8bmt0gvzm64",
      authDomain: "target-17fc5.firebaseapp.com",
      databaseURL: "https://target-17fc5.firebaseio.com",
      storageBucket: "target-17fc5.appspot.com",
      messagingSenderId: "196006152865"
    };
    firebase.initializeApp(config);
  }

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
