<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";
import GifCard from "@/components/GifCard.vue";
import GifCarousel from "@/components/GifCarousel.vue";
import { useGifStore } from "../store/gifs";

const route = useRoute();
const gifStore = useGifStore();

const loading = ref(false);

const gifID = computed(() => route.params.id as string);
const gif = computed(() => gifStore.getGifByID(gifID.value));

const fetchGifById = (id: string) => {
  loading.value = true;
  gifStore.fetchGifById({ id: id }).finally(() => (loading.value = false));
};

watch(gifID, (newID) => {
  fetchGifById(newID);
});

onMounted(() => {
  if (!gif.value) {
    fetchGifById(gifID.value);
  }
});
</script>

<template>
  <v-row>
    <gif-card
      v-if="gif && !loading"
      mode="large"
      :user="gif.user"
      :gif="gif"
      :username="gif.username" />

    <v-container class="d-flex justify-center" v-if="loading">
      <p>Loading...</p>
    </v-container>
    <gif-carousel />
  </v-row>
</template>
