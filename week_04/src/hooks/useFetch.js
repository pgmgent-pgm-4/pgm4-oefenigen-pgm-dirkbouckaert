import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error }
};

export default useFetch;