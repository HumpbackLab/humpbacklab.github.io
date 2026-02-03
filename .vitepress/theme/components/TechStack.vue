<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const content = {
  'zh-CN': {
    title: '🤝 基于优秀开源项目',
    projects: [
      { icon: '🛩️', name: 'INAV', description: '飞控固件', link: 'https://github.com/iNavFlight/inav' },
      { icon: '📡', name: 'ExpressLRS', description: '无线链路', link: 'https://github.com/ExpressLRS/ExpressLRS' },
      { icon: '⚡', name: 'VitePress', description: '网站构建', link: 'https://vitepress.dev/' },
      { icon: '📝', name: 'Typst', description: '文档排版', link: 'https://typst.app/' }
    ]
  },
  'en-US': {
    title: '🤝 Built on Open Source',
    projects: [
      { icon: '🛩️', name: 'INAV', description: 'Flight Controller', link: 'https://github.com/iNavFlight/inav' },
      { icon: '📡', name: 'ExpressLRS', description: 'RC Link', link: 'https://github.com/ExpressLRS/ExpressLRS' },
      { icon: '⚡', name: 'VitePress', description: 'Site Generator', link: 'https://vitepress.dev/' },
      { icon: '📝', name: 'Typst', description: 'Document Typesetting', link: 'https://typst.app/' }
    ]
  }
}

const currentContent = computed(() => content[lang.value] || content['zh-CN'])
</script>

<template>
  <div class="tech-stack">
    <h2>{{ currentContent.title }}</h2>
    <div class="tech-container">
      <a
        v-for="(project, index) in currentContent.projects"
        :key="index"
        :href="project.link"
        target="_blank"
        class="tech-item"
      >
        <div class="tech-icon">{{ project.icon }}</div>
        <strong>{{ project.name }}</strong>
        <span>{{ project.description }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.tech-stack {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 24px;
}

.tech-stack h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
}

.tech-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.3s;
  padding: 1rem;
  border-radius: 8px;
}

.tech-item:hover {
  background: var(--vp-c-bg);
  transform: translateY(-4px);
}

.tech-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.tech-item strong {
  margin-bottom: 0.25rem;
}

.tech-item span {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
</style>
