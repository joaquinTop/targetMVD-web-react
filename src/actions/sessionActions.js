import * as types from './actionTypes';
import userClient from '../client/UsersServerClient';
import targetClient from '../client/TargetsServerClient';
import cookie from 'react-cookie';

export function updateSessionInformation(fieldName, value){
  return {type:types.UPDATE_SESSION, fieldName:fieldName, value:value};
}

export function resetSession(){
  return {type:types.RESET_SESSION};
}

export const signIn = (userJson) => {
  return dispatch => {
    return userClient.signIn(userJson).then(data => {
      dispatch(updateSessionInformation("user_id", data.user_id));
      dispatch(updateSessionInformation("user_token", data.token));
      dispatch(updateSessionInformation("isLoggedIn", true));
      targetClient.setUserInfo(data.token, data.user_id);
      cookie.save('user', userJson, { path: '/' });
    }).catch(error => {
      console.log(error);
    });
  };
};

export const signOut = (userToken) => {
  return dispatch => {
    dispatch(resetSession());
    console.log(userToken);
    cookie.remove('user', { path: '/' });
    // NOTE: maybe should reset info assosiated to last user in targetClient
    // return userClient.signOut(userToken).then(data => {
    //   console.log(data);
    //   debugger;
    //   dispatch(resetSession);
    //   // NOTE: maybe should reset info assosiated to last user in targetClient
    //   cookie.remove('user', { path: '/' });
    // }).catch(error => {
    //   console.log(error);
    // });
  };
};
