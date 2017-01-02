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
  }

  onFieldChange(fieldName, value) {
    this.props.updateTargetInfo(fieldName, value);
  }

  onTopicChange(option) {
    console.log('You selected ', option.label);
    this.props.updateTargetInfo("topic", option.label);
  }

  onTargetSubmit(e){
    e.preventDefault();
    let targetJson = {"target":
      {
        "lat": this.props.currentTarget.lat,
        "lng":  this.props.currentTarget.lng,
        "radius": this.props.currentTarget.radius,
        "topic": this.props.currentTarget.topic.toLowerCase()
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
    const placeholder = (this.props.currentTarget.topic !== '' ? this.props.currentTarget.topic:"What do you want to talk about?");
    return (
      <div className="target-form-container">
        <form>
          <label className="target-area-field" htmlFor="areaLength">SPECIFY AREA LENGTH</label><br/>
          <TextInput id="areaLength" onChange={this.onFieldChange} style="custom-target-input" name="radius" areaLength={"number"} value={this.props.currentTarget.radius} required={"true"} autofocus={"true"}></TextInput><br/>
          <label className="target-form-field" htmlFor="targetTitle">TARGET TITLE</label><br/>
          <TextInput id="targetTitle" onChange={this.onFieldChange} style="custom-target-input" name="title" type={"text"} value={this.props.currentTarget.title} required={"true"}></TextInput><br/>
          <label className="target-form-field">SELECT A TOPIC</label><br/>
          <Dropdown options={Topics} onChange={this.onTopicChange} value={defaultOption} placeholder={placeholder} />
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
  currentTarget:PropTypes.object.isRequired
};

export default TargetForm;
