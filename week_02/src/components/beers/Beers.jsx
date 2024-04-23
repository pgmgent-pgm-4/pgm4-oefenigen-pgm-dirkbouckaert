import { useEffect, useState } from 'react';
import Beer from './Beer';
import SelectCountry from './SelectCountry';

const Beers = () => {
  const [country, setCountry] = useState('italy');
  const [beers, setBeers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    // fetch(`${baseUrl}?country=${country}`, {
    //   headers: {
    //     'X-RapidAPI-Key': '551d62cb26msh95d472daa6994afp10b533jsn1b3759598600',
    //     'X-RapidAPI-Host': 'beers-list.p.rapidapi.com',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('data:', data);
    //     setBeers(data);
    //   })
    //   .catch((error) => {
    //     console.log('error:', error);
    //     setError(error);
    //     setIsLoading(false);
    //   });
    const fetchBeers = async () => {
      try {
        setIsLoading(true);
        setBeers([]);
        const baseUrl = import.meta.env.VITE_BEERS_BASE_URL;
        const apiKey = import.meta.env.VITE_BEERS_API_KEY;
        const response = await fetch(`${baseUrl}/${country}`, {
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'beers-list.p.rapidapi.com',
          },
        });
        const data = await response.json();
        // console.log('data:', data);
        setBeers(data);
      } catch (error) {
        console.log('error:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBeers();
  }, [country]);

  return (
    <div>
      <h1>Beers</h1>

      <SelectCountry country={country} setCountry={setCountry} />

      {isLoading && <p>Loading...</p>}

      {beers &&
        beers.length > 0 &&
        beers.map((beer, index) => <Beer key={index} beer={beer} />)}
    </div>
  );
};

export default Beers;
