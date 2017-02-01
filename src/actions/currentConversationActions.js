import * as types from './actionTypes';

export const updateCurrentConversation = (conversation) => {
  return { type: types.UPDATE_CURRENT_CONVERSATION, conversation };
}

export const resetCurrentConversation = () => {
  return { type: types.RESET_CURRENT_CONVERSATION };
}
