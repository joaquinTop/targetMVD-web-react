import * as types from './actionTypes';

export function createTarget(target){
  return {type:types.CREATE_TARGET, target:target};
}

export function updateTarget(index, fieldName, value){
  return {type:types.UPDATE_TARGET, index:index, fieldName:fieldName, value:value};
}

export function resetTargets(){
  return {type:types.RESET_TARGETS};
}

export function deleteTarget(target){
  return {type:types.DELETE_TARGET, target};
}
