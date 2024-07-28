<script setup lang="ts">
import { IUser, IGif } from "../types/types";
import { useGifStore } from "../store/gifs";
import { useRouter } from "vue-router";

const gifStore = useGifStore();
const router = useRouter();

const props = defineProps<{
  mode: "small" | "large" | "404" | "slider";
  user?: IUser | undefined;
  gif: IGif;
  username?: string | undefined;
}>();

const goToAuthorPage = (): void => {
  if (!props.user) return;
  gifStore.author = props.user;
  router.push(`/author/${props.username ? props.username : "Unknown"}`);
};

const share = (): void => {
  if (navigator.share) {
    navigator
      .share({
        title: props.gif.title,
        text: props.gif.title,
        url: props.gif.images.original.url,
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  } else {
    console.log("Web Share API is not supported in your browser.");
  }
};
</script>

<template>
  <v-container class="d-flex justify-center">
    <v-card class="d-flex flex-column align-center w-100">
      <v-img
        :src="props.gif.images.original.url"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="50vh"
        width="100%"
        contain>
      </v-img>
      <v-card-actions
        class="d-flex flex-wrap justify-center"
        v-if="props.mode === '404'">
        <v-card-title class="text-white"> 404 Page Not Found </v-card-title>
      </v-card-actions>
      <v-card-actions
        class="d-flex flex-wrap justify-center"
        v-if="props.mode === 'large'">
        <v-card-title class="text-white" v-text="props.gif.title" />
        <v-spacer></v-spacer>
        <div class="d-flex flex-wrap justify-center align-center">
          <v-icon
            v-if="props.user"
            @click="goToAuthorPage"
            color="medium-emphasis"
            size="small">
            mdi-account
          </v-icon>
          <v-btn
            @click="share"
            color="medium-emphasis"
            icon="mdi-share-variant"
            size="small" />
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped></style>
