<script setup lang="ts">
import { ref } from "vue";
import { useGifStore } from "../store/gifs";
import GifCard from "@/components/GifCard.vue";

const gifStore = useGifStore();
const loading = ref(true);

const getNotFoundGif = () => {
  loading.value = true;
  gifStore
    .getNotFoundGif()
    .catch((error) => console.log("error", error))
    .finally(() => (loading.value = false));
};

getNotFoundGif();
</script>

<template>
  <v-container class="d-flex justify-center" v-if="true">
    <p>Loading...</p>
  </v-container>
  <gif-card
    v-if="gifStore.notFoundGif && !loading"
    mode="404"
    :gif="gifStore.notFoundGif" />
</template>
