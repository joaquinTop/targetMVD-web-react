import React, {PropTypes} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import { getCircle, getMyPosition } from '../../utils/uiHelper/MapHelper';
import markerIcon from '../../res/images/targets/myPosition.png';
import { getTopicIcon } from '../../utils/TopicsHelper';

class Map extends React.Component {
  constructor(props, context){
    super(props, context);

    this.onMapClick = this.onMapClick.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.getOpts = this.getOpts.bind(this);
    this.handleMapMounted = this.handleMapMounted.bind(this);
    this.handleCenterChanged = this.handleCenterChanged.bind(this);

    const myPosCoords = JSON.parse(localStorage.getItem('myPositionCoords'));
    if (!myPosCoords) {
      getMyPosition(this.success, this.error);
      this.state = {
        locationCenter: this.props.center
      };
    }else {
      this.state = {
        locationCenter: myPosCoords
      };
    }
  }

  handleMapMounted(map) {
    this._map = map;
  }

  handleCenterChanged() {
    const nextCenter = this._map.getCenter();
    let newState = Object.assign({}, this.state);
    newState.locationCenter.lat = parseFloat(nextCenter.lat().toFixed(6));
    newState.locationCenter.lng = parseFloat(nextCenter.lng().toFixed(6));
    if (newState.locationCenter.lat === this.state.locationCenter.lat &&
      newState.locationCenter.lng === this.state.locationCenter.lng) {
      return;
    }
    this.setState(newState);
  }

  getOpts(venue){
    let icon = '';
    if (venue.topic !== null) {
      icon = venue.topic.icon || getTopicIcon(venue.topic, this.props.topicsList);
    }

    let opts = {};
    if (icon !== '') {
      opts.icon = {
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
    localStorage.setItem('myPositionCoords', JSON.stringify(newState.locationCenter));
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
    const mapContainer = <div className="mapContainer" />;

    // TARGETS
    let markers = this.props.markers.map((venue) => {
      const marker = {
        position: {
          lat: venue.lat,
          lng: venue.lng
        }
      };
      const opts = this.getOpts(venue);
      return <Marker {...opts} key={venue.id} {...marker}/>;
    });

    // FREE TARGET
    if (this.props.newTarget.isVisible) {
      const newTargetMarker = {
        position: {
          lat: this.props.newTarget.lat,
          lng: this.props.newTarget.lng
        }
      };

      const opts = this.getOpts(this.props.newTarget);
      markers.push( <Marker {...opts} key={markers.length} {...newTargetMarker}/> );
    }

    // MY POSITION
    const myPosCoords = JSON.parse(localStorage.getItem('myPositionCoords'));
    if (markers.length > 0) {
      let myPosMarker;
      if (myPosCoords) {
        myPosMarker = {
          position: {
            lat: myPosCoords.lat,
            lng: myPosCoords.lng
          }
        };
      }else {
        myPosMarker = {
          position: {
            lat: this.props.center.lat,
            lng: this.props.center.lng
          }
        };
      }
      markers.push( <Marker icon={markerIcon} key={0} {...myPosMarker}/> );
    }

    // TARGETS RADIUS
    let circles = this.props.markers.map((venue) => {
      return getCircle(venue.radius * 10, {
        lat: venue.lat,
        lng: venue.lng
      }, {
        fillColor: 'rgb(239, 197, 55)',
        fillOpacity: 0.70,
        strokeOpacity: 0
      });
    });

    // FREE TARGET RADIUS
    let newTargetRadius = getCircle(this.props.newTarget.radius * 10, {
      lat: this.props.newTarget.lat,
      lng: this.props.newTarget.lng
    }, {
      fillColor: 'rgb(239, 197, 55)',
      fillOpacity: 0.70,
      strokeOpacity: 0
    });
    circles.push(newTargetRadius);

    // MY POSITION RADIUS
    let latitudeTest = this.props.center.lat;
    let longitudeTest = this.props.center.lng;
    if (myPosCoords) {
      latitudeTest = myPosCoords.lat;
      longitudeTest = myPosCoords.lng;
    }
    let myPositionRadius = getCircle(
    200, {
      lat: latitudeTest,
      lng: longitudeTest
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
        ref={this.handleMapMounted}
        onCenterChanged={this.handleCenterChanged}
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
