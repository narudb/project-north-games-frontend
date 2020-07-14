import { usePosition } from 'use-position';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

export default function Geolocation() {
  const dispatch = useDispatch();
  const watch = true;
  const { latitude, longitude } = usePosition(watch, {
    enableHighAccuracy: true,
  });

  useEffect(() => {
    const getUserGeolocation = () => {
      dispatch({ type: 'GET_LATITUDE', latClient: latitude });
      dispatch({ type: 'GET_LONGITUDE', longClient: longitude });
    };
    getUserGeolocation();
  }, [latitude, longitude]);

  return (
    <code>
      <p>Your Geolocation</p>
      latitude : {latitude} longitude: {longitude}
    </code>
  );
}
