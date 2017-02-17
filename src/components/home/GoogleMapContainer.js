import React, {PropTypes} from 'react';
import Map from '../common/Map';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newTargetActions from '../../actions/newTargetActions';
import * as contentActions from '../../actions/contentActions';
import * as selectedTargetActions from '../../actions/selectedTargetActions';

export const GoogleMapContainer = ({ targets, actions, newTarget, topics, selectedTarget }) => {
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
        removeFreeTarget={actions.resetFreeTarget}
        selectTarget={actions.updateSelectedTarget}
        unselectTarget={actions.resetSelectedTarget}
        changeContent={actions.switchContent}
        targetSelected={selectedTarget}
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
  selectedTarget: PropTypes.object,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ targets, newTarget, selectedTarget, topics }) => {
  return {
    targets,
    newTarget,
    selectedTarget,
    topics
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, newTargetActions, selectedTargetActions, contentActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleMapContainer);
