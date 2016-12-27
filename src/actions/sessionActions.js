import * as types from './actionTypes';
import userClient from '../client/UsersServerClient';
import targetClient from '../client/TargetsServerClient';
import { resetTargets } from './targetActions';
import { setUser, removeUser } from '../utils/sessionHelper'

export function updateSessionInformation(fieldName, value){
  return {type: types.UPDATE_SESSION, fieldName, value};
}

export function resetSession(){
  return {type: types.RESET_SESSION};
}

export function configureSession(data){
  return dispatch => {
    targetClient.setUserInfo(data.token, data.user_id);
    dispatch(updateSessionInformation("user_id", data.user_id));
    dispatch(updateSessionInformation("user_token", data.token));
    dispatch(updateSessionInformation("isLoggedIn", true));
    setUser(data);
  }
}

export const signIn = (userJson) => {
  return dispatch => {
    return userClient.signIn(userJson).then(data => {
      dispatch(configureSession(data));
    }).catch(error => {
      console.log(error);
    });
  };
};

export const signInWithFB = (accessToken) => {
  return dispatch => {
    return userClient.signInWithFB(accessToken).then(data => {
      dispatch(configureSession(data));
    }).catch(error => {
      console.log(error);
    });
  };
};

export const signUp = (userJson) => {
  return dispatch => {
    return userClient.signUp(userJson).then(data => {
      targetClient.setUserInfo(data.token, data.user_id);
      dispatch(updateSessionInformation("user_id", data.user_id));
      dispatch(updateSessionInformation("user_token", data.token));
      dispatch(updateSessionInformation("isLoggedIn", true));
      cookie.save('user', userJson, { path: '/' });
    }).catch(error => {
      console.log(error);
    });
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch(resetSession());
    dispatch(resetTargets());
    removeUser();
    // NOTE: maybe should reset info assosiated to last user in targetClient
    // return userClient.signOut(userToken).then(data => {
    //   dispatch(resetSession);
    //   localStorage.removeItem("user");
    // }).catch(error => {
    //   console.log(error);
    // });
  };
};
