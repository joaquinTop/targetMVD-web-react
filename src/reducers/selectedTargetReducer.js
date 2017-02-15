import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function selectedTargetReducer(state = initialState.selectedTarget, action){
  switch(action.type){

    case types.UPDATE_SELECTED_TARGET:{
      return action.selectedTarget;
    }

    case types.RESET_SELECTED_TARGET:{
      return initialState.selectedTarget;
    }

    default:
      return state;
  }
}
