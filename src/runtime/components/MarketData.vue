<template>
  <div :id="container" ref="tradingview" />
</template>

<script lang="ts" setup>
import useInitWidget from '../composables/useInitWidget';

const props = defineProps({
  options: {
    type: Object,
    default: () => {},
  },
  class: {
    type: String,
    default: 'market-data',
  },
});
const options = {
  width: 770,
  height: 450,
  symbolsGroups: [
    {
      name: 'Indices',
      originalName: 'Indices',
      symbols: [
        {
          name: 'FOREXCOM:SPXUSD',
          displayName: 'S&P 500',
        },
        {
          name: 'FOREXCOM:NSXUSD',
          displayName: 'US 100',
        },
        {
          name: 'FOREXCOM:DJI',
          displayName: 'Dow 30',
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
          displayName: 'UK 100',
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
          displayName: 'Crude Oil',
        },
        {
          name: 'NYMEX:NG1!',
          displayName: 'Natural Gas',
        },
        {
          name: 'CBOT:ZC1!',
          displayName: 'Corn',
        },
      ],
    },
    {
      name: 'Bonds',
      originalName: 'Bonds',
      symbols: [
        {
          name: 'CME:GE1!',
          displayName: 'Eurodollar',
        },
        {
          name: 'CBOT:ZB1!',
          displayName: 'T-Bond',
        },
        {
          name: 'CBOT:UB1!',
          displayName: 'Ultra T-Bond',
        },
        {
          name: 'EUREX:FGBL1!',
          displayName: 'Euro Bund',
        },
        {
          name: 'EUREX:FBTP1!',
          displayName: 'Euro BTP',
        },
        {
          name: 'EUREX:FGBM1!',
          displayName: 'Euro BOBL',
        },
      ],
    },
    {
      name: 'Forex',
      originalName: 'Forex',
      symbols: [
        {
          name: 'FX:EURUSD',
        },
        {
          name: 'FX:GBPUSD',
        },
        {
          name: 'FX:USDJPY',
        },
        {
          name: 'FX:USDCHF',
        },
        {
          name: 'FX:AUDUSD',
        },
        {
          name: 'FX:USDCAD',
        },
      ],
    },
  ],
  showSymbolLogo: true,
  colorTheme: 'light',
  isTransparent: false,
  locale: 'en',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
);
</script>
