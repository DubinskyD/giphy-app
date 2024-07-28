<script setup lang="ts">
import { ref } from "vue";
import { debounce } from "@/utils/debounce";
import { useGifStore } from "../store/gifs";
import { ISearchParam } from "@/types/types";

const gifStore = useGifStore();

const search = ref("");
const loading = ref(false);
const disabled = ref(false);

const debouncedInput = debounce((value: string) => {
  loading.value = true;
  disabled.value = true;
  gifStore.searchQuery = value;

  let searchParam: ISearchParam = {
    limit: 24,
    offset: 0,
  };
  gifStore.fetchGifsChunk(searchParam).finally(() => {
    loading.value = false;
    disabled.value = false;
  });
}, 500);

const handleInput = (event: Event) => {
  search.value = (event.target as HTMLInputElement).value;
  debouncedInput(search.value);
};
</script>

<template>
  <v-text-field
    v-model="search"
    @input="handleInput"
    label="Search"
    prepend-inner-icon="mdi-magnify"
    rounded="30"
    variant="solo-filled"
    hide-details="auto"
    :loading="loading"
    :disabled="disabled" />
</template>
