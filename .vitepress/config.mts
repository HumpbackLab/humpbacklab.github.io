import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "座头鲸实验室",
      description: "HumpbackLab",
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: '首页', link: '/' },
          {
            text: '产品',
            items: [
              { text: 'PocketTX', link: '/pockettx' },
              { text: 'LightFin', link: '/lightfin' }
            ]
          },
          { text: '开源项目与贡献', link: '/open-source' },
          { text: 'AT32 WebISP', link: 'https://humpbacklab.github.io/AT32-WebISP/' }
        ],
        sidebar: [],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HumpbackLab' }
        ],
        footer: {
          message: '<a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备20002143号</a>',
          copyright: 'Copyright © 2026-present HumpbackLab'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'HumpbackLab',
      description: 'Lightweight Flight Control Solutions',
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Products',
            items: [
              { text: 'PocketTX', link: '/en/pockettx' },
              { text: 'LightFin', link: '/en/lightfin' }
            ]
          },
          { text: 'Open Source', link: '/en/open-source' },
          { text: 'AT32 WebISP', link: 'https://humpbacklab.github.io/AT32-WebISP/' }
        ],
        sidebar: [],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HumpbackLab' }
        ],
        footer: {
          message: '<a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备20002143号</a>',
          copyright: 'Copyright © 2026-present HumpbackLab'
        }
      }
    }
  }
})
