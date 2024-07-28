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
  <v-app-bar class="app-header" flat>
    <v-row align="center" justify="space-around" class="w-100">
      <v-col :col="defaultLayout ? 1 : 12">
        <RouterLink to="/">
          <v-img :src="logo" height="40" contain />
        </RouterLink>
      </v-col>
      <v-col cols="5" v-if="defaultLayout">
        <search-field />
      </v-col>
      <v-col col="auto" v-if="defaultLayout" />
    </v-row>
  </v-app-bar>
</template>
