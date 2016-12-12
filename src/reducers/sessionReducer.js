import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action){
  let newState;
  switch(action.type){

    case types.UPDATE_SESSION:
      newState = Object.assign({}, state);
      newState[action.fieldName] = action.value;
      return newState;

    default:
      return state;
  }
}
