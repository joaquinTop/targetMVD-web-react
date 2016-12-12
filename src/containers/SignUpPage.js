import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions';
import SignUpForm from '../components/signup/SignUpForm';
import LandingRightSide from '../components/common/LandingRightSide';

export const SignUpPage = (props) => {
  return (
    <div>
      <SignUpForm
      updateUserInfo={props.actions.updateUserInfo}
      user={props.user}/>
      <LandingRightSide/>
    </div>
  );
};

SignUpPage.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
