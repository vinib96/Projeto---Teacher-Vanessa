import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAR8MnZUPqxn04n5tCtWYMwU_UjLpDWnWo',
  });
  const position = { lat: -22.71379, lng: -47.67379 };
  return (
    <div className='maps'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={position}
          zoom={18}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: 'Rua das Hortênsias, 121, Nova Piracicaba, Piracicaba-SP',
                className: 'maps__marker',
              },
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Maps;
