<template>
  <div>
    <Chart />
    <CompanyProfile />
    <CryptoHeatMap />
    <CryptoMarket />
    <EconomicCalendar />
    <ForexCrossRates />
    <ForexHeatMap />
    <FundamentalData />
    <MarketData />
    <MarketOverview />
    <MiniChart />
    <Screener />
    <SingleTicker />
    <StockMarket />
    <StockHeatMap />
    <SymbolInfo />
    <SymbolOverview />
    <TechnicalAnalysis />
    <Ticker />
    <TickerTape />
    <TopStories />
  </div>
</template>

<script lang="ts" setup>
const options = {
  theme: 'dark',
  autosize: true,
  symbol: 'NASDAQ:AAPL',
  timezone: 'Etc/UTC',
};
</script>
