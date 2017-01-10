import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import TextInput from '../common/TextInput';
import smilies from '../../res/images/common/smilies.png';
import Dropdown from 'react-dropdown';
import { getTopicId } from '../../utils/TopicsHelper';

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
    let index = getTopicId(option.label, this.props.topicsList);
    this.props.updateTargetInfo("topic", index);
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
        topic_id: this.props.currentTarget.topic
      }
    };
    this.props.createTargetAction(targetJson);
    this.redirect();
  }

  redirect(){
    browserHistory.push('/home');
  }

  render(){
    const defaultOption = this.props.currentTarget.topic.label;
    const topicPlaceholder = defaultOption || 'What do you want to talk about?';
    const topicsName = this.props.topicsList.map(el => {
      return el.label;
    });

    return (
      <div className="target-form-container">
        <form>
          <label className="target-area-field" htmlFor="areaLength">SPECIFY AREA LENGTH</label><br/>
          <TextInput
            id="areaLength"
            onChange={this.onFieldChange}
            style="custom-target-input"
            name="radius"
            areaLength={"number"}
            value={this.props.currentTarget.radius}
            required={"true"}
            autofocus={"true"}
          />
          <br />
          <label className="target-form-field" htmlFor="targetTitle">TARGET TITLE</label><br/>
          <TextInput
            id="targetTitle"
            onChange={this.onFieldChange}
            style="custom-target-input"
            name="title"
            type={"text"}
            value={this.props.currentTarget.title}
            required={"true"}
          />
          <br />
          <label className="target-form-field">SELECT A TOPIC</label><br/>
          <Dropdown
            options={Topics}
            onChange={this.onTopicChange}
            value={defaultOption}
            placeholder={topicPlaceholder}
          />
          <input
            className="btn-save-target"
            type="submit"
            value="SAVE TARGET"
            onClick={this.onTargetSubmit}
          /><br/>
          <img className="smilies-img-sidebar" src={smilies} alt="Smiley faces" />
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
  createAlertAction:PropTypes.func.isRequired,
  topicsList:PropTypes.array.isRequired
};

export default TargetForm;
