import React from 'react';
import AlertContainer from 'react-alert';
import * as constants from '../../constants/constants';

export default class CustomAlert extends React.Component {
  constructor(props){
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  static showAlert(text, type){
    global.msg.show(text, {
      time: constants.ALERT_TIME,
      type: type
    });
  }

  render(){
    return(
      <div>
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}
