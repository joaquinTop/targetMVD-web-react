import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function matchesReducer(state = initialState.matches, action){
  switch(action.type){
    case types.LOAD_MATCHES:
      return action.matches;

    default:
      return state;

  }
}
