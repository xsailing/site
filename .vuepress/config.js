module.exports = {
  host: 'localhost',
  port: 8000,
  dest: './docs',
  head: [
    ['script', { src: 'https://tajs.qq.com/stats?sId=66403914', charset: 'UTF-8' }]
  ],
  title: '远洋航行工作室',
  description: '欢迎来到远洋航行工作室',
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
