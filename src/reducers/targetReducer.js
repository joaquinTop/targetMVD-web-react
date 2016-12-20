import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function targetReducer(state = initialState.targets, action){
  let newState;
  switch(action.type){
    case types.CREATE_TARGET:
      newState = [...state,
        Object.assign({}, {
          id: action.target.id,
          title: action.target.title || "",
          lat: action.target.latitude,
          lng: action.target.longitude,
          radius: action.target.radius,
          topic: action.target.topic,
          isVisible: true,
          isActive: true
        })
      ];
      return newState;

    case types.UPDATE_TARGET:{
      const index = action.index;
      let targetToUpdate = Object.assign({}, state[index]);
      targetToUpdate[action.fieldName] = action.value;
      newState = state.slice(0,index).concat(state.slice(index+1));
      newState.splice(index, 0, targetToUpdate);
      return newState;
    }

    case types.LOAD_TARGETS:{
      newState = action.targets;
      return newState.map(el => {
        return {
          id: el.id,
          title: el.title || "",
          lat: el.latitude,
          lng: el.longitude,
          radius: el.radius,
          topic: el.topic,
          isVisible: true,
          isActive: true
        };
      });
    }

    case types.DELETE_TARGET:
      break;

    case types.RESET_TARGETS:
      return [];

    default:
      return state;

  }
}
