<template>
  <div>
    <DocsCryptoMarket :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  defaultColumn: 'overview',
  screener_type: 'crypto_mkt',
  displayCurrency: 'USD',
  locale: 'en',
}));
</script>
