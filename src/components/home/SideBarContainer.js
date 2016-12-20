import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as targetActions from '../../actions/targetActions';
import * as newTargetActions from '../../actions/newTargetActions';
import * as sessionActions from '../../actions/sessionActions';
import Header from '../common/Header';
import SubHeader from '../common/SubHeader';
import TargetForm from '../targets/TargetForm'

export const SideBarContainer = (props) => {

  let logOut = () => {
    props.actions.signOut(props.session.user_token);
    browserHistory.push('/sign-in');
  }

  return (
    <div className="sidebar">
      <Header title = {"CREATE TARGET"} style = "sidebarHeader"></Header>
      <SubHeader title = {"CREATE NEW TARGET"} style = "sidebarSubHeader"></SubHeader>
      <TargetForm
      updateTargetInfo={props.actions.updateFreeTarget}
      currentTarget={props.newTarget}
      resetFreeTarget={props.actions.resetFreeTarget}
      // updateTargetList={props.actions.createTarget}
      createTargetAction={props.actions.createTarget}>
        {/*  targets = {props.targets}
          currentTarget={currentTarget}
        index={index}> */}
      </TargetForm>
      <button onClick={logOut} type="button" className="btn btn-danger btn-sign-out">Sign out</button>
    </div>
    );
};

SideBarContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  newTarget: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    newTarget: state.newTarget,
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, targetActions, newTargetActions, sessionActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
