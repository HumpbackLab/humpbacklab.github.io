import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "座头鲸工作室",
      description: "HumpbackLab",
      themeConfig: {
        logo: '/logo.png',
        nav: [
          { text: '首页', link: '/' },
          {
            text: '产品',
            items: [
              { text: 'Android-ELRS 转换器', link: '/android-elrs' },
              { text: 'AT32F435mini 飞控', link: '/at32f435mini' }
            ]
          }
        ],
        sidebar: [],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HumpbackLab' }
        ],
        footer: {
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
              { text: 'Android-ELRS Converter', link: '/en/android-elrs' },
              { text: 'AT32F435mini Flight Controller', link: '/en/at32f435mini' }
            ]
          }
        ],
        sidebar: [],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HumpbackLab' }
        ],
        footer: {
          copyright: 'Copyright © 2026-present HumpbackLab'
        }
      }
    }
  }
})
