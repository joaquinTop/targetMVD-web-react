import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function topicsReducer(state = initialState.topics, action){
  let newState;
  switch(action.type){
    case types.LOAD_TOPICS:
      newState = action.topics;
      return newState.map(el => {
        return {
          id : el.topic_id,
          label : el.label,
          url : el.icon
        };
      });

    default:
      return state;

  }
}
