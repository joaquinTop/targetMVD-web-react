import * as types from './actionTypes';
import userClient from '../client/UsersServerClient';
import targetClient from '../client/TargetsServerClient';
import topicClient from '../client/TopicsServerClient';
import matchesClient from '../client/MatchesServerClient';
import messagesClient from '../client/MessagesServerClient';
import pushClient from '../client/PushClient';
import { resetTargets } from './targetActions';
import { setUser, removeUser, setToken } from '../utils/LocalStorageHelper';
import { loadTopics } from '../actions/topicActions';
import { loadMatches } from '../actions/matchesActions';
import { createAlert } from './alertActions';

export function updateSessionInformation(fieldName, value){
  return { type: types.UPDATE_SESSION, fieldName, value };
}

export function resetSession(){
  return { type: types.RESET_SESSION };
}

export function configureSession(data, firstTime){
  return dispatch => {
    targetClient.setUserInfo(data.token, data.user_id);
    topicClient.setUserInfo(data.token);
    matchesClient.setUserInfo(data.token, data.user_id);
    messagesClient.setUserInfo(data.token, data.user_id);
    pushClient.setUserInfo(data.token);
    dispatch(updateSessionInformation("user_id", data.user_id));
    dispatch(updateSessionInformation("user_token", data.token));
    dispatch(updateSessionInformation("isLoggedIn", true));
    dispatch(updateSessionInformation("firstTime", firstTime));
    dispatch(loadTopics());
    dispatch(loadMatches());
  };
}

export const signIn = (userJson) => {
  return dispatch => {
    return userClient.signIn(userJson).then(data => {
      dispatch(configureSession(data, false));
      setUser(userJson, false);
    }).catch(error => {
      dispatch(createAlert("SignInPage", error, "error"));
    });
  };
};

export const setPushToken = (token, userId) => {
  return dispatch => {
    return pushClient.sendPushToken(token, userId).then(data => {
      setToken(token);
      console.log(data);
    }).catch(error => {
      dispatch(createAlert("SideBarContainer", error, "error"));
    });
  };
};

export const signInWithFB = (accessToken, firstTime) => {
  return dispatch => {
    return userClient.signInWithFB(accessToken).then(data => {
      dispatch(configureSession(data, firstTime));
      setUser(accessToken, true);
    }).catch(error => {
      dispatch(createAlert("SignInPage", error, "error"));
    });
  };
};

export const signUp = (userJson) => {
  return dispatch => {
    return userClient.signUp(userJson).then(data => {
      dispatch(configureSession(data, true));
      setUser(userJson, false);
    }).catch(error => {
      dispatch(createAlert("SignInPage", error, "error"));
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
