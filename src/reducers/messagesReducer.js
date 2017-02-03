import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messagesReducer(state = initialState.messages, action){
  let newState;
  switch(action.type){

    case types.LOAD_MESSAGES:
      return action.messages.reverse();

    case types.ADD_MESSAGE:
      newState = [...state,
        Object.assign({}, action.message)];
      return newState;

    default:
      return state;

  }
}
