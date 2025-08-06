export const chartOptions = {
  width: '100%',
  height: '400',
  symbol: 'NASDAQ:AAPL',
  interval: 'D',
  timezone: 'Etc/UTC',
  theme: 'dark',
  style: '1',
  backgroundColor: '#0C0C0D',
  locale: 'en',
  enable_publishing: false,
  allow_symbol_change: true,
  calendar: false,
};

export const companyProfileOptions = {
  width: '100%',
  height: 450,
  isTransparent: false,
  colorTheme: 'dark',
  symbol: 'NASDAQ:AAPL',
  locale: 'en',
};

export const cryptoHeatMapOptions = {
  dataSource: 'Crypto',
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  blockSize: 'market_cap_calc',
  blockColor: 'change',
  locale: 'en',
  symbolUrl: '',
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
};

export const cryptoMarketOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  defaultColumn: 'overview',
  screener_type: 'crypto_mkt',
  displayCurrency: 'USD',
  locale: 'en',
};

export const economicCalendarOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  isTransparent: false,
  locale: 'en',
  importanceFilter: '-1,0,1',
  countryFilter: 'ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu',
};

export const forexCrossRatesOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  currencies: ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD'],
  isTransparent: false,
  locale: 'en',
};

export const forexHeatMapOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  currencies: ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD', 'CNY'],
  isTransparent: false,
  locale: 'en',
};

export const fundamentalDataOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  isTransparent: false,
  largeChartUrl: '',
  displayMode: 'regular',
  symbol: 'NASDAQ:AAPL',
  locale: 'en',
};

export const marketDataOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  showSymbolLogo: true,
  isTransparent: false,
  locale: 'en',
  backgroundColor: '#0C0C0D',
  symbolsGroups: [
    {
      name: 'Indices',
      originalName: 'Indices',
      symbols: [
        { name: 'FOREXCOM:SPXUSD', displayName: 'S&P 500 Index' },
        { name: 'FOREXCOM:NSXUSD', displayName: 'US 100 Cash CFD' },
        { name: 'FOREXCOM:DJI', displayName: 'Dow Jones Industrial Average Index' },
        { name: 'INDEX:NKY', displayName: 'Nikkei 225' },
        { name: 'INDEX:DEU40', displayName: 'DAX Index' },
        { name: 'FOREXCOM:UKXGBP', displayName: 'FTSE 100 Index' },
      ],
    },
    {
      name: 'Futures',
      originalName: 'Futures',
      symbols: [
        { name: 'CME_MINI:ES1!', displayName: 'S&P 500' },
        { name: 'CME:6E1!', displayName: 'Euro' },
        { name: 'COMEX:GC1!', displayName: 'Gold' },
        { name: 'NYMEX:CL1!', displayName: 'WTI Crude Oil' },
        { name: 'NYMEX:NG1!', displayName: 'Gas' },
        { name: 'CBOT:ZC1!', displayName: 'Corn' },
      ],
    },
  ],
};

export const marketOverviewOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  dateRange: '12M',
  showChart: true,
  locale: 'en',
  largeChartUrl: '',
  isTransparent: false,
  showSymbolLogo: true,
  showFloatingTooltip: false,
  plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
  plotLineColorFalling: 'rgba(41, 98, 255, 1)',
  gridLineColor: 'rgba(42, 46, 57, 0)',
  scaleFontColor: 'rgba(134, 137, 147, 1)',
  belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
  belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
  belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
  belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
  symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
  tabs: [
    {
      title: 'Indices',
      symbols: [
        {
          s: 'FOREXCOM:SPXUSD',
          d: 'S&P 500 Index',
        },
        {
          s: 'FOREXCOM:NSXUSD',
          d: 'US 100 Cash CFD',
        },
        {
          s: 'FOREXCOM:DJI',
          d: 'Dow Jones Industrial Average Index',
        },
        {
          s: 'INDEX:NKY',
          d: 'Nikkei 225',
        },
        {
          s: 'INDEX:DEU40',
          d: 'DAX Index',
        },
        {
          s: 'FOREXCOM:UKXGBP',
          d: 'FTSE 100 Index',
        },
      ],
      originalTitle: 'Indices',
    },
    {
      title: 'Futures',
      symbols: [
        {
          s: 'CME_MINI:ES1!',
          d: 'S&P 500',
        },
        {
          s: 'CME:6E1!',
          d: 'Euro',
        },
        {
          s: 'COMEX:GC1!',
          d: 'Gold',
        },
        {
          s: 'NYMEX:CL1!',
          d: 'WTI Crude Oil',
        },
        {
          s: 'NYMEX:NG1!',
          d: 'Gas',
        },
        {
          s: 'CBOT:ZC1!',
          d: 'Corn',
        },
      ],
      originalTitle: 'Futures',
    },
    {
      title: 'Bonds',
      symbols: [
        {
          s: 'CBOT:ZB1!',
          d: 'T-Bond',
        },
        {
          s: 'CBOT:UB1!',
          d: 'Ultra T-Bond',
        },
        {
          s: 'EUREX:FGBL1!',
          d: 'Euro Bund',
        },
        {
          s: 'EUREX:FBTP1!',
          d: 'Euro BTP',
        },
        {
          s: 'EUREX:FGBM1!',
          d: 'Euro BOBL',
        },
      ],
      originalTitle: 'Bonds',
    },
    {
      title: 'Forex',
      symbols: [
        {
          s: 'FX:EURUSD',
          d: 'EUR to USD',
        },
        {
          s: 'FX:GBPUSD',
          d: 'GBP to USD',
        },
        {
          s: 'FX:USDJPY',
          d: 'USD to JPY',
        },
        {
          s: 'FX:USDCHF',
          d: 'USD to CHF',
        },
        {
          s: 'FX:AUDUSD',
          d: 'AUD to USD',
        },
        {
          s: 'FX:USDCAD',
          d: 'USD to CAD',
        },
      ],
      originalTitle: 'Forex',
    },
  ],
};

