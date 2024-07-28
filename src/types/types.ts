export interface IGiphy {
    gifs: IGif[];
    totalCount: number;
  }
  
export interface IGif {
    id: string;
    url: string;
    title: string;
    user: IUser;
    username?: string;
    images: {
      original: { url: string };
      original_still: { url: string };
      fixed_height: { url: string };
      fixed_width: { url: string };
      fixed_height_small: { url: string};
      fixed_height_still: { url: string };
      fixed_width_still: { url: string };
    };
}
  
export interface IUser {
    avatar_url: string;
    profile_url: string;
    username: string;
    display_name: string;
}

export interface ISearchParam {
  q?: string;
  limit: number;
  offset: number;
}

export type TRouteName = 'searchGifs' | 'getTrendingGifs' | 'getGifById' | 'getRandomGif'