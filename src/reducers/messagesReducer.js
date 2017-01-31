import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messagesReducer(state = initialState.messages, action){
  switch(action.type){
    
    case types.LOAD_MESSAGES:
      return action.matches;

    default:
      return state;

  }
}
