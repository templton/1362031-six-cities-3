import axios from "axios";

export const createApi = (handleApiError) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => ({response});

  const onFail = (err) => {
    const {response} = err;
    handleApiError();

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
