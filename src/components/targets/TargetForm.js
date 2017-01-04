import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import TextInput from '../common/TextInput';
import Topics from '../../res/topics';
import smilies from '../../res/images/common/smilies.png';
import Dropdown from 'react-dropdown'

class TargetForm extends React.Component{
  constructor(props, context){
    super(props, context);

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onTopicChange = this.onTopicChange.bind(this);
    this.onTargetSubmit = this.onTargetSubmit.bind(this);
    this.getTopicIndex = this.getTopicIndex.bind(this);
  }

  onFieldChange(fieldName, value) {
    this.props.updateTargetInfo(fieldName, value);
  }

  onTopicChange(option) {
    console.log('You selected ', option.label);
    this.props.updateTargetInfo("topic", option.label);
  }

  getTopicIndex(name){
    switch (name) {
      case 'Football':
        return 1;
      case 'Travel':
        return 2;
      case 'Politics':
        return 3;
      case 'Art':
        return 4;
      case 'Dating':
        return 5;
      case 'Music':
        return 6;
      case 'Movies':
        return 7;
      case 'Series':
        return 8;
      case 'Food':
        return 9;
      default:
        return 0;

    }
  }

  onTargetSubmit(e){
    e.preventDefault();
    if (!this.props.enabled) {
      this.props.createAlertAction("SideBarContainer", "Max of 10 targets reached", "error");
      return;
    }

    let targetJson = {
      target:
      {
        lat: this.props.currentTarget.lat,
        lng:  this.props.currentTarget.lng,
        radius: this.props.currentTarget.radius,
        topic: this.getTopicIndex(this.props.currentTarget.topic)
      }
    };

    this.props.createTargetAction(targetJson);
    this.redirect();
  }

  redirect(){
    browserHistory.push('/home');
  }

  render(){
    const defaultOption = this.props.currentTarget.topic;
    const topicPlaceholder = (this.props.currentTarget.topic !== '' ? this.props.currentTarget.topic:"What do you want to talk about?");
    // const opts = {};
    // if (!this.props.enabled) {
    //   opts['disabled'] = 'disabled';
    // }
    return (
      <div className="target-form-container">
        <form>
          <label className="target-area-field" htmlFor="areaLength">SPECIFY AREA LENGTH</label><br/>
          <TextInput id="areaLength" onChange={this.onFieldChange} style="custom-target-input" name="radius" areaLength={"number"} value={this.props.currentTarget.radius} required={"true"} autofocus={"true"}></TextInput><br/>
          <label className="target-form-field" htmlFor="targetTitle">TARGET TITLE</label><br/>
          <TextInput id="targetTitle" onChange={this.onFieldChange} style="custom-target-input" name="title" type={"text"} value={this.props.currentTarget.title} required={"true"}></TextInput><br/>
          <label className="target-form-field">SELECT A TOPIC</label><br/>
          <Dropdown options={Topics} onChange={this.onTopicChange} value={defaultOption} placeholder={topicPlaceholder} />
          <input className="btn-save-target" type="submit" value="SAVE TARGET" onClick={this.onTargetSubmit}></input><br/>
          <img className="smilies-img-sidebar" src={smilies}></img>
        </form>
      </div>
    );
  }
}

TargetForm.propTypes = {
  enabled:PropTypes.bool.isRequired,
  updateTargetInfo:PropTypes.func.isRequired,
  createTargetAction:PropTypes.func.isRequired,
  currentTarget:PropTypes.object.isRequired,
  createAlertAction:PropTypes.func.isRequired
};

export default TargetForm;
