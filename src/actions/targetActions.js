import * as types from './actionTypes';
import targetClient from '../client/TargetsServerClient';
import {updateFreeTarget} from './newTargetActions';
import {createAlert} from './alertActions';

export function createTargetSuccess(target){
  return { type: types.CREATE_TARGET, target };
}

export const createTarget = (target) => {
  return dispatch => {
    return targetClient.createTarget(target).then(data => {
      dispatch(createAlert("SideBarContainer", "Target created successfully", "success"));
      dispatch(createTargetSuccess(data.target));
    }).catch(error => {
      dispatch(createAlert("SideBarContainer", error, "error"));
    });
  };
};

export function loadTargetsSuccess(targets){
  return { type: types.LOAD_TARGETS, targets };
}

export const loadTargets = () => {
  return dispatch => {
    return targetClient.getMyTargets().then(data => {
      dispatch(loadTargetsSuccess(data.targets));
      if (data.targets.length >= 10) {
        dispatch(updateFreeTarget("isActive", false));
      }
    }).catch(error => {
      console.log(error);
    });
  };
};

export function updateTarget(index, fieldName, value){
  return { type: types.UPDATE_TARGET, index, fieldName, value };
}

export function resetTargets(){
  return { type: types.RESET_TARGETS };
}

export function deleteTarget(target){
  return { type: types.DELETE_TARGET, target };
}
