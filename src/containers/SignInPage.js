import React, {PropTypes} from 'react';
// import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
import SignInForm from '../components/signin/SignInForm';
import LandingRightSide from '../components/common/LandingRightSide';
import cookie from 'react-cookie';
// import userClient from '../client/UsersServerClient';
// import targetClient from '../client/TargetsServerClient';

export const SignInPage = (props) => {
  const user = cookie.load('user');
  if (user) {
    props.actions.signIn(user);
    // userClient.signIn(user).then(data => {
    //   targetClient.setUserInfo(data.token, data.user_id);
    //   props.actions.updateSessionInformation(props.session, "user_id", data.user_id);
    //   props.actions.updateSessionInformation(props.session, "user_token", data.token);
    //   props.actions.updateSessionInformation(props.session, "isLoggedIn", true);
    //   browserHistory.push('/home');
    //   return null;
    // }).catch(error => {
    //   console.log(error);
    // });
  }
  if (props.session.isLoggedIn == true) {
    browserHistory.push('/home');
    return null;
  }

  return (
    <div>
      <SignInForm
      updateSession={props.actions.updateSessionInformation}
      session={props.session}
      signInAction={props.actions.signIn}
      />
      <LandingRightSide/>
    </div>
  );
};

SignInPage.propTypes = {
  actions: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