export const miniChartOptions = {
  width: '100%',
  height: 200,
  colorTheme: 'dark',
  symbol: 'FX:EURUSD',
  locale: 'en',
  dateRange: '12M',
  isTransparent: false,
  autosize: false,
  largeChartUrl: '',
};

export const screenerOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  defaultColumn: 'overview',
  defaultScreen: 'general',
  market: 'forex',
  showToolbar: true,
  locale: 'en',
};

export const singleTickerOptions = {
  colorTheme: 'dark',
  symbol: 'FX:EURUSD',
  width: 350,
  isTransparent: false,
  locale: 'en',
};

export const stockHeatMapOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
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
};

export const stockMarketOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  dateRange: '12M',
  exchange: 'US',
  showChart: true,
  locale: 'en',
  largeChartUrl: '',
  isTransparent: false,
  showSymbolLogo: false,
  showFloatingTooltip: false,
  plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
  plotLineColorFalling: 'rgba(41, 98, 255, 1)',
  gridLineColor: 'rgba(42, 46, 57, 0)',
  scaleFontColor: 'rgba(134, 137, 147, 1)',
  belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
  belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
  belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
  belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
  symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
};

export const symbolInfoOptions = {
  width: '100%',
  colorTheme: 'dark',
  symbol: 'NASDAQ:AAPL',
  locale: 'en',
  isTransparent: false,
};

export const symbolOverviewOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  symbols: [
    ['Apple', 'AAPL|1D'],
    ['Google', 'GOOGL|1D'],
    ['Microsoft', 'MSFT|1D'],
  ],
  chartOnly: false,
  locale: 'en',
  autosize: false,
  showVolume: false,
  showMA: false,
  hideDateRanges: false,
  hideMarketStatus: false,
  hideSymbolLogo: false,
  scalePosition: 'right',
  scaleMode: 'Normal',
  fontFamily: '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
  fontSize: '10',
  noTimeScale: false,
  valuesTracking: '1',
  changeMode: 'price-and-percent',
  chartType: 'area',
  maLineColor: '#2962FF',
  maLineWidth: 1,
  maLength: 9,
  lineWidth: 2,
  lineType: 0,
  dateRanges: ['1d|1', '1m|30', '3m|60', '12m|1D', '60m|1W', 'all|1M'],
};

export const technicalAnalysisOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  interval: '1m',
  isTransparent: false,
  symbol: 'NASDAQ:AAPL',
  showIntervalTabs: true,
  displayMode: 'single',
  locale: 'en',
};

export const tickerOptions = {
  colorTheme: 'dark',
  symbols: [
    { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
    { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
    { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
    { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
    { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
  ],
  isTransparent: false,
  showSymbolLogo: true,
  locale: 'en',
};

export const tickerTapeOptions = {
  colorTheme: 'dark',
  showSymbolLogo: true,
  isTransparent: false,
  displayMode: 'adaptive',
  locale: 'en',
  symbols: [
    { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
    { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
    { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
    { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
    { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
  ],
};

export const topStoriesOptions = {
  width: '100%',
  height: 450,
  colorTheme: 'dark',
  feedMode: 'all_symbols',
  isTransparent: false,
  displayMode: 'regular',
  locale: 'en',
};
