import React, {PropTypes} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import { getCircle, getMyPosition } from '../../utils/uiHelper/MapHelper';
import markerIcon from '../../res/images/targets/myPosition.png';
import * as constants from '../../constants/constants';
import { getTopicIcon } from '../../utils/TopicsHelper';

class Map extends React.Component {
  constructor(props, context){
    super(props, context);

    this.onMapClick = this.onMapClick.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.getOpts = this.getOpts.bind(this);
    this.state = {
      locationCenter: this.props.center
    };

    getMyPosition(this.success, this.error);
  }

  getOpts(venue){
    let icon = '';
    if (venue.topic !== null) {
      icon = venue.topic.icon || getTopicIcon(venue.topic, this.props.topicsList);
    }

    let opts = {};
    if (icon !== '') {
      opts['icon'] = {
        url: icon,
        origin: {
          x: 0,
          y: 0
        },
        anchor: {
          x: 16,
          y: 14
        },
        scaledSize: {
          height: 28,
          width: 28
        }
      };
    }
    return opts;
  }

  success(pos){
    const crd = pos.coords;
    let newState = Object.assign({}, this.state);
    newState.locationCenter.lat = parseFloat(crd.latitude.toFixed(6));
    newState.locationCenter.lng = parseFloat(crd.longitude.toFixed(6));
    this.setState(newState);
  }

  error(err){
    console.warn(`ERROR( ${err.code} ):  ${err.message}`);
  }

  onMapClick(e) {
    let lat = parseFloat(e.latLng.lat().toFixed(6));
    let lng = parseFloat(e.latLng.lng().toFixed(6));
    this.props.updateTargetInfo("lat", lat);
    this.props.updateTargetInfo("lng", lng);
    this.props.updateTargetInfo("isVisible", true);
  }

  render() {
    const mapContainer = <div style={{height:'100%', width:'100%'}}></div>;
    let markers = this.props.markers.map((venue) => {
      const marker = {
        position: {
          lat: venue.lat,
          lng: venue.lng
        }
      };
      const opts = this.getOpts(venue);
      return <Marker {...opts} animation={constants.ANIMATION_DROP} key={venue.id} {...marker}/>;
    });

    if (this.props.newTarget.isVisible) {
      const newTargetMarker = {
        position: {
          lat: this.props.newTarget.lat,
          lng: this.props.newTarget.lng
        }
      };

      const opts = this.getOpts(this.props.newTarget);
      markers.push( <Marker {...opts} animation={constants.ANIMATION_DROP} key={markers.length} {...newTargetMarker}/> );
    }

    if (markers.length > 0) {
      let myPosMarker = {
        position: {
          lat: this.state.locationCenter.lat,
          lng: this.state.locationCenter.lng
        }
      };
      markers.push( <Marker icon={markerIcon} animation={constants.ANIMATION_DROP} key={0} {...myPosMarker}/> );
    }

    let circles = this.props.markers.map((venue, i) => {
      console.log(i);
      return getCircle(venue.radius * 10, {
        lat: venue.lat,
        lng: venue.lng
      }, {
        fillColor: 'rgb(239, 197, 55)',
        fillOpacity: 0.70,
        strokeOpacity: 0
      });
    });

    let newTargetRadius = getCircle(this.props.newTarget.radius * 10, {
      lat: this.props.newTarget.lat,
      lng: this.props.newTarget.lng
    }, {
      fillColor: 'rgb(239, 197, 55)',
      fillOpacity: 0.70,
      strokeOpacity: 0
    });
    circles.push(newTargetRadius);

    let myPositionRadius = getCircle(
    200, {
      lat: this.state.locationCenter.lat,
      lng: this.state.locationCenter.lng
    }, {
      fillOpacity: 0,
      strokeColor: 'rgb(239, 197, 55)',
      strokeOpacity: 1,
      strokeWeight: 1
    });
    circles.push(myPositionRadius);

    return(
      <GoogleMapLoader
      containerElement={mapContainer}
      googleMapElement={
        <GoogleMap
        defaultZoom={15}
        onClick={this.onMapClick}
        center={this.state.locationCenter}
        options={{streetViewControl: false, mapTypeControl: false}}>
          { markers }
          { circles }
        </GoogleMap>
      } />
    );
  }
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired,
  updateTargetInfo: PropTypes.func.isRequired,
  topicsList:PropTypes.array.isRequired,
  newTarget:PropTypes.object.isRequired
};

export default Map;
