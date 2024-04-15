import { useState, useEffect } from "react";

interface Props<T> {
  promise: () => Promise<T>;
  builder: (
    data: T | null,
    error: Error | null,
    loading: boolean
  ) => JSX.Element;
}

const FutureBuilder = <T extends unknown>({ promise, builder }: Props<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await promise();
        setData(result);
      } catch (err: unknown) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [promise]);

  return builder(data, error, loading);
};

export default FutureBuilder;
