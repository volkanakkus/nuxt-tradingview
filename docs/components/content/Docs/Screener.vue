<template>
  <div>
    <DocsScreener :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  defaultColumn: 'overview',
  defaultScreen: 'general',
  market: 'forex',
  showToolbar: true,
  locale: 'en',
}));
</script>
