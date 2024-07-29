<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import logo from "@/assets/GIPHY_logo.png";
import SearchField from "@/components/SearchField.vue";

const route = useRoute();
const defaultLayout = computed(() => route.meta.layout === "default");
</script>

<template>
  <v-app-bar flat class="app-header" height="120">
    <v-row class="justify-space-between align-center w-100">
      <v-col cols="12" sm="3" md="3">
        <RouterLink to="/">
          <v-img :src="logo" height="40" contain />
        </RouterLink>
      </v-col>
      <v-col v-if="defaultLayout" cols="12" sm="9" md="9" lg="6">
        <search-field />
      </v-col>
      <v-col cols="3" class="d-none d-lg-block" />
    </v-row>
  </v-app-bar>
</template>

<style scoped>
@media (min-width: 600px) {
  .app-header {
    height: 80px;
  }
}
</style>
