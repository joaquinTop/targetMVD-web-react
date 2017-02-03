import * as types from './actionTypes';
import messagesClient from '../client/MessagesServerClient';

export const updateCurrentConversation = (conversation) => {
  return { type: types.UPDATE_CURRENT_CONVERSATION, conversation };
}

export const closeCurrentConversationSuccess = (conversation) => {
  return { type: types.CLOSE_CURRENT_CONVERSATION, conversation };
}

export const closeCurrentConversation = (matchId) => {
  return dispatch => {
    return messagesClient.closeConversation(matchId).then(data => {
      dispatch(closeCurrentConversationSuccess(data));
    }).catch(error => {
      console.log(error);
    });
  };
};
