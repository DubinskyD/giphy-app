<script setup lang="ts">
import { useGifStore } from "@/store/gifs";
const gifStore = useGifStore();
</script>

<template>
  <v-main>
    <v-container fluid v-if="gifStore.author">
      <v-row class="mx-auto justify-center">
        <v-col cols="auto">
          <h1>{{ gifStore.author.display_name }}</h1>
          <a :href="gifStore.author.profile_url" target="_blank">
            @{{ gifStore.author.username }}
          </a>
          <v-img
            :src="gifStore.author.avatar_url"
            max-width="250"
            max-height="250"
            height="auto"
            width="auto"
            contain />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
