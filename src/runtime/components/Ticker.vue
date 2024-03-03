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
    default: 'ticker',
  },
});
const options = {
  symbols: [
    {
      proName: 'FOREXCOM:SPXUSD',
      title: 'S&P 500',
    },
    {
      proName: 'FOREXCOM:NSXUSD',
      title: 'US 100',
    },
    {
      proName: 'FX_IDC:EURUSD',
      title: 'EUR/USD',
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
  colorTheme: 'light',
  isTransparent: false,
  showSymbolLogo: true,
  locale: 'en',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
);
</script>
