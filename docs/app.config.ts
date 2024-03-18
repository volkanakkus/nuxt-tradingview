export default defineAppConfig({
  github: {
    owner: 'Volkan Akkuş',
    repo: 'nuxt-tradingview',
    branch: 'main',
  },
  docus: {
    title: 'Nuxt TradingView',
    description: '💸 Use TradingView Widgets in your Nuxt 3 Application',
    image: '/preview.jpg',
    url: 'https://nuxt-tradingview.volkanakkus.com/',
    socials: {
      twitter: 'volkanakks',
      github: 'volkanakkus/nuxt-tradingview',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com',
      },
    },
    aside: {
      level: 1,
    },
    github: {
      dir: 'docs/content',
      root: 'docs/content',
      edit: true,
      releases: true,
      owner: 'volkanakkus',
      repo: 'nuxt-tradingview',
      branch: 'main',
    },
    cover: {
      src: '/preview.png',
      alt: 'Use TradingView Widgets in your Nuxt 3 Application',
    },
    header: {
      logo: true,
    },
  },
});
