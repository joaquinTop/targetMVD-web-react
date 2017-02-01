import React, {PropTypes} from 'react';
import { isMyMessage } from '../../utils/uiHelper/ChatHelper';

const MessageListItem = ({ message }) => {

  return (
    <div className={isMyMessage(message) ? "bubbleme" : "bubbleyou"}>
      {message.text}
    </div>
  );
};

MessageListItem.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageListItem;
