import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as targetActions from '../../actions/targetActions';
import * as newTargetActions from '../../actions/newTargetActions';
import * as selectedTargetActions from '../../actions/selectedTargetActions';
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
import pushwooshService from '../../service/PushService';
import { getToken } from '../../utils/LocalStorageHelper';

export const SideBarContainer = (props) => {

  if (props.alert.goal === "SideBarContainer") {
    CustomAlert.showAlert(props.alert.text, props.alert.alertType);
    props.actions.deleteAlert();
  }
  if (!props.session.firstTime && props.content === "HomeWelcome") {
      props.actions.switchContent("TargetForm");
  }

  if (props.session.firstTime) {

    // Pushwoosh
    pushwooshService.initFirebase();
    pushwooshService.initPushwoosh();
    const pushToken = getToken();
    const { user_id } = props.session;
    const { setPushToken } = props.actions;
    pushToken ? setPushToken(pushToken, user_id) : pushwooshService.registerDevice(setPushToken, user_id);

    // Pusher
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
          <Header
            title={props.selectedTarget ? "EDIT TARGET" : "CREATE TARGET"}
            style="sidebarHeader"
            withBackButton={false}
          />
          <br />
          <div className="sidebar">
            <img className="target-icon" src={targetIcon} />
            <br />
            {!props.selectedTarget && <SubHeader title={"CREATE NEW TARGET"} />}
            <TargetForm
              enabled={formEnabled}
              updateTargetInfo={props.selectedTarget ? props.actions.updateSelectedTargetField : props.actions.updateFreeTarget}
              currentTarget={props.selectedTarget || props.newTarget}
              createTargetAction={props.actions.createTarget}
              updateTargetAction={props.actions.updateTarget}
              deleteTargetAction={props.actions.deleteTarget}
              createAlertAction={props.actions.createAlert}
              topicsList={props.topics}
              formMode={props.selectedTarget ? "Edit" : "New"}
            />
            <button onClick={contentChanged} className="btn-matches">MATCHES</button>
            <br />
          </div>
        </div>
      );
    }

    case "Home":{
      const logOut = () => {
        pushwooshService.unregisterDevice();
        props.actions.signOut();
        browserHistory.push('/sign-in');
      };
      return (
        <div className="sidebarContainer">
          <CustomAlert />
          <Home switchContentAction={props.actions.switchContent} beginLogout={logOut} />
        </div>
        );
    }

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
  content: PropTypes.string.isRequired,
  selectedTarget: PropTypes.object.isRequired
};

const mapStateToProps = ({ newTarget, session, alert, topics, content, selectedTarget }) => {
  return {
    newTarget,
    session,
    alert,
    topics,
    content,
    selectedTarget
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, targetActions, newTargetActions, selectedTargetActions,
       sessionActions, alertActions, contentActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
