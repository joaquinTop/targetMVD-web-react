import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function contentReducer(state = initialState.content, action){
  
  switch(action.type){
    case types.SWITCH_CONTENT:
      return action.nextContent;

    default:
      return state;

  }
}
