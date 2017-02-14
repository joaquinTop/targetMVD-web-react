import * as types from './actionTypes';

export const updateSelectedTarget = (selectedTarget) => {
  return { type: types.UPDATE_SELECTED_TARGET, selectedTarget } ;
};

export const updateSelectedTargetField = (fieldName, value) => {
  return { type: types.UPDATE_SELECTED_TARGET_FIELD, fieldName, value} ;
};

export const resetSelectedTarget = () => {
  return { type: types.RESET_SELECTED_TARGET };
};
