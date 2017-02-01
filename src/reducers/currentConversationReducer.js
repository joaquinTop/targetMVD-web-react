import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function targetReducer(state = initialState.currentConversation, action){
  switch(action.type){

    case types.UPDATE_CURRENT_CONVERSATION:{
      return action.conversation;
    }

    case types.RESET_CURRENT_CONVERSATION:{
      return initialState.currentConversation;
    }

    default:
      return state;
  }
}
