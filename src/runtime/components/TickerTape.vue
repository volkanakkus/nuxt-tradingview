<template>
  <div
    :id="container"
    ref="tradingview"
    :style="{
      width: options.autosize && '100%',
      height: options.autosize && '100%',
    }" />
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

const options = props.options || {
  colorTheme: 'dark',
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
};

const { container, tradingview } = useInitWidget(
  options,
  props.class,
  'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
);
</script>
