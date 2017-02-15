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

export const mapMarkerToTarget = ({ latitude, longitude }, targetList) => {
  let targetFound;
  targetList.forEach((target) => {
    if ((target.lat === latitude) && (target.lng === longitude)) {
      targetFound = target;
    }
  });
  return targetFound;
};
