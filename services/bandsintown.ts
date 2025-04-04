import axios from 'axios';

const getLatestEvent = async (): Promise<any> => {
  const response = await axios.get('/api/bandsintown');

  return response.data;
};

export { getLatestEvent };