//root reducer
import {combineReducers} from 'redux';
import user from './userReducer';
import targets from './targetReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  user,
  targets,
  session
});

export default rootReducer;
