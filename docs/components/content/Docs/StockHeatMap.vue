<template>
  <div>
    <DocsStockHeatMap :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  exchanges: [],
  dataSource: 'SPX500',
  grouping: 'no_group',
  blockSize: 'market_cap_basic',
  blockColor: 'Perf.YTD',
  locale: 'en',
  symbolUrl: '',
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
}));
</script>
