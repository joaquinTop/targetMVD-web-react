import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../common/Header';
import MessageListItem from '../common/MessageListItem';
import MessageComposer from '../common/MessageComposer';
import * as messagesActions from '../../actions/messagesActions';
import * as currentConversationActions from '../../actions/currentConversationActions';
import * as contentActions from '../../actions/contentActions';

export const Chat = ({ currentConversation, messages, actions: { switchContent } }) => {

  const contentChanged = () => {
    switchContent("Home");
  };

  return (
    <div className="chat-sidebar-container">
      <Header title={"CHAT"} style="sidebarHeader" withBackButton />
      <div className="chat-inside-container-up">
        <div className="chatHeader">
          <img className="topicImg" src={(currentConversation.topic && currentConversation.topic.icon) || "http://s16.postimg.org/ete1l89z5/img5.jpg"} alt="" />
          <h4 className="name">{currentConversation.user.name}</h4>
          <h4 className="chatSubHeader">{messages.length}</h4>
        </div>
        <hr className="custom-line-chats" />
        <button onClick={contentChanged} className="btn-back-chat">BACK</button>
      </div>
      <div className="chat-inside-container">
        <div className="container-chat">
          <div className="left">
            <ul className="chat">
              {messages.map((item) => {
                <div key={item.id}>
                  <MessageListItem message={item} />
                </div>
              })}
            </ul>
          </div>
        </div>
        <MessageComposer />
      </div>
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
    actions: bindActionCreators(contentActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
