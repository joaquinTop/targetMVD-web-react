import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../common/Header';
import MessageListItem from '../common/MessageListItem';
import * as messagesActions from '../../actions/messagesActions';
import * as currentConversationActions from '../../actions/currentConversationActions';
import * as contentActions from '../../actions/contentActions';

export const Chat = (props) => {

  const contentChanged = () => {
    props.actions.switchContent("Home");
  };
  
  const messagesAux = [{text:"Hola!, a donde quieres viajar?", id:1, itsme:true}, {text:"Estoy buscando companero de viaje", id:2, itsme:false}, {text:"I was wondering...", id:3, itsme:true},
                      {text:"Hola!, a donde quieres viajar?", id:4, itsme:false}, {text:"Estoy buscando companero de viaje", id:5, itsme:true}, {text:"I was wondering...", id:6, itsme:false}];

  return (
    <div className="chat-sidebar-container">
      <Header title={"CHAT"} style="sidebarHeader" withBackButton />

      <div className="chat-inside-container-up">
        <div className="chatHeader">
          <img className="topicImg" src={"http://s16.postimg.org/ete1l89z5/img5.jpg"} alt="" />
          <h4 className="name">{props.currentConversation.user.name}</h4>
          <h4 className="chatSubHeader">{props.messages.length}</h4>
        </div>
        <hr className="custom-line-chats" />
        <button onClick={contentChanged} className="btn-back-chat">BACK</button>
      </div>

      <div className="chat-inside-container">
        <div className="container-chat">
          <div className="left">
            <ul className="chat">
              {messagesAux.map((item) => {
                return(
                  <div key={item.id}>
                    <MessageListItem message={item} />
                  </div>)
              })}
            </ul>
          </div>
        </div>

        <div className="write">
          <input type="text" />
        </div>
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
    actions: bindActionCreators(Object.assign({}, messagesActions, currentConversationActions, contentActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
