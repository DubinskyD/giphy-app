import { defineStore } from 'pinia'
import GifServices from '@/api/services/gif.services'
import { getRandomInt } from "@/utils/random";
import { IGif, ISearchParam, IUser, TRouteName } from '@/types/types'; 

interface GifState {
  gifs: IGif[];
  randomGifs: IGif[];
  searchQuery: string;
  author: null | IUser;
  notFoundGif: null | IGif;
}

export const useGifStore = defineStore('gifStore', {
  state: (): GifState => {
    return {
      gifs: [],
      randomGifs: [],
      searchQuery: '',
      author: null,
      notFoundGif: null
    }
  },
  actions: {
    fetchGifsChunk(params: ISearchParam): Promise<void> {
      return new Promise((resolve, reject) => {
        // URL selection
        const url: TRouteName = this.searchQuery ? 'searchGifs' : 'getTrendingGifs';
    
        // Add q param if searchQuery exists
        const param: ISearchParam = {
          limit: params.limit,
          offset: params.offset,
          ...(this.searchQuery && { q: this.searchQuery })
        };

        // Request
        GifServices.get(url, param)
          .then((response) => {
            // In case if not found any gif
            if (!response.data.data.length) {
              this.getNotFoundGif()
                .then((notFoundResponse) => {
                  this.gifs = [...notFoundResponse.data];
                  resolve();
                })
                .catch((error) => {
                  console.error('Error fetching Not Found GIF:', error);
                  reject(error);
                });
              return;
            }
    
            // Update gifs array
            this.gifs = params.offset ? [...this.gifs, ...response.data.data] : [...response.data.data];
            resolve(response.data);
          })
          .catch((error) => {
            console.error('Error fetching GIFs:', error);
            reject(error);
          });
      });
    },
    
    fetchGifById(param: { id: string }): Promise<IGif | undefined> {
      return new Promise((resolve, reject) => {
        GifServices.get('getGifById', param)
          .then((response) => {
            this.gifs = [{...response.data.data}];
            resolve(response.data.data);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },

    fetchRandomGif(): Promise<void> {
      return new Promise((resolve, reject) => {
        GifServices.get('getRandomGif')
          .then((response) => {
            this.randomGifs.push({...response.data.data});
            resolve(response.data.data);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },

    getNotFoundGif(): Promise<{ data: IGif[] }> {
      return new Promise((resolve, reject) => {
        const payload: ISearchParam = {
          q: "404 not found",
          limit: 1,
          offset: getRandomInt(1, 100),
        };
        GifServices.get('searchGifs', payload)
          .then((response) => {
            this.notFoundGif = { ...response.data.data[0] };
            resolve({ data: response.data.data });
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
    
  },
  getters: {
    getGifByID: (state) => (id: string): IGif | undefined => {
      return state.gifs.find(gif => gif.id === id);
    }
  },
  persist: true,
})
