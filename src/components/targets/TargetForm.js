import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import TextInput from '../common/TextInput';
import Topics from '../../res/topics';

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

  onTopicChange(e) {
    this.props.updateTargetInfo("topic", e.target.textContent);
  }

  onTargetSubmit(e){
    e.preventDefault();
    let targetJson = {"target":
      {
        "lat": this.props.currentTarget.lat,
        "lng":  this.props.currentTarget.lng,
        "radius": this.props.currentTarget.radius,
        "topic": this.props.currentTarget.topic
      }
    };
    this.props.createTargetAction(targetJson);
    this.redirect();
  }

  redirect(){
    browserHistory.push('/home');
  }

  render(){
    return (
      <div>
        <form>
          <label for="areaLength">SPECIFY AREA LENGTH</label><br/>
          <TextInput id="areaLength" onChange={this.onFieldChange} name="radius" areaLength={"number"} value={this.props.currentTarget.radius} required={"true"} autofocus={"true"}></TextInput><br/>
          <label for="targetTitle">TARGET TITLE</label><br/>
          <TextInput id="targetTitle" onChange={this.onFieldChange} name="title" type={"text"} value={this.props.currentTarget.title} required={"true"}></TextInput><br/>
          <label>TOPIC</label><br/>
          <ul className="common-list">
            <li>What do you want to talk about?</li>
            {Topics.map((option) =>{
              return <li onClick={this.onTopicChange}><a>{option}</a></li>;
            })
            }
          </ul>
          <input type="submit" value="Save Target" onClick={this.onTargetSubmit}></input><br/>
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
