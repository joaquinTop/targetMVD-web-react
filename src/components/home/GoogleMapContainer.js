import React, {PropTypes} from 'react';
import Map from '../common/Map';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newTargetActions from '../../actions/newTargetActions';

export const GoogleMapContainer = (props) => {
  const location = {
    lat: -34.906498,
    lng: -56.185258
  };

  let markers = props.targets;
  return (
    <div className="map">
      <Map center={location} markers={markers} updateTargetInfo={props.actions.updateFreeTarget} newTarget={props.newTarget} topicsList={props.topics} />
    </div>
  );
};

GoogleMapContainer.propTypes = {
  targets: PropTypes.array.isRequired,
  topics: PropTypes.array.isRequired,
  newTarget: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ targets, newTarget, topics }) => {
  return {
    targets,
    newTarget,
    topics
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(newTargetActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapContainer);
