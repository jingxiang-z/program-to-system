import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'From Program to System',
  description: 'A learning path from program execution to distributed systems',
  base: '/program-to-system/',
  themeConfig: {
    nav: [
      { text: 'Learning Path', link: '/01-execution/' },
      { text: 'Examples', link: '/examples' },
      { text: 'Capstone', link: '/capstone' },
      { text: 'Community', link: '/community' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Learning Path',
        items: [
          { text: '01 Execution', link: '/01-execution/' },
          { text: '02 Processes', link: '/02-processes/' },
          { text: '03 Memory', link: '/03-memory/' },
          { text: '04 Concurrency', link: '/04-concurrency/' },
          { text: '05 Networking', link: '/05-networking/' },
          { text: '06 Storage', link: '/06-storage/' },
          { text: '07 Distributed Systems', link: '/07-distributed/' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Examples', link: '/examples' },
          { text: 'Distributed Key-Value Store', link: '/capstone' },
          { text: 'Community Notes', link: '/community' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jingxiang-z/program-to-system' }
    ],
    editLink: {
      pattern: 'https://github.com/jingxiang-z/program-to-system/edit/main/docs/:path'
    },
    footer: {
      copyright: 'Documentation licensed under CC BY 4.0. Source code licensed under MIT.'
    }
  }
})
