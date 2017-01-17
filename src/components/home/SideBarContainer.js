import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as targetActions from '../../actions/targetActions';
import * as newTargetActions from '../../actions/newTargetActions';
import * as sessionActions from '../../actions/sessionActions';
import * as alertActions from '../../actions/alertActions';
import * as contentActions from '../../actions/contentActions';
import CustomAlert from '../../utils/uiHelper/CustomAlert';
import Header from '../common/Header';
import SubHeader from '../common/SubHeader';
import TargetForm from '../targets/TargetForm';
import targetIcon from '../../res/images/common/targetIcon.png';
import HomeWelcome from '../common/HomeWelcome';
import Home from '../contents/Home';

export const SideBarContainer = (props) => {

  if (props.alert.goal === "SideBarContainer") {
    CustomAlert.showAlert(props.alert.text, props.alert.alertType);
    props.actions.deleteAlert();
  }

  if (!props.session.firstTime && props.content === "HomeWelcome") {
      props.actions.switchContent("TargetForm");
  }

  switch (props.content) {
    case "HomeWelcome":
    return (
      <div className="sidebar">
        <CustomAlert />
        <HomeWelcome switchContentAction={props.actions.switchContent} />
      </div>
      );

    case "TargetForm":{
      const logOut = () => {
        props.actions.signOut();
        browserHistory.push('/sign-in');
      };

      let formEnabled = true;
      if (!props.newTarget.isActive) {
        formEnabled = false;
      }

      return (
        <div className="sidebar">
          <CustomAlert />
          <Header title={"CREATE TARGET"} style="sidebarHeader" />
            <img className="target-icon" src={targetIcon} />
            <br />
            <SubHeader title={"CREATE NEW TARGET"} />
            <TargetForm
            enabled={formEnabled}
            updateTargetInfo={props.actions.updateFreeTarget}
            currentTarget={props.newTarget}
            createTargetAction={props.actions.createTarget}
            createAlertAction={props.actions.createAlert}
            topicsList={props.topics}
            />
          <button onClick={logOut} type="button" className="btn btn-danger btn-sign-out">Sign out</button>
        </div>
      );
    }

    case "Home":
      return (
        <div className="sidebar">
          <CustomAlert />
          <Home  />
        </div>
        );
    default:
      return null;

  }
};

SideBarContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  newTarget: PropTypes.object.isRequired,
  topics: PropTypes.array.isRequired,
  session: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired
};

const mapStateToProps = ({ newTarget, session, alert, topics, content }) => {
  return {
    newTarget,
    session,
    alert,
    topics,
    content
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, targetActions, newTargetActions, sessionActions, alertActions, contentActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
