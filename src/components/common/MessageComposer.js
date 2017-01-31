import React, { PropTypes } from 'react';

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
    const text = event.target.value.trim();
    if (event.which === 13) {
      debugger;
      event.preventDefault();
      // const newMessage = {
      //   text: text
      // };
      // this.props.onSave(newMessage); HERE Should go action to create msg
      this.setState({ text: '' });
    }
  }

  handleChange(event) {
    debugger;
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
  createMessageAction: PropTypes.func.isRequired
};

export default MessageComposer;
