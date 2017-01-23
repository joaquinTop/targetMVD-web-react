import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as messagesActions from '../../actions/messagesActions';
import * as currentConversationActions from '../../actions/currentConversationActions';
import * as contentActions from '../../actions/contentActions';

export const Chat = (props) => {

  const contentChanged = () => {
    props.actions.switchContent("Home");
  };

  return (
    <div>
      <h3 className="home-title">CHAT</h3>
      <h4 className="home-title">{props.currentConversation.user.name}</h4>
      <h4 className="home-username">{props.messages.length}</h4>
      <button onClick={contentChanged} className="btn-sign-up">BACK</button>
    </div>
    );
};

Chat.propTypes = {
  actions: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  currentConversation: PropTypes.object.isRequired
};

const mapStateToProps = ({ messages, currentConversation }) => {
  return {
    messages,
    currentConversation
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, messagesActions, currentConversationActions, contentActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
