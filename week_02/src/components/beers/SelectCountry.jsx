const SelectCountry = ({ country, setCountry }) => {
  const countries = [
    { name: 'Denmark', value: 'denmark' },
    { name: 'Sweden', value: 'sweden' },
    { name: 'Belgium', value: 'belgium' },
    { name: 'Spain', value: 'spain' },
    { name: 'Portugal', value: 'portugal' },
    { name: 'Ireland', value: 'ireland' },
    { name: 'Luxembourg', value: 'luxembourg' },
    { name: 'Norway', value: 'norway' },
    { name: 'Finland', value: 'finland' },
    { name: 'Switzerland', value: 'switzerland' },
    { name: 'Czech Republic', value: 'czech' },
    { name: 'Italy', value: 'italy' },
    { name: 'Poland', value: 'poland' },
    { name: 'Malta', value: 'malta' },
  ];

  const handleOnChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <label htmlFor="country" className="block">
        Select a country
      </label>
      <select
        id="country"
        name="country"
        onChange={handleOnChange}
        value={country}
      >
        {countries.map((country) => (
          <option key={country.value} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCountry;
