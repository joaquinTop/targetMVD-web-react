import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import GoogleMap from '../components/home/GoogleMapContainer';
import SideBar from '../components/home/SideBarContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as targetActions from '../actions/targetActions';
import * as newTargetActions from '../actions/newTargetActions';

export const HomePage = (props) => {

  if (props.session.isLoggedIn === false) {
    browserHistory.push('/sign-in');

    return null;
  }else{
    props.actions.resetFreeTarget();
    props.actions.loadTargets();

    return (
      <div className="outer">
        <SideBar className="sidebar" />
        <GoogleMap />
      </div>
    );
  }
};

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};

const mapStateToProps = ({ session }) => {
  return {
    session
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(Object.assign({}, targetActions, newTargetActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
