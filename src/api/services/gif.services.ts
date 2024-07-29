import ApiClient from "../http-client.ts";
import { TRouteName } from '@/types/types.ts';

type Params = { [key: string]: any };
type Data = any;

const GifServices = {
  endpoints(route: TRouteName, params?: Params): string {
    const url = {
      searchGifs: `/search`,
      getTrendingGifs: `/trending`,
      getGifById: `/${params?.id}`,
      getRandomGif: '/random',
    };

    return url[route];
  },

  get(url: TRouteName, params?: Params): Promise<any> {
    return ApiClient.get(this.endpoints(url, params), params);
  },
  
  post(url: TRouteName, data: Data, params?: Params): Promise<any> {
    return ApiClient.post(this.endpoints(url, params), data, params);
  },
  
  patch(url: TRouteName, data: Data, params?: Params): Promise<any> {
    return ApiClient.patch(this.endpoints(url, params), data, params);
  },
  
  delete(url: TRouteName, params?: Params): Promise<any> {
    return ApiClient.delete(this.endpoints(url, params), params);
  },
};

export default GifServices;
