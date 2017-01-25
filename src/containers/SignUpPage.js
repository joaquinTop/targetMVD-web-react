import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
import SignUpForm from '../components/signup/SignUpForm';
import LandingRightSide from '../components/common/LandingRightSide';
import { getUser } from '../utils/SessionHelper';

export const SignUpPage = (props) => {

  const user = getUser();

  if (user) {
    const {signIn, signInWithFB} = props.actions;
    user.facebook ? signInWithFB(user.user, false): signIn(user.user);
  }

  if (props.session.isLoggedIn) {
    browserHistory.push('/home');
    return null;
  }

  return (
    <div>
      <SignUpForm signUpAction={props.actions.signUp} style="column-half-media"/>
      <LandingRightSide/>
    </div>

  );
};

SignUpPage.propTypes = {
  actions: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};

const mapStateToProps = ({ session }) => {
  return { session };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
