import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function targetReducer(state = initialState.targets, action){
  let newState;
  switch(action.type){
    case types.CREATE_TARGET:
      newState = [...state,
        Object.assign({}, new target(action.target.id, action.target.title, action.target.latitude,
          action.target.longitude, action.target.radius, action.target.topic, true, true))];
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
        return new target(el.id, el.title, el.latitude, el.longitude, el.radius, el.topic, true, true);
      });
    }

    case types.DELETE_TARGET:{
      const index = state.findIndex((x) => x.id === action.target.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }

    case types.RESET_TARGETS:
      return [];

    default:
      return state;

  }
}

function target(id, title, latitude, longitude, radius, topic, isVisible, isActive){
  this.id = id;
  this.title = title || "";
  this.lat = latitude;
  this.lng = longitude;
  this.radius = radius;
  this.topic = topic;
  this.isVisible = isVisible;
  this.isActive = isActive;
}
