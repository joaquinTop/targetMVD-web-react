import * as types from './actionTypes';
import messagesClient from '../client/MessagesServerClient';

export const loadMessagesSuccess = (messages) => {
  return { type: types.LOAD_MESSAGES, messages };
}

export const addMessage = (message) => {
  return { type: types.ADD_MESSAGE, message };
}

export const loadMessages = (matchId) => {
  return dispatch => {
    return messagesClient.getMessages(matchId).then(data => {
      dispatch(loadMessagesSuccess(data.messages));
    }).catch(error => {
      console.log(error);
    });
  };
};

export const sendMessage = (message, matchId) => {
  return dispatch => {
    return messagesClient.sendMessage(message, matchId).then(data => {
      dispatch(addMessage(data));
    }).catch(error => {
      console.log(error);
    });
  };
};

export const onMessageReceived = (message) => {
  return dispatch => {
    dispatch(addMessage(message));
  };
};
