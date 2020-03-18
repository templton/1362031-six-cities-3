import axios from "axios";

const ErrorCode = {
  NOT_AUTH: 401
};

export const createApi = (unauthorize) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => ({response});

  const onFail = (err) => {
    const {response} = err;

    if (response.status === ErrorCode.NOT_AUTH) {
      unauthorize();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
