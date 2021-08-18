import React from 'react';
import useStyles from './styles';
import Marker from '../Marker/Marker';
import GoogleMapReact from 'google-map-react';

const Map = ({ places, setMarkerClicked }) => {
  const coords = { lat: 21.355959, lng: -157.788222 };
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBMKGLmZItUaWrg35L4whEeU61fEK095I0' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={11}
        options={{ disableDefaultUI: true, zoomControl: true }}
        hoverDistance={20}
        margin={[50, 50, 50, 50]}
      >
        {places?.map((place) => (
          <Marker
            setMarkerClicked={setMarkerClicked}
            place={place}
            onClick={() => console.log('click')}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={place.location_id}
            text={place.name}
          ></Marker>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
