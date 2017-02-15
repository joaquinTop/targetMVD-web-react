import * as types from './actionTypes';

export function updateFreeTarget(values){
  return { type: types.UPDATE_FREE_TARGET, values} ;
}

export function resetFreeTarget(){
  return { type: types.RESET_FREE_TARGET };
}
