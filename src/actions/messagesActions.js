import * as types from './actionTypes';
import messagesClient from '../client/MessagesServerClient';

export function loadMessagesSuccess(messages){
  return {type: types.LOAD_MESSAGES, messages};
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
