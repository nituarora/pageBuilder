import axios from 'axios';

const baseUrl = process.env.BASE_URL || 'http://localhost:3306/api/';

console.log("baseUrl==",baseUrl)
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (url, config = {}) => {
  try {
   // console.log("get api======",url )
    const response = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const post = async (url, data, config = {}) => {
  try {
  //  console.log("post api======",url )
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};


const handleError = (error) => {
  // Customize error handling here
  console.error('API call error:', error);
  throw error;
};
