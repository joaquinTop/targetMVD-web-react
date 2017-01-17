//root reducer
import {combineReducers} from 'redux';
import targets from './targetReducer';
import newTarget from './newTargetReducer';
import session from './sessionReducer';
import alert from './alertReducer';
import topics from './topicsReducer';

const rootReducer = combineReducers({
  targets,
  session,
  newTarget,
  alert,
  topics
});

export default rootReducer;
