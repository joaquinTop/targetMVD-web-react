import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as targetActions from '../../actions/targetActions';
import * as sessionActions from '../../actions/sessionActions';
import Header from '../common/Header';
import SubHeader from '../common/SubHeader';
import TargetForm from '../targets/TargetForm'
import cookie from 'react-cookie';

export const SideBarContainer = (props) => {

  let index = props.targets.length - 1;
  let currentTarget = props.targets.find(el => {
    return el.isActive === false;
  });

  let logOut = () => {
    props.actions.updateSessionInformation(props.session, "isLoggedIn", false);
    cookie.remove('user', { path: '/' });
    browserHistory.push('/sign-in');
  }

  if (currentTarget === undefined) {
    currentTarget = {
        id: 0,
        title:"",
        lat: 0,
        lng: 0,
        radius: 200,
        topic: 0,
        isVisible: false,
        isActive: false
    };
    index += 1;
  }

  return (
    <div className="sidebar">
      <Header title = {"CREATE TARGET"} style = "sidebarHeader"></Header>
      <SubHeader title = {"CREATE NEW TARGET"} style = "sidebarSubHeader"></SubHeader>
      <TargetForm
        updateTargetInfo={props.actions.updateTarget}
        updateTargetList={props.actions.createTarget}
        targets = {props.targets}
        currentTarget={currentTarget}
        index={index}></TargetForm>
      <button onClick={logOut} type="button" className="btn btn-danger btn-sign-out">Sign out</button>
    </div>
    );
};

SideBarContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    targets: state.targets,
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, targetActions, sessionActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
