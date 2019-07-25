import apisauce from 'apisauce';
import { API_URL } from '../constants/constants'

const create = (token = '', baseURL = API_URL) => {

  const api = apisauce.create({
    baseURL,

    headers: {
      'Cache-Control': 'no-cache',
      'X-Token': token
    },
    timeout: 30000
  });

  const setAuthToken = (userAuth) => api.setHeader('X-Token', userAuth);
  const loginUser = (email, password) => api.post('/v1/users/login', { email: email, password: password });

  return {
    setAuthToken,
    loginUser,
  };
};

export default {
  create
};
