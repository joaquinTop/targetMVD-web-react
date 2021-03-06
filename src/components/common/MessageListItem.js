import React, {PropTypes} from 'react';

const MessageListItem = ({ message, itsMine }) => {
  return (
    <div className={itsMine ? "bubbleme" : "bubbleyou"}>
      {message.text}
    </div>
  );
};

MessageListItem.propTypes = {
  message: PropTypes.object.isRequired,
  itsMine: PropTypes.bool.isRequired
};

export default MessageListItem;
