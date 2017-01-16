import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function alertReducer(state = initialState.alert, action){

  switch(action.type){

    case types.CREATE_ALERT:{
      return {
        goal:action.goal,
        text:action.text,
        alertType:action.alertType
      };
    }

    case types.DELETE_ALERT:{
      return initialState.alert;
    }

    default:
      return state;
  }
}
