import React, { Component, PropTypes} from 'react';
import * as C from '../../res/strings/strings-en';
import { CONTENTS } from '../../enums/enums'
import imgCount from '../../res/images/common/yellow-circle.png';

class ConversationsComponent extends Component{
  constructor(props, context){
    super(props, context);
  }

  conversationSelected = (match) => {
    const { getMessagesAction, updateCurrentConversationAction, switchContent } = this.props;
    getMessagesAction(match.match_id);
    updateCurrentConversationAction(match);
    switchContent(CONTENTS.Chat);
  };

  render() {
    const { conversations } = this.props;
    const matchesCount = conversations ? conversations.length : 0;
    if (matchesCount === 0) {
      return (
        <h3 className="noTargets">{ C.TEXT_NO_TARGETS_YET }</h3>
      );
    } else {
      return (
        <div className="conversations-container">
          <h4 className="home-chat">Chat</h4>
          <ul className="people">
            <hr className="custom-line-chats" />
            {conversations.map((item) => {
              return (
                <div key={item.match_id}>
                  <li className="person" onClick={this.conversationSelected.bind(this, item)}>
                    <img className="img-user" src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                    <span className="name">{item.user.name}</span>
                    <span className="preview">{item.last_message.text || "Start conversation"}</span>
                    <img className="img-topic" src={(item.topic && item.topic.icon) || "http://s16.postimg.org/ete1l89z5/img5.jpg"} alt="" />
                    <img className="img-count-unread" src={imgCount} alt="" />
                  </li>
                  <hr className="custom-line-chats" />
                </div>);
            })}
          </ul>
        </div>
      );
    }
  }
}

ConversationsComponent.propTypes = {
  conversations: PropTypes.array.isRequired,
  updateCurrentConversationAction: PropTypes.func.isRequired,
  switchContent: PropTypes.func.isRequired,
  getMessagesAction: PropTypes.func.isRequired
};

export default ConversationsComponent;
