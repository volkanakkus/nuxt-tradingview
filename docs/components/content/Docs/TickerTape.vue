<template>
  <div>
    <DocsTickerTape :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  colorTheme: $colorMode.value,
  showSymbolLogo: true,
  isTransparent: false,
  displayMode: 'adaptive',
  locale: 'en',
  symbols: [
    {
      proName: 'FOREXCOM:SPXUSD',
      title: 'S&P 500 Index',
    },
    {
      proName: 'FOREXCOM:NSXUSD',
      title: 'US 100 Cash CFD',
    },
    {
      proName: 'FX_IDC:EURUSD',
      title: 'EUR to USD',
    },
    {
      proName: 'BITSTAMP:BTCUSD',
      title: 'Bitcoin',
    },
    {
      proName: 'BITSTAMP:ETHUSD',
      title: 'Ethereum',
    },
  ],
}));
</script>
