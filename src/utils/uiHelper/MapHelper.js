import React from 'react';
import { Circle } from 'react-google-maps';

export const getCircle = (radius, center, options) => {
  return (
    <Circle  {...{options, center, radius}} />
  );
};

export const getMyPosition = (success, error) => {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  });
};

export const mapMarkerToTarget = (marker, targetList) => {
  let targetFound;
  targetList.forEach((target) => {
    if ((target.lat === marker.latitude) &&
    (target.lng === marker.longitude)) {
      targetFound = target;
    }
  });
  return targetFound;
};
