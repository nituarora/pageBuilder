import { useState } from 'react';
import { useQuery } from 'react-query';
import { post } from '../utils/api';

const usePage = (url) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await post(`/page/get-single-page/${url}`);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const { data, error, refetch } = useQuery('data', fetchData, {
    refetchOnWindowFocus: false,
    enabled: !isLoading, // Disable fetching when isLoading is true
  });

  return { data, error, isLoading, refetch };
};

export default usePage;