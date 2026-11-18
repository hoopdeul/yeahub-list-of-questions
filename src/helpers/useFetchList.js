import { useEffect, useState } from "react";

export const useFetchList = (fetchFn) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFn();
        setItems(data?.data ?? []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [fetchFn]);

  return { items, isLoading };
};
