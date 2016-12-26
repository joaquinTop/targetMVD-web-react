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
import targetIcon from '../../res/images/png/targetIcon.png';

export const SideBarContainer = (props) => {

  let logOut = () => {
    props.actions.signOut();
    browserHistory.push('/sign-in');
  }

  let formEnabled = true;
  if (!props.newTarget.isActive) {
    formEnabled = false;
  }

  return (
    <div className="sidebar">
      <Header title = {"CREATE TARGET"} style = "sidebarHeader"></Header>
      <img className="target-icon" src={targetIcon}></img><br/>
      <SubHeader title = {"CREATE NEW TARGET"}></SubHeader>
      <TargetForm
      enabled={formEnabled}
      updateTargetInfo={props.actions.updateFreeTarget}
      currentTarget={props.newTarget}
      createTargetAction={props.actions.createTarget}>
      </TargetForm>
      {/* resetFreeTarget={props.actions.resetFreeTarget} */}
      <img className="smilies-img-sidebar" src={smilies}></img><br/>
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
