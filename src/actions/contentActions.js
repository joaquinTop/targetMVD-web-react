import * as types from './actionTypes';

export function switchContent(nextContent){
  return {type: types.SWITCH_CONTENT, nextContent};
}
