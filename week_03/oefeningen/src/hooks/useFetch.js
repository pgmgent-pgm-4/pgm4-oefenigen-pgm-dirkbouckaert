import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, setData, isLoading, setIsLoading, error, setError };
}

export default useFetch;