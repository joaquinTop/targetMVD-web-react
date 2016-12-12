import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import GoogleMap from '../components/home/GoogleMapContainer';
import SideBar from '../components/home/SideBarContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as targetActions from '../actions/targetActions';
import targetClient from '../client/TargetsServerClient';

export const HomePage = (props) => {
  if (props.session.isLoggedIn === false) {
    browserHistory.push('/sign-in');
    return null;
  }else{
    props.actions.resetTargets();
    targetClient.getMyTargets().then(data => {
      let targets = data.targets.map(el => {
        return {
          id: el.id,
          title: el.title || "",
          lat: el.latitude,
          lng: el.longitude,
          radius: el.radius,
          topic: el.topic,
          isVisible: true,
          isActive: true
        };
      });
      for (let target in targets) {
        props.actions.createTarget(targets[target]);
      }

      // TODO: JG: Check for availability MAX 10 TARGETS
      props.actions.createTarget(
        {
            id: 0,
            title:"",
            lat: 0,
            lng: 0,
            radius: 200,
            topic: 0,
            isVisible: false,
            isActive: false
        }
      );
    }).catch(error => {
      console.log(error);
    });

    return (
      <div className='outer'>
        <SideBar
          className="sidebar"/>
        <GoogleMap/>
      </div>
    );
  }

};

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    session:state.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(targetActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
