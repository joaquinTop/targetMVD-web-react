import React, {PropTypes} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

class Map extends React.Component {
  constructor(props, context){
    super(props, context);

    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick(e) {
    let lat = parseFloat(e.latLng.lat().toFixed(6));
    let lng = parseFloat(e.latLng.lng().toFixed(6));
    this.props.updateTargetInfo(this.props.index, "lat", lat);
    this.props.updateTargetInfo(this.props.index, "lng", lng);
    this.props.updateTargetInfo(this.props.index, "isVisible", true);
  }

  render() {
    const mapContainer = <div style={{height:'100%', width:'100%'}}></div>;
    const markers = this.props.markers.map((venue, i) => {
      const marker = {
        position:{
          lat: venue.lat,
          lng: venue.lng
        }
      };
      return <Marker key={i} {...marker}/>;
    });

    return(
      <GoogleMapLoader
      containerElement = {mapContainer}
      googleMapElement = {
        <GoogleMap
        defaultZoom = {15}
        onClick = {this.onMapClick}
        defaultCenter = {this.props.center}
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
  updateTargetInfo: PropTypes.func.isRequired,
  newTarget: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default Map;
