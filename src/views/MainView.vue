<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useGifStore } from "../store/gifs";
import IntersectionObserverTrigger from "@/components/IntersectionObserverTrigger.vue";
import GifCard from "@/components/GifCard.vue";
import { ISearchParam } from "@/types/types";

const gifStore = useGifStore();
const router = useRouter();

const openGifPage = (id: string) => {
  router.push(`/gifs/${id}`);
};

const fetchNextGifChunk = () => {
  let searchParam: ISearchParam = {
    limit: 24,
    offset: gifStore.gifs.length,
  };

  gifStore.fetchGifsChunk(searchParam);
};

onMounted(() => {
  if (gifStore.gifs.length <= 1) {
    fetchNextGifChunk();
  }
});
</script>

<template>
  <v-container>
    <v-row class="d-flex flex-wrap justify-center">
      <v-col
        v-for="gif in gifStore.gifs"
        :key="gif.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center gif-col">
        <gif-card
          mode="small"
          :gif="gif"
          :username="gif.username"
          @click="openGifPage(gif.id)" />
      </v-col>
    </v-row>

    <IntersectionObserverTrigger
      :callback="fetchNextGifChunk"
      v-if="gifStore.gifs.length" />
  </v-container>
</template>

<style scoped>
.gif-col {
  max-height: 300px;
}
</style>
