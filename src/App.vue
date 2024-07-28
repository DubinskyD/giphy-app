<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <v-app>
    <v-container class="justify-center">
      <v-layout class="justify-center">
        <app-header />
        <v-main class="d-flex justify-center">
          <RouterView />
        </v-main>
      </v-layout>
    </v-container>
  </v-app>
</template>
