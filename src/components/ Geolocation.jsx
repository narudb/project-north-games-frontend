import React from 'react';
import { usePosition } from 'use-position';

export default function Geolocation() {
  const watch = true;
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(
    watch,
    { enableHighAccuracy: true }
  );

  return (
    <code>
      latitude: {latitude}
      <br />
      longitude: {longitude}
      <br />
      timestamp: {timestamp}
      <br />
      accuracy: {accuracy && `${accuracy}m`}
      <br />
      error: {error}
    </code>
  );
}
