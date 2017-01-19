import React, {PropTypes} from 'react';
import * as C from '../../res/strings/strings-en';
import imgCount from '../../res/images/common/yellow-circle.png';
// IDEA: http://www.bypeople.com/sliding-css-chat-bubbles/ nice page
export const ConversationsComponent = (props) => {

  const matchesCount = props.converastions.length;
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
        <h1>{ matchesCount }</h1>
        <hr className="custom-line-chats" />
        <ul className="people">
          {props.converastions.map((item) => {
            return (<li className="person" key={item.match_id}>
              <img className="img-user" src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
              <span className="name">{item.user.name}</span>
              <span className="preview">howdoyoudoaspace</span>
              <img className="img-topic" src="http://s16.postimg.org/ete1l89z5/img5.jpg" alt="" />
              <img className="img-count-unread" src={imgCount} alt="" />
            </li>);
          })}
        </ul>
      </div>
    );
  }
};

ConversationsComponent.propTypes = {
  converastions: PropTypes.array.isRequired
};

export default ConversationsComponent;
