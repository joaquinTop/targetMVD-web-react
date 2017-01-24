import React, {PropTypes} from 'react';
import * as C from '../../res/strings/strings-en';
import imgCount from '../../res/images/common/yellow-circle.png';
export const ConversationsComponent = ({ converastions }) => {

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
        <hr className="custom-line-chats" />
        <ul className="people">
          {converastions.map((item) => {
            return (
              <div>
                <li className="person" key={item.match_id}>
                <img className="img-user" src="http://s13.postimg.org/ih41k9tqr/img1.jpg" alt="" />
                <span className="name">{item.user.name}</span>
                <span className="preview">¡Hola! A dónde querés viajar?</span>
                <img className="img-topic" src={item.topic.icon || "http://s16.postimg.org/ete1l89z5/img5.jpg"} alt="" />
                <img className="img-count-unread" src={imgCount} alt="" />
                </li>
                <hr className="custom-line-chats" />
              </div>);
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
