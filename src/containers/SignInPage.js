import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
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

  return (
    <div>
      <MediaQuery query="(min-width: 1224px)">
        <SignInForm signInAction={props.actions.signIn} style="column-half"/>
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <SignInForm signInAction={props.actions.signIn} style="none"/>
      </MediaQuery>
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
