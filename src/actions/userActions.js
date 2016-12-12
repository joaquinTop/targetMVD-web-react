import * as types from './actionTypes';

export function updateUserInfo(user, fieldName, value){
  return {type:types.UPDATE_USER, user:user, fieldName:fieldName, value:value};
}

export function resetUserState(user){
  return {type:types.RESET_USER, user};
}
