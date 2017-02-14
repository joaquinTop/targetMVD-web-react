import * as types from './actionTypes';

export const updateSelectedTarget = (selectedTarget) => {
  return { type: types.UPDATE_SELECTED_TARGET, selectedTarget } ;
};

export const resetSelectedTarget = () => {
  return { type: types.RESET_SELECTED_TARGET };
};
