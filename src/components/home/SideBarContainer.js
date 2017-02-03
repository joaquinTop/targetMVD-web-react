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
import Chat from '../contents/Chat';
import { setPusherClient } from 'react-pusher';
import Pusher from 'pusher-js';
import * as C from '../../constants/constants';

export const SideBarContainer = (props) => {

  if (props.alert.goal === "SideBarContainer") {
    CustomAlert.showAlert(props.alert.text, props.alert.alertType);
    props.actions.deleteAlert();
  }
  if (!props.session.firstTime && props.content === "HomeWelcome") {
      props.actions.switchContent("TargetForm");
  }

  if (props.session.firstTime) {
    const pusherClient = new Pusher(C.PUSHER_KEY, {
      app_id: C.PUSHER_APP_ID,
      secret: C.PUSHER_SECRET,
      encrypted: true
    });
    setPusherClient(pusherClient);
  }

  switch (props.content) {

    case "HomeWelcome":
      return (
        <div className="sidebarContainer">
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

      const contentChanged = () => {
        props.actions.switchContent("Home");
      };

      return (
        <div className="sidebarContainer">
          <CustomAlert />
          <Header title={"CREATE TARGET"} style="sidebarHeader" withBackButton={false} />
          <br />
          <div className="sidebar">
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
            <button onClick={contentChanged} className="btn-matches">MATCHES</button>
            <br />
            <button
              onClick={logOut}
              type="button"
              className="btn btn-danger btn-sign-out">Sign out</button>
          </div>
        </div>
      );
    }

    case "Home":
      return (
        <div className="sidebarContainer">
          <CustomAlert />
          <Home switchContentAction={props.actions.switchContent} />
        </div>
        );

    case "Chat":
      return (
        <div className="sidebarContainer">
          <CustomAlert />
          <Chat />
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
