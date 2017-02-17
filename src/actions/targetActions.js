import * as types from './actionTypes';
import targetClient from '../client/TargetsServerClient';
import { updateFreeTarget } from './newTargetActions';
import { ALERT_GOALS } from '../enums/enums'
import { createAlert } from './alertActions';

export function createTargetSuccess(target){
  return { type: types.CREATE_TARGET, target };
}

export const createTarget = (target) => {
  return dispatch => {
    return targetClient.createTarget(target).then(data => {
      dispatch(createAlert(ALERT_GOALS.SideBarContainer, "Target successfully created", "success"));
      dispatch(createTargetSuccess(data.target));
    }).catch(error => {
      dispatch(createAlert(ALERT_GOALS.SideBarContainer, error, "error"));
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

export const deleteTargetSuccess = (target) => {
  return { type: types.DELETE_TARGET, target };
};

export const deleteTarget = (targetId) => {
  return dispatch => {
    return targetClient.deleteTarget(targetId).then(data => {
      dispatch(createAlert(ALERT_GOALS.SideBarContainer, "Target successfully deleted", "success"));
      dispatch(deleteTargetSuccess(data.target));
    }).catch(error => {
      dispatch(createAlert(ALERT_GOALS.SideBarContainer, error, "error"));
    });
  };
};

export const updateTargetSuccess = (target) => {
  return { type: types.UPDATE_TARGET, target };
};

export const updateTarget = (targetJson, targetId) => {
  return dispatch => {
    return targetClient.updateTarget(targetJson, targetId).then(data => {
      dispatch(createAlert(ALERT_GOALS.SideBarContainer, "Target successfully updated", "success"));
      dispatch(updateTargetSuccess(data.target));
    }).catch(error => {
      dispatch(createAlert(ALERT_GOALS.SideBarContainer, error, "error"));
    });
  };
};

export const resetTargets = () => {
  return { type: types.RESET_TARGETS };
};
