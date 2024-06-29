import React, { useState, useEffect } from 'react';
import { Marker, useMap } from 'react-leaflet';

const LocationMarker = ({ setLocation }) => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);

  const handleLocationFound = (e) => {
    const { lat, lng } = e.latlng;
    setPosition(e.latlng);
    setLocation({ lat, lng });
  };

  map.on('locationfound', handleLocationFound);

  const handleClick = () => {
    map.locate();
  };

  return position === null ? null : (
    <Marker position={position} />
  );
};

export default LocationMarker;
