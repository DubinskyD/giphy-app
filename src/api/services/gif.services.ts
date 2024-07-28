import ApiClient from "../http-client.ts";
import {TRouteName} from '@/types/types.ts'

const GifServices = {
  endpoints(route: TRouteName, params?: any) {
    const url = {
      searchGifs: `/search`,
      getTrendingGifs: `/trending`,
      getGifById: `/${params?.id}`,
      getRandomGif: '/random',
    };

    return url[route];
  },

  get(url: TRouteName, params?: any) {
    return ApiClient.get(this.endpoints(url, params), params);
  },
  post(url: TRouteName, data: any, params?: any, ) {
    return ApiClient.post(this.endpoints(url, params), data, params );
  },
  patch(url: TRouteName, data: any, params?: any) {
    return ApiClient.patch(this.endpoints(url, params), data, params);
  },
  delete(url: TRouteName, params?: any) {
    return ApiClient.delete(this.endpoints(url, params), params);
  },
};

export default GifServices;
