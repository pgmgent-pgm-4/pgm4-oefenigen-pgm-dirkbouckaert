import { useEffect, useState } from "react";

const useServer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`);
      return await res.json();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const createRecord = async (url, data) => {
    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error(`Could not post to ${url}, received ${res.status}`);
      return await res.json();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const deleteRecord = async (url) => {
    try {
      setIsLoading(true);
      const res = await fetch(url, { method: 'DELETE' });
      if (!res.ok) throw new Error(`Could not delete ${url}, received ${res.status}`);
      return await res.json();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const updateRecord = async (url, data) => {
    try {
      setIsLoading(true);
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error(`Could not update ${url}, received ${res.status}`);
      return await res.json();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, fetchData, createRecord, updateRecord, deleteRecord };
}

export default useServer;