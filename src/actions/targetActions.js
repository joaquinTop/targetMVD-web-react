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

export function loadTargetsSuccess(targets){
  return {type:types.LOAD_TARGETS, targets:targets};
}

export const loadTargets = () => {
  return dispatch => {
    return targetClient.getMyTargets().then(data => {
      dispatch(loadTargetsSuccess(data.targets));
      // let targets = data.targets.map(el => {
      //   return {
      //     id: el.id,
      //     title: el.title || "",
      //     lat: el.latitude,
      //     lng: el.longitude,
      //     radius: el.radius,
      //     topic: el.topic,
      //     isVisible: true,
      //     isActive: true
      //   };
      // });
      // for (let target in targets) {
      //   dispatch(createTargetSuccess(targets[target]));
      // }
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
