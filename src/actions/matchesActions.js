import * as types from './actionTypes';
import matchesClient from '../client/MatchesServerClient';


export function loadMatchesSuccess(matches){
  return {type: types.LOAD_MATCHES, matches};
}

export const loadMatches = () => {
  return dispatch => {
    return matchesClient.getMatches().then(data => {
      dispatch(loadMatchesSuccess(data.matches));
    }).catch(error => {
      console.log(error);
    });
  };
};
