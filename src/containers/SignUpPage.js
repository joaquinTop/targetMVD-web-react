import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
import SignUpForm from '../components/signup/SignUpForm';
import LandingRightSide from '../components/common/LandingRightSide';
import MediaQuery from 'react-responsive';

export const SignUpPage = (props) => {

  if (props.session.isLoggedIn) {
    browserHistory.push('/home');
    return null;
  }

  return (
    <div>
      <MediaQuery query="(min-width: 1224px)">
        <SignUpForm signUpAction={props.actions.signUp} style="column-half"/>
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <SignUpForm signUpAction={props.actions.signUp} style="none"/>
      </MediaQuery>
      <LandingRightSide/>
    </div>

  );
};

SignUpPage.propTypes = {
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
)(SignUpPage);
