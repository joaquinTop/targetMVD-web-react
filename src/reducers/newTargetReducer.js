import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function newTargetReducer(state = initialState.newTarget, action){
  let newState;
  switch(action.type){

    case types.UPDATE_FREE_TARGET:{
      newState = Object.assign({}, state);
      newState[action.fieldName] = action.value;
      return newState;
    }

    case types.RESET_FREE_TARGET:{
      return initialState.newTarget;
    }

    default:
      return state;
  }
}
