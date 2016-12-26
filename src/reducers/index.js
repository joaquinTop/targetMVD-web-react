//root reducer
import {combineReducers} from 'redux';
import targets from './targetReducer';
import newTarget from './newTargetReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  targets,
  session,
  newTarget
});

export default rootReducer;
