import React, {PropTypes} from 'react';
import Map from '../common/Map';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/targetActions';

export const GoogleMapContainer = (props) => {
  // TODO: JG: center is hardcoded, must use html5 geolocalization to set center
  const location = {
    lat: -34.906501,
    lng: -56.185295
  };

  let filtered = props.targets.filter(obj => {return obj.isVisible;});
  let index = props.targets.length - 1;

  let freeTarget = props.targets.find(el => {
    return el.isActive === false;
  });

  if (freeTarget === undefined) {
    freeTarget = {
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
    <div className="map">
      <Map center={location} markers={filtered} updateTargetInfo={props.actions.updateTarget} newTarget={freeTarget} index={index}/>
    </div>
  );
};

GoogleMapContainer.propTypes = {
  targets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    targets: state.targets
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
)(GoogleMapContainer);
