import * as types from './actionTypes';

export function createAlert(goal, text, alertType){
  return { type: types.CREATE_ALERT, goal, text, alertType };
}

export function deleteAlert(){
  return { type: types.DELETE_ALERT };
}
