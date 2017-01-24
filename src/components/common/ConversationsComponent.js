import React, {PropTypes} from 'react';
import * as C from '../../res/strings/strings-en';
import imgCount from '../../res/images/common/yellow-circle.png';

class ConversationsComponent extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  conversationSelected = (match) => {
    this.props.getMessagesAction(match.match_id);
    this.props.updateCurrentConversationAction(match)
    this.props.switchContent("Chat");
  };

  render(){
    const matchesCount = this.props.converastions.length;
    if (matchesCount === 0) {
      return (
        <div>
          <h3 className="noTargets">{ C.TEXT_NO_TARGETS_YET }</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h4 className="home-chat">Chat</h4>
          <hr className="custom-line-chats" />
          <ul className="people">
            {this.props.converastions.map((item) => {
              return (
                <div key={item.match_id}>
                  <li className="person" onClick={this.conversationSelected.bind(this, item)}>
                  <img className="img-user" src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                  <span className="name">{item.user.name}</span>
                  <span className="preview">¡Hola! A dónde querés viajar?</span>
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
  converastions: PropTypes.array.isRequired,
  updateCurrentConversationAction: PropTypes.func.isRequired,
  switchContent: PropTypes.func.isRequired,
  getMessagesAction: PropTypes.func.isRequired
};

export default ConversationsComponent;
