//root reducer
import {combineReducers} from 'redux';
import targets from './targetReducer';
import newTarget from './newTargetReducer';
import session from './sessionReducer';
import alert from './alertReducer';
import topics from './topicsReducer';
import content from './contentReducer';

const rootReducer = combineReducers({
  targets,
  session,
  newTarget,
  alert,
  topics,
  content
});

export default rootReducer;
