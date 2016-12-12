import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function targetReducer(state = initialState.targets, action){
  let newState;
  switch(action.type){
    case types.CREATE_TARGET:
      newState = [...state,
        Object.assign({}, action.target)
      ];
      return newState;

    case types.UPDATE_TARGET:{
      const index = action.index;
      let targetToUpdate = Object.assign({}, state[index]);
      targetToUpdate[action.fieldName] = action.value;
      newState = state.slice(0,index).concat(state.slice(index+1));
      newState.splice(index, 0, targetToUpdate);
      return newState;
    }

    case types.DELETE_TARGET:
      break;

    case types.RESET_TARGETS:
      return [];

    default:
      return state;

  }
}
