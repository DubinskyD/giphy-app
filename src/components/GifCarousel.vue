<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useGifStore } from "../store/gifs";
import { useRouter } from "vue-router";

const gifStore = useGifStore();
const currentIndex = ref(0);
const router = useRouter();

watch(currentIndex, (newIndex) => {
  onSlideChange(newIndex);
});

const onSlideChange = (index: number) => {
  currentIndex.value = index;
  if (index === gifStore.randomGifs.length - 1) {
    gifStore.fetchRandomGif();
  }
};
const openGifPage = (id: string) => {
  router.push(`/gifs/${id}`);
};

onMounted(() => {
  if (!gifStore.randomGifs.length) {
    for (let i = 0; i < 3; i++) {
      gifStore.fetchRandomGif();
    }
  }
});
</script>

<template>
  <v-carousel
    hide-delimiters
    v-model="currentIndex"
    height="200px"
    width="200px">
    <v-carousel-item
      v-for="(item, i) in gifStore.randomGifs"
      @click="openGifPage(item.id)"
      :key="`carousel-${i}`"
      :src="item.images.fixed_height_small.url"
      contain />
  </v-carousel>
</template>
