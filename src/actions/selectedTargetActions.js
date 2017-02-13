import * as types from './actionTypes';

export function updateSelectedTarget(selectedTarget){
  return { type: types.UPDATE_SELECTED_TARGET, selectedTarget } ;
}

export function resetSelectedTarget(){
  return { type: types.RESET_SELECTED_TARGET };
}
