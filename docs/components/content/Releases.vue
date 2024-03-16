<template>
  <div>releases</div>
  <Chart
    :options="{
      width: '980',
      height: '610',
      symbol: 'NASDAQ:AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      transparent: true,
      // backgroundColor: 'rgba(0, 0, 0, 0)',
      // gridColor: 'rgba(66, 66, 66, 0.06)',
      allow_symbol_change: true,
      calendar: false,
      support_host: 'https://www.tradingview.com',
    }" />

  <SingleTicker
    :options="{
      symbol: 'FX:EURUSD',
      width: 350,
      isTransparent: true,
      colorTheme: 'dark',
      locale: 'en',
    }" />
  <!-- <GithubReleases v-slot="{ releases }">
    <div v-for="release in releases" :key="release.name">
      <ProseH2 :id="release.name">
        <Badge :type="release.prerelease ? 'warning' : 'info'">
          {{ release.prerelease ? "Pre-release" : "Release" }} </Badge
        >{{ release.name }}
      </ProseH2>
      <details>
        <summary>
          Published on {{ new Date(release.date).toDateString() }}
        </summary>
        <ContentRenderer :value="release" />
      </details>
    </div>
  </GithubReleases> -->
</template>
