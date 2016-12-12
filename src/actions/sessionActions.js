import * as types from './actionTypes';

export function updateSessionInformation(session, fieldName, value){
  return {type:types.UPDATE_SESSION, session:session, fieldName:fieldName, value:value};
}
