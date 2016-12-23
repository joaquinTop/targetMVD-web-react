import * as types from './actionTypes';

export function updateFreeTarget(fieldName, value){
  return {type: types.UPDATE_FREE_TARGET, fieldName, value};
}

export function resetFreeTarget(){
  return {type: types.RESET_FREE_TARGET};
}
