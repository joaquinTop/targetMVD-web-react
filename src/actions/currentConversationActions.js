import * as types from './actionTypes';

export function updateCurrentConversation(conversation){
  return { type: types.UPDATE_CURRENT_CONVERSATION, conversation} ;
}

export function resetCurrentConversation(){
  return { type: types.RESET_CURRENT_CONVERSATION };
}
