import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
import * as alertActions from '../actions/alertActions';
import CustomAlert from '../utils/uiHelper/CustomAlert';
import SignInForm from '../components/signin/SignInForm';
import LandingRightSide from '../components/common/LandingRightSide';
import { getUser } from '../utils/sessionHelper'
import MediaQuery from 'react-responsive';

export const SignInPage = (props) => {
  const user = getUser();

  if (user) {
    props.actions.signIn(user);
  }

  if (props.session.isLoggedIn) {
    browserHistory.push('/home');
    return null;
  }

  if (props.alert.goal === "SignInPage") {
    CustomAlert.showAlert(props.alert.text, props.alert.alertType);
    props.actions.deleteAlert();
  }

  return (
    <div>
      <CustomAlert/>
      <MediaQuery query="(min-width: 1224px)">
        <SignInForm signInAction={props.actions.signIn} signInWithFBAction={props.actions.signInWithFB} style="column-half"/>
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <SignInForm signInAction={props.actions.signIn} signInWithFBAction={props.actions.signInWithFB} style="none"/>
      </MediaQuery>
      <LandingRightSide/>
    </div>
  );
};

SignInPage.propTypes = {
  actions: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    session: state.session,
    alert: state.alert
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, sessionActions, alertActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
