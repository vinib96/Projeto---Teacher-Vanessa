import React, { useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function Maps() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAR8MnZUPqxn04n5tCtWYMwU_UjLpDWnWo',
  });

  const mapRef = useRef(null);

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      const { google } = window;

      const position = { lat: -22.71379, lng: -47.67379 };

      new google.maps.Marker({
        position: position,
        map: mapRef.current,
        title: 'Rua das Hortênsias, 121, Nova Piracicaba, Piracicaba-SP',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          fillColor: 'blue', // Cor do ícone
          fillOpacity: 1,
          scale: 10, // Tamanho do ícone
          strokeColor: 'white',
          strokeWeight: 2,
        },
      });
    }
  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;

  return (
    <div className='maps'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat: -22.71379, lng: -47.67379 }}
          zoom={18}
          onLoad={(map) => (mapRef.current = map)}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Maps;
