//root reducer
import {combineReducers} from 'redux';
import targets from './targetReducer';
import newTarget from './newTargetReducer';
import selectedTarget from './selectedTargetReducer';
import session from './sessionReducer';
import alert from './alertReducer';
import topics from './topicsReducer';
import content from './contentReducer';
import matches from './matchesReducer';
import messages from './messagesReducer';
import currentConversation from './currentConversationReducer';

const rootReducer = combineReducers({
  targets,
  session,
  newTarget,
  selectedTarget,
  alert,
  topics,
  content,
  matches,
  messages,
  currentConversation
});

export default rootReducer;
