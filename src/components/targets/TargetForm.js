import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import { ALERT_GOALS, FORM_MODE } from '../../enums/enums'
import TextInput from '../common/TextInput';
import smilies from '../../res/images/common/smilies.png';
import Dropdown from 'react-dropdown';
import { getTopicId, getTopicName } from '../../utils/TopicsHelper';
import { validateTarget } from '../../utils/ValidationHelper';

class TargetForm extends React.Component{
  constructor(props, context){
    super(props, context);

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onTopicChange = this.onTopicChange.bind(this);
    this.onTargetSubmit = this.onTargetSubmit.bind(this);
    this.onTargetDelete = this.onTargetDelete.bind(this);
  }

  onFieldChange(fieldName, value) {
    let values = {};
    values[fieldName] = value;
    this.props.updateTargetInfo(values);
  }

  onTopicChange(option) {
    const { topicsList, updateTargetInfo } = this.props;
    const index = getTopicId(option.label, topicsList);
    updateTargetInfo({topic: index});
  }

  onTargetDelete(e){
    e.preventDefault();
    const { deleteTargetAction, currentTarget: { id } } = this.props;
    deleteTargetAction(id);
  }

  onTargetSubmit(e){
    e.preventDefault();

    const { enabled, formMode, currentTarget, createAlertAction, createTargetAction, updateTargetAction } = this.props;

    if (!enabled && formMode === FORM_MODE.New) {
      createAlertAction(ALERT_GOALS.SideBarContainer, "Max of 10 targets reached", "error");
      return;
    }

    const targetJson = {
      target:
      {
        lat: currentTarget.lat,
        lng:  currentTarget.lng,
        radius: currentTarget.radius,
        topic_id: currentTarget.topic.id || currentTarget.topic
      }
    };

    const error = validateTarget(targetJson.target);
    if (error) {
      createAlertAction(ALERT_GOALS.SideBarContainer, error, "error");
      return;
    }

    if (formMode === FORM_MODE.Edit) {
      updateTargetAction(targetJson, currentTarget.id);
      return;
    }

    createTargetAction(targetJson);
    this.redirect();
  }

  redirect(){
    browserHistory.push('/home');
  }

  render(){
    const { topicsList, currentTarget, formMode } = this.props;
    const defaultOption = currentTarget.topic.label ||
      getTopicName(currentTarget.topic, topicsList);

    const topicPlaceholder = defaultOption || 'What do you want to talk about?';
    const topicsName = topicsList.map(el => {
      return el.label;
    });

    return (
      <div className="target-form-container">
        <form>
          <label className="target-area-field" htmlFor="areaLength">SPECIFY AREA LENGTH</label>
          <br />
          <TextInput
            id="areaLength"
            onChange={this.onFieldChange}
            style="custom-target-input"
            name="radius"
            areaLength={"number"}
            value={currentTarget.radius}
            required={"true"}
            autofocus={"true"}
          />
          <br />
          <label className="target-form-field" htmlFor="targetTitle">TARGET TITLE</label>
          <br />
          <TextInput
            id="targetTitle"
            onChange={this.onFieldChange}
            style="custom-target-input"
            name="title"
            type={"text"}
            value={currentTarget.title}
            required={"true"}
          />
          <br />
          <label className="target-form-field">SELECT A TOPIC</label>
          <br />
          <Dropdown
            options={topicsName}
            onChange={this.onTopicChange}
            value={defaultOption}
            placeholder={topicPlaceholder}
          />
          <br />
          {formMode === FORM_MODE.Edit &&
            <input
              onClick={this.onTargetDelete}
              type="submit"
              value="DELETE TARGET"
              className="btn-delete-target"
            />
          }
          <input
            className="btn-save-target"
            type="submit"
            value={formMode === FORM_MODE.Edit ? "EDIT TARGET" : "SAVE TARGET"}
            onClick={this.onTargetSubmit}
          /><br />
          <img className="smilies-img-sidebar" src={smilies} alt="Smiley faces" />
        </form>
      </div>
    );
  }
}

TargetForm.propTypes = {
  enabled: PropTypes.bool.isRequired,
  formMode: PropTypes.string.isRequired,
  updateTargetInfo: PropTypes.func.isRequired,
  createTargetAction: PropTypes.func.isRequired,
  updateTargetAction: PropTypes.func.isRequired,
  deleteTargetAction: PropTypes.func.isRequired,
  currentTarget: PropTypes.object.isRequired,
  createAlertAction: PropTypes.func.isRequired,
  topicsList: PropTypes.array.isRequired
};

export default TargetForm;
