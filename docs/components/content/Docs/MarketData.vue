<template>
  <div>
    <DocsMarketData :key="$colorMode.value" :options="options" />
  </div>
</template>

<script lang="ts" setup>
const { $colorMode } = useNuxtApp();

const options = computed(() => ({
  width: '100%',
  height: 450,
  colorTheme: $colorMode.value,
  symbolsGroups: [
    {
      name: 'Indices',
      originalName: 'Indices',
      symbols: [
        {
          name: 'FOREXCOM:SPXUSD',
          displayName: 'S&P 500 Index',
        },
        {
          name: 'FOREXCOM:NSXUSD',
          displayName: 'US 100 Cash CFD',
        },
        {
          name: 'FOREXCOM:DJI',
          displayName: 'Dow Jones Industrial Average Index',
        },
        {
          name: 'INDEX:NKY',
          displayName: 'Nikkei 225',
        },
        {
          name: 'INDEX:DEU40',
          displayName: 'DAX Index',
        },
        {
          name: 'FOREXCOM:UKXGBP',
          displayName: 'FTSE 100 Index',
        },
      ],
    },
    {
      name: 'Futures',
      originalName: 'Futures',
      symbols: [
        {
          name: 'CME_MINI:ES1!',
          displayName: 'S&P 500',
        },
        {
          name: 'CME:6E1!',
          displayName: 'Euro',
        },
        {
          name: 'COMEX:GC1!',
          displayName: 'Gold',
        },
        {
          name: 'NYMEX:CL1!',
          displayName: 'WTI Crude Oil',
        },
        {
          name: 'NYMEX:NG1!',
          displayName: 'Gas',
        },
        {
          name: 'CBOT:ZC1!',
          displayName: 'Corn',
        },
      ],
    },
  ],
  showSymbolLogo: true,
  isTransparent: false,
  locale: 'en',
  backgroundColor: '#0C0C0D',
}));
</script>
