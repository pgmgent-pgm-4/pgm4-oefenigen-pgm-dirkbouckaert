import { MAPBOX_TOKEN } from '../../lib/consts';
import countries from '../../../data/countries.json';

// Components
import Map from 'react-map-gl';
import CountryMapMarker from './CountryMapMarker';

const CountryMap = ({}) => {
  const belgium = countries.find((country) => country.name === 'Belgium');
  const europeanCountries = countries.filter(
    (country) => country.region.value === 'Europe & Central Asia'
  );

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        longitude: belgium.longitude,
        latitude: belgium.latitude,
        zoom: 4,
      }}
      style={{
        width: '100vw',
        height: '100vh',
        marginTop: '-3rem',
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {europeanCountries.map((country) => (
        <CountryMapMarker key={country.id} country={country} />
      ))}
    </Map>
  );
};

export default CountryMap;
