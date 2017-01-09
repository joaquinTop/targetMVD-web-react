import * as types from './actionTypes';
import topicClient from '../client/TopicsServerClient';


export function loadTopicsSuccess(topics){
  return {type: types.LOAD_TOPICS, topics};
}

export const loadTopics = () => {
  return dispatch => {
    return topicClient.getTopics().then(data => {
      dispatch(loadTopicsSuccess(data.topics));
    }).catch(error => {
      console.log(error);
    });
  };
};
