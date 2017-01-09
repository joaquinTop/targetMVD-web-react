import React from 'react';
import { Circle } from 'react-google-maps';

export const getCircle = (radius, center, options) => {
  return (
    <Circle
    options={options}
    center={center}
    radius={radius}/>
  );
};

export const getMyPosition = (success, error) => {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  });
};
