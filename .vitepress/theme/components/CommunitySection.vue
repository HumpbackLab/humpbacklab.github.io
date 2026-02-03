<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const content = {
  'zh-CN': {
    title: '💬 加入社区',
    items: [
      {
        icon: '💻',
        title: 'GitHub',
        description: '开源代码与讨论',
        link: 'https://github.com/HumpbackLab',
        linkText: '访问组织 →'
      },
      {
        icon: '📺',
        title: 'Bilibili',
        description: '教程与演示视频',
        link: 'https://space.bilibili.com/3690979722791130',
        linkText: '关注我们 →'
      },
      {
        icon: '💬',
        title: 'QQ 群',
        description: '技术交流与答疑',
        link: '',
        linkText: '即将开放'
      }
    ]
  },
  'en-US': {
    title: '💬 Join Community',
    items: [
      {
        icon: '💻',
        title: 'GitHub',
        description: 'Open Source & Discussions',
        link: 'https://github.com/HumpbackLab',
        linkText: 'Visit Organization →'
      },
      {
        icon: '📺',
        title: 'YouTube',
        description: 'Tutorials & Demos',
        link: '#',
        linkText: 'Subscribe →'
      },
      {
        icon: '💬',
        title: 'Discord',
        description: 'Tech Chat & Support',
        link: '',
        linkText: 'Coming Soon'
      }
    ]
  }
}

const currentContent = computed(() => content[lang.value] || content['zh-CN'])
</script>

<template>
  <div class="community-section">
    <h2>{{ currentContent.title }}</h2>
    <div class="community-grid">
      <div v-for="(item, index) in currentContent.items" :key="index" class="community-card">
        <div class="icon">{{ item.icon }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <a v-if="item.link" :href="item.link" target="_blank">{{ item.linkText }}</a>
        <span v-else class="coming-soon">{{ item.linkText }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.community-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 24px;
}

.community-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
}

.community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.community-card {
  text-align: center;
  padding: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s;
}

.community-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.community-card h3 {
  margin: 0.5rem 0;
  color: var(--vp-c-text-1);
}

.community-card p {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.community-card a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.3s;
}

.community-card a:hover {
  color: var(--vp-c-brand-dark);
}

.coming-soon {
  color: var(--vp-c-brand);
}
</style>
