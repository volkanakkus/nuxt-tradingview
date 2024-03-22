<template>
  <div>
    <DocsCryptoHeatMap :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  dataSource: 'Crypto',
  blockSize: 'market_cap_calc',
  blockColor: 'change',
  locale: 'en',
  symbolUrl: '',
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
}));
</script>
