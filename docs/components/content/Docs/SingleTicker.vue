<template>
  <div>
    <DocsSingleTicker :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  colorTheme: $colorMode.value,
  symbol: 'FX:EURUSD',
  width: 350,
  isTransparent: false,
  locale: 'en',
}));
</script>
