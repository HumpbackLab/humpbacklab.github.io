<script setup lang="ts">
const posts = [
  {
    title: '航模与无人机入门：一架飞机由什么组成',
    href: '/rc-beginners/01-航模与无人机入门：一架飞机由什么组成',
    description: '从整机结构出发，理解机体、动力、供电、控制和飞控之间的关系。'
  },
  {
    title: '新手如何选型：先决定飞什么，再决定买什么',
    href: '/rc-beginners/02-新手如何选型：先决定飞什么，再决定买什么',
    description: '从飞行目标反推机型和零件选择，避免参数匹配错误和重复购买。'
  },
  {
    title: '航模电子零件全解：每个器件是干什么的',
    href: '/rc-beginners/03-航模电子零件全解：每个器件是干什么的',
    description: '系统梳理航模常见电子零件的作用、输入输出关系，以及它们在整机中的位置。'
  },
  {
    title: '从摇杆到电机和舵面：整套控制链路是怎么工作的',
    href: '/rc-beginners/04-从摇杆到电机和舵面：整套控制链路是怎么工作的',
    description: '理解用户输入如何经过接收机和飞控，最终变成电机转速和舵面动作。'
  },
  {
    title: '飞控入门：飞控到底在做什么',
    href: '/rc-beginners/05-飞控入门：飞控到底在做什么',
    description: '从传感器、姿态估计和执行输出三部分理解飞控的基本职责。'
  },
  {
    title: '飞控的混控原理：为什么不同布局都能飞',
    href: '/rc-beginners/06-飞控的混控原理：为什么不同布局都能飞',
    description: '从固定翼和多旋翼的控制分配入手，理解混控的本质。'
  },
  {
    title: '认识飞行模式：自稳、手动、定高、定点、返航',
    href: '/rc-beginners/07-认识飞行模式：自稳、手动、定高、定点、返航',
    description: '理解常见飞行模式分别控制什么、依赖什么，以及它们适合什么场景。'
  },
  {
    title: '拿到一块新飞控，应该先设置什么',
    href: '/rc-beginners/08-拿到一块新飞控，应该先设置什么',
    description: '按最小可用配置思路，整理新飞控从基础设置到首飞前检查的起手流程。'
  },
  {
    title: '调参流程：从默认参数到可飞好飞',
    href: '/rc-beginners/09-调参流程：从默认参数到可飞好飞',
    description: '提供一套适合新手实践的飞控调参流程，强调观察现象、逐项修改和记录变化。'
  }
]
</script>

<template>
  <div class="rc-series-page">
    <section class="rc-series-hero">
      <p class="rc-series-kicker">入门专题</p>
      <h1>航模/无人机入门</h1>
      <p class="rc-series-lead">
        这一组文章面向刚开始接触航模、无人机和飞控的新手，按从整机认识、零件选型，到飞控原理和基础调参的顺序来写。
      </p>

      <div class="rc-series-meta">
        <span class="rc-series-meta-item">{{ posts.length }} 篇文章</span>
        <span class="rc-series-meta-item">面向入门读者</span>
        <span class="rc-series-meta-item">建议按顺序阅读</span>
      </div>
    </section>

    <section class="rc-series-intro">
      <h2>内容范围</h2>
      <p>
        内容重点放在新手真正会遇到的问题：整机由哪些部分组成，零件怎么选，信号和供电怎么走，飞控为什么能稳定飞机，拿到一块新飞控后该从哪里开始设置，以及基础调参应该怎么下手。
      </p>
    </section>

    <section class="rc-series-list">
      <div class="rc-series-list-head">
        <h2>系列文章</h2>
        <p>建议按顺序阅读。</p>
      </div>

      <div class="rc-series-grid">
        <a v-for="(post, index) in posts" :key="post.href" :href="post.href" class="rc-series-card">
          <div class="rc-series-card-top">
            <span class="rc-series-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="rc-series-arrow" aria-hidden="true">→</span>
          </div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
        </a>
      </div>
    </section>
  </div>
</template>
