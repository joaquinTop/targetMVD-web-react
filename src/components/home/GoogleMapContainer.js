import React, {PropTypes} from 'react';
import Map from '../common/Map';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newTargetActions from '../../actions/newTargetActions';

export const GoogleMapContainer = (props) => {
  // TODO: JG: center is hardcoded, must use html5 geolocalization to set center
  const location = {
    lat: -34.906501,
    lng: -56.185295
  };

  let markers = props.targets;
  if (props.newTarget.isVisible) {
    markers.push(props.newTarget);
  }
  return (
    <div className="map">
      <Map center={location} markers={markers} updateTargetInfo={props.actions.updateFreeTarget} newTarget={props.newTarget}/>
    </div>
  );
};

GoogleMapContainer.propTypes = {
  targets: PropTypes.array.isRequired,
  newTarget: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    targets: state.targets,
    newTarget: state.newTarget
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newTargetActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapContainer);
