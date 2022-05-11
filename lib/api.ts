import {
  useEffect,
  useState
} from "react";

const BASE    = `http://localhost:4000`;
const VERSION = 'v1';

export const apiUrl = (path: string): string => {
  return `${BASE}/v1/${path}`
}

type UseApi<T> = {
  isLoaded: boolean,
  error: Error | null,
  data: T | null
}

function useApi<T>(path: string): UseApi<T> {
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError]     = useState<Error | null>(null);
  const [data, setData]       = useState<T | null>(null);

  useEffect(() => {

    const makeRequest = async () => {
      if(!path){
        return;
      }

      const response = await fetch(`${BASE}/${VERSION}/${path}`);

      setLoaded(true);
      setError(null);
      setData(null);

      const status = response.status;

      if (200 !== status) {
        setError(new Error(`received HTTP ${status}, ${response.statusText}`));
        return;
      }

      const json = await response.json();
      setData(json.data as T)
    }

    makeRequest();

  }, [path])

  return {
    isLoaded,
    error,
    data
  }
}

export type {
  UseApi
}

export {
  useApi
}