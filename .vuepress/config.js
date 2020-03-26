module.exports = {
  host: 'localhost',
  port: 8000,
  dest: './docs',
  base: '/site/',
  head: [
    ['script', { src: 'https://tajs.qq.com/stats?sId=66403914', charset: 'UTF-8' }]
  ],
  title: 'Ocean Sailing Studio',
  description: 'We produce remarkable software.',
  themeConfig: {
    search: false,
    // repo: 'purocean/blog',
    // lastUpdated: 'Last Updated',
    sidebar: 'auto',
    nav: [
      // { text: '首页', link: '/' },
      // { text: '分类', link: '/category/' },
      // { text: '标签', link: '/tag/' },
    ],
    footer: 'Copyright © 2019-2020 Ocean Sailing Studio'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    // '@vuepress/pagination',
    // '@vuepress/active-header-links',
    // ['@vuepress/plugin-blog', {postsDir: 'blog'}],
  ],
}
