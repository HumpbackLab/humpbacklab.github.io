import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Website",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '用户手册', link: '/manuals' }
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HumpbackLab/website' }
    ]
  }
})
