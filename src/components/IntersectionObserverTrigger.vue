<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";

const props = defineProps<{
  callback: () => void;
}>();

const observerElement = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      props.callback();
    }
  });
};

const createObserver = () => {
  observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

  if (observerElement.value) {
    observer.observe(observerElement.value);
  }
};

onMounted(() => {
  createObserver();
});

onBeforeUnmount(() => {
  if (observer && observerElement.value) {
    observer.unobserve(observerElement.value);
  }
});
</script>

<template>
  <div ref="observerElement" class="observer-trigger"></div>
</template>

<style scoped>
.observer-trigger {
  height: 50px;
  width: 100%;
}
</style>
