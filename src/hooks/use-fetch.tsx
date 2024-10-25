import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      setIsPending(true);
      try {
        const res = await axios.get<T>(url);
        if (isMounted) setData(res.data);
      } catch (err) {
        if (isMounted) {
          const message = axios.isAxiosError(err)
            ? err.message
            : "An unexpected error occurred.";
          setError(message);
        }
      } finally {
        if (isMounted) setIsPending(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    data,
    isPending,
    isError: !!error,
    error,
  };
}
