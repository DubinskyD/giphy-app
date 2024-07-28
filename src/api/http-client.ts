import Axios from "axios";

const options = {
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
};
const httpClient = Axios.create(options);

//interceptors.request
httpClient.interceptors.request.use((config) => {
  config.params.api_key = import.meta.env.VITE_GIPHY_API_KEY;
  return config;
});

const ApiClient = {
  get(url: string, params = {}) {
    return httpClient.get(url, { params });
  },

  put(url: string, data = {}, params = {}) {
    return httpClient.put(url, data, { params });
  },

  delete(url: string, params = {}) {
    return httpClient.delete(url, { params });
  },

  post(url: string, data = {}, params = {}) {
    return httpClient.post(url, data, { params });
  },

  patch(url: string, data = {}, params = {}) {
    return httpClient.patch(url, data, { params });
  },
};

export default ApiClient;
