import axios from "axios";

export const createApi = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => ({response});

  const onFail = (err) => {
    const {response} = err;

    console.log(`Error response details`, response);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};