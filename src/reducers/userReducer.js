import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action){
  let newState;
  switch(action.type){

    case types.UPDATE_USER:
      newState = Object.assign({}, state);
      newState[action.fieldName] = action.value;
      return newState;

    case types.RESET_USER:
      return Object.assign({}, initialState.user);

    default:
      return state;

  }
}
