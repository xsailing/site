module.exports = {
  host: 'localhost',
  port: 8000,
  dest: './docs',
  base: '/',
  head: [],
  title: 'V',
  description: 'We produce remarkable software.',
  themeConfig: {
    search: false,
    sidebar: 'auto',
    nav: [
    ],
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
  ],
}
