// useData.js
import { useQuery } from 'react-query';
import { get, post } from '../utils/api';

export const useGetData = (url) => {
  //console.log("get") 
  const fetchData = async () => {
    return await get(url); 
  };

  return useQuery(['data', url], fetchData, {
    refetchOnWindowFocus: false, 
  });
};

export const usePostData = (url, data) => {
  //console.log("postttt")
  const fetchData = async () => {
    return await post(url, data); 
  };

  return useQuery(['data', url], fetchData, {
    refetchOnWindowFocus: false, 
  });
};
