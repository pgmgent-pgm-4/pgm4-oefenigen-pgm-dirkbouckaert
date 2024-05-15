import ReactCountryFlag from 'react-country-flag';
import { Marker } from 'react-map-gl';

const CountryMapMarker = ({ country }) => {
  return (
    <Marker
      longitude={country.longitude}
      latitude={country.latitude}
      pitchAlignment="map"
      anchor="bottom"
    >
      <ReactCountryFlag
        svg
        countryCode={country.iso2Code}
        style={{
          width: '2em',
          height: '2em',
        }}
      />
    </Marker>
  );
};

export default CountryMapMarker;
