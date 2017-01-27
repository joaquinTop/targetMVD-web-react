import React, {PropTypes} from 'react';
import Map from '../common/Map';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newTargetActions from '../../actions/newTargetActions';

export const GoogleMapContainer = ({ targets, actions, newTarget, topics}) => {
  const location = {
    lat: -34.906498,
    lng: -56.185258
  };

  let markers = targets;
  return (
    <div className="map">
      <Map
        center={location}
        markers={markers}
        updateTargetInfo={actions.updateFreeTarget}
        newTarget={newTarget}
        topicsList={topics}
        />
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
