import React, {PropTypes} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import markerIcon from '../../res/images/targets/myPosition.png';
import * as constants from '../../constants/constants';
import { getTopicIcon } from '../../utils/TopicsHelper';

class Map extends React.Component {
  constructor(props, context){
    super(props, context);

    this.onMapClick = this.onMapClick.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.getMyPosition = this.getMyPosition.bind(this);
    this.state = {
      locationCenter: this.props.center
    };

    this.getMyPosition();
  }

  getMyPosition(){
    navigator.geolocation.getCurrentPosition(this.success, this.error, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    });
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
      const icon = getTopicIcon(venue.topic);
      let opts = {};
      if (icon !== '') {
        opts.icon = icon;
      }
      return <Marker {...opts} animation={constants.ANIMATION_DROP} key={venue.id} {...marker}/>;
    });

    if (markers.length > 0) {
      let myPosMarker = {
        position: {
          lat: this.state.locationCenter.lat,
          lng: this.state.locationCenter.lng
        }
      };
      markers.push( <Marker icon={markerIcon} animation={constants.ANIMATION_DROP} key={0} {...myPosMarker}/> );
    }

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
        </GoogleMap>
      } />
    );
  }
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired,
  updateTargetInfo: PropTypes.func.isRequired
};

export default Map;
