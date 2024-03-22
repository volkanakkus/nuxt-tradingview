<template>
  <div>
    <DocsTopStories :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  feedMode: 'all_symbols',
  isTransparent: false,
  displayMode: 'regular',
  locale: 'en',
}));
</script>
