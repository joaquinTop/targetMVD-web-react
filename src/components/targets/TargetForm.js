import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import TextInput from '../common/TextInput';
import Topics from '../../res/topics';
import CustomAlert from '../../utils/uiHelper/CustomAlert';

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

  showAlert(text, type){
    CustomAlert.showAlert(text, type);
  }

  render(){
    return (
      <div className="target-form-container">
        <CustomAlert/>
        <form>
          <label className="target-area-field" htmlFor="areaLength">SPECIFY AREA LENGTH</label><br/>
          <TextInput id="areaLength" onChange={this.onFieldChange} name="radius" areaLength={"number"} value={this.props.currentTarget.radius} required={"true"} autofocus={"true"}></TextInput><br/>
          <label className="target-form-field" htmlFor="targetTitle">TARGET TITLE</label><br/>
          <TextInput id="targetTitle" onChange={this.onFieldChange} name="title" type={"text"} value={this.props.currentTarget.title} required={"true"}></TextInput><br/>
          <label className="target-form-field">SELECT A TOPIC</label><br/>
          <ul className="common-list">
            <li><div className="target-form-firstItem">What do you want to talk about?</div></li>
            {Topics.map((option) =>{
              return <li className="clickableListItem" onClick={this.onTopicChange}><div className="target-form-listItem"><a>{option}</a></div></li>;
            })
            }
          </ul>
          <input className="btn-save-target" type="submit" value="SAVE TARGET" onClick={this.onTargetSubmit}></input><br/>
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
