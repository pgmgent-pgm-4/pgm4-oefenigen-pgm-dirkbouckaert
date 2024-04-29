import { useEffect } from 'react';
import ParkingList from '../components/parking/ParkingList';
import useFetch from '../hooks/useFetch';

const ParkingPage = () => {
  const url = import.meta.env.VITE_API_URL_PARKING;
  const { data, setData, isLoading, setIsLoading, error, setError } =
    useFetch(url);

  useEffect(() => {
    const fetchParkings = async (url) => {
      try {
        console.log('url:', url);
        const res = await fetch(url);
        if (!res.ok)
          throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    setInterval(
      () => {
        fetchParkings(url);
      },
      1000 * 60 // Update every minute
    );
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      {data && data.records.length === 0 && <p>No records found</p>}

      {data && data.records.length > 0 && (
        <ParkingList parkings={data.records} />
      )}
    </>
  );
};

export default ParkingPage;
