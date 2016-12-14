//root reducer
import {combineReducers} from 'redux';
import targets from './targetReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  targets,
  session
});

export default rootReducer;
