import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function selectedTargetReducer(state = initialState.selectedTarget, action){
  switch(action.type){

    case types.UPDATE_SELECTED_TARGET:{
      return action.selectedTarget;
    }

    case types.UPDATE_SELECTED_TARGET_FIELD:{
      let newState = Object.assign({}, state);
      newState[action.fieldName] = action.value;
      return newState;
    }

    case types.RESET_SELECTED_TARGET:{
      return initialState.selectedTarget;
    }

    default:
      return state;
  }
}
