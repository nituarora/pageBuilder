import { useQuery } from 'react-query';
import { get } from '../utils/api';

const fetchData1 = async () => {
  return await get(`widget/get-widget`);
};

const useWidget = () => {
  return useQuery(['data',url], fetchData1, {
     refetchOnWindowFocus: false, 
  });
};

export default useWidget;
