// http-client.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const options = {
  baseURL: 'https://api.giphy.com/v1/gifs',
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
};

const httpClient = axios.create(options);

// interceptors.request
httpClient.interceptors.request.use((config) => {
  if (config.params) {
    config.params.api_key = import.meta.env.VITE_GIPHY_API_KEY;
  } else {
    config.params = { api_key: import.meta.env.VITE_GIPHY_API_KEY };
  }
  return config;
});

interface IApiClient {
  get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

const ApiClient: IApiClient = {
  get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return httpClient.get<T>(url, { params, ...config });
  },
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return httpClient.post<T>(url, data, config);
  },
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return httpClient.patch<T>(url, data, config);
  },
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return httpClient.delete<T>(url, config);
  },
};

export default ApiClient;
