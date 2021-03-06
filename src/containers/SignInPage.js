import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
import * as alertActions from '../actions/alertActions';
import CustomAlert from '../utils/uiHelper/CustomAlert';
import { ALERT_GOALS } from '../enums/enums'
import SignInForm from '../components/signin/SignInForm';
import LandingRightSide from '../components/common/LandingRightSide';
import { getUser } from '../utils/LocalStorageHelper';

export const SignInPage = (props) => {

  const user = getUser();

  if (user) {
    const { signIn, signInWithFB } = props.actions;
    user.facebook ? signInWithFB(user.user, false) : signIn(user.user);
  }

  if (props.session.isLoggedIn) {
    browserHistory.push('/home');
    return null;
  }

  if (props.alert.goal === ALERT_GOALS.SignInPage) {
    CustomAlert.showAlert(props.alert.text, props.alert.alertType);
    props.actions.deleteAlert();
  }

  return (
    <div>
      <CustomAlert/>
      <SignInForm
        signInAction={props.actions.signIn}
        signInWithFBAction={props.actions.signInWithFB}
        style="column-half-media"
      />
      <LandingRightSide/>
    </div>
  );
};

SignInPage.propTypes = {
  actions: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired
};

const mapStateToProps = ({ session, alert }) => {
  return {
    session,
    alert
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, sessionActions, alertActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
