import React, { PropTypes } from 'react';
import * as C from '../../constants/constants';

class MessageComposer extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      text: ''
    };
  }

  handleSubmit(event) {
    const textContent = event.target.value.trim();
    if (event.which === C.SUBMIT_KEY) {
      event.preventDefault();
      const newMessage = {
        message:
        {
          text: textContent
        }
      };
      this.setState({ text: '' });
      this.props.sendMessageAction(newMessage, this.props.matchId);
    }
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="write">
        <input
          type="text"
          autoFocus="true"
          placeholder="Type here to chat!"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }
}

MessageComposer.propTypes = {
  sendMessageAction: PropTypes.func.isRequired,
  matchId: PropTypes.number.isRequired
};

export default MessageComposer;
