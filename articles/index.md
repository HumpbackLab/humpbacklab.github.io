---
title: 文章
---

<script setup>
import { data as posts } from './posts.data.ts'
</script>

# 文章

这里会发布座头鲸实验室的技术文章、项目记录和产品更新。

## 最新文章

<div v-if="posts.length">
  <div v-for="post in posts" :key="post.url">
    <h3><a :href="post.url">{{ post.title }}</a></h3>
    <p v-if="post.date"><strong>{{ post.date }}</strong></p>
    <p v-if="post.description">{{ post.description }}</p>
  </div>
</div>

<p v-else>暂时还没有文章。</p>
