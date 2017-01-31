import React, {PropTypes} from 'react';
import { isMyMessage } from '../../utils/uiHelper/ChatHelper';

const MessageListItem = ({ message }) => {

  if (isMyMessage(message)) {
    return (
      <div className="bubbleme">
        {message.text}
      </div>
    );
  }

  return (
    <div className="bubbleyou">
      {message.text}
    </div>
  );
};

MessageListItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageListItem;
