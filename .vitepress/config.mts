import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "座头鲸工作室",
      description: "HumpbackLab",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '产品介绍', link: '/products' },
          { text: '用户手册', link: '/manuals' }
        ],
        sidebar: [],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HumpbackLab' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'HumpbackLab',
      description: 'Lightweight Flight Control Solutions',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Products', link: '/en/products' },
          { text: 'Manuals', link: '/en/manuals' }
        ],
        sidebar: [],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/HumpbackLab' }
        ]
      }
    }
  }
})
