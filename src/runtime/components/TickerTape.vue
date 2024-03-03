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
    default: 'ticker-tape',
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
  showSymbolLogo: true,
  colorTheme: 'light',
  isTransparent: false,
  displayMode: 'adaptive',
  locale: 'en',
  ...props.options,
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
);
</script>
