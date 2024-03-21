import type { Ref } from 'vue';

export interface Options {
  container_id: string;
}

export interface ReturnedObject {
  container: Ref<string>;
  tradingview: Ref<HTMLDivElement | undefined>;
}

export type AllWidgets =
  | 'SingleTicker'
  | 'Ticker'
  | 'SymbolInfo'
  | 'StockMarket'
  | 'Screener'
  | 'StockHeatMap'
  | 'MiniChart'
  | 'MarketOverview'
  | 'MarketData'
  | 'TickerTape'
  | 'FundamentalData'
  | 'ForexHeatMap'
  | 'ForexCrossRates'
  | 'EconomicCalendar'
  | 'TechnicalAnalysis'
  | 'CryptoMarket'
  | 'CryptoHeatMap'
  | 'CompanyProfile'
  | 'Chart'
  | 'TopStories'
  | 'SymbolOverview';
