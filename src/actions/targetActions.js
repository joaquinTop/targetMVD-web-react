import * as types from './actionTypes';
import targetClient from '../client/TargetsServerClient';

export function createTargetSuccess(target){
  return {type:types.CREATE_TARGET, target:target};
}

export const createTarget = (target) => {
  return dispatch => {
    return targetClient.createTarget(target).then(data => {
      dispatch(createTargetSuccess(data.target));
    }).catch(error => {
      console.log(error);
    });
  };
};

export function updateTarget(index, fieldName, value){
  return {type:types.UPDATE_TARGET, index:index, fieldName:fieldName, value:value};
}

export function resetTargets(){
  return {type:types.RESET_TARGETS};
}

export function deleteTarget(target){
  return {type:types.DELETE_TARGET, target};
}
