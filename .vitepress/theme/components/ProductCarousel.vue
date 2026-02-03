<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const productsData = {
  'zh-CN': {
    title: '我们的产品',
    products: [
      {
        name: 'Android-ELRS 转换器',
        description: '将安卓手机变成专业遥控器，支持虚拟摇杆和体感控制，即插即用，内置电池充电功能',
        image: '/manuals/Android-ELRS-manual/assets/1.png',
        link: '/products#android-elrs-转换器',
        manual: '/manuals/android-elrs-manual.pdf',
        buttons: {
          details: '了解详情',
          manual: '下载手册'
        }
      },
      {
        name: 'AT32F435mini 飞控',
        description: '1S 轻量级一体式飞控，集成 ELRS 接收机，适合差速固定翼和纸飞机改装',
        image: '/manuals/flight-controller-manual/assets/product-overview.png',
        link: '/products#at32f435mini-inav-飞控',
        manual: '/manuals/flight-controller-manual.pdf',
        buttons: {
          details: '了解详情',
          manual: '下载手册'
        }
      }
    ]
  },
  'en-US': {
    title: 'Our Products',
    products: [
      {
        name: 'Android-ELRS Converter',
        description: 'Transform your Android phone into a professional RC transmitter with virtual joystick and motion control, plug and play, built-in battery charging',
        image: '/manuals/Android-ELRS-manual/assets/1.png',
        link: '/en/products#android-elrs-converter',
        manual: '/manuals/android-elrs-manual.pdf',
        buttons: {
          details: 'Learn More',
          manual: 'Download Manual'
        }
      },
      {
        name: 'AT32F435mini Flight Controller',
        description: '1S lightweight integrated flight controller with ELRS receiver, suitable for differential thrust fixed-wing and paper airplane conversion',
        image: '/manuals/flight-controller-manual/assets/product-overview.png',
        link: '/en/products#at32f435mini-inav-flight-controller',
        manual: '/manuals/flight-controller-manual.pdf',
        buttons: {
          details: 'Learn More',
          manual: 'Download Manual'
        }
      }
    ]
  }
}

const currentData = computed(() => productsData[lang.value] || productsData['zh-CN'])
const title = computed(() => currentData.value.title)
const products = computed(() => currentData.value.products)

const currentIndex = ref(0)
let intervalId: number | null = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % products.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + products.value.length) % products.value.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <div class="product-carousel">
    <h2>{{ title }}</h2>

    <div class="carousel-container">
      <button class="carousel-btn prev" @click="prevSlide" aria-label="上一个">‹</button>

      <div class="carousel-content">
        <transition name="slide" mode="out-in">
          <div :key="currentIndex" class="product-slide">
            <div class="product-grid">
              <div class="product-image">
                <img :src="products[currentIndex].image" :alt="products[currentIndex].name">
              </div>
              <div class="product-info">
                <h3>{{ products[currentIndex].name }}</h3>
                <p>{{ products[currentIndex].description }}</p>
                <div class="product-actions">
                  <a :href="products[currentIndex].link" class="btn-primary">{{ products[currentIndex].buttons.details }}</a>
                  <a :href="products[currentIndex].manual" class="btn-secondary">{{ products[currentIndex].buttons.manual }}</a>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <button class="carousel-btn next" @click="nextSlide" aria-label="下一个">›</button>
    </div>

    <div class="carousel-dots">
      <button
        v-for="(product, index) in products"
        :key="index"
        :class="['dot', { active: currentIndex === index }]"
        @click="goToSlide(index)"
        :aria-label="`第 ${index + 1} 个产品`"
      />
    </div>
  </div>
</template>

<style scoped>
.product-carousel {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 24px;
}

.product-carousel h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--vp-c-text-1);
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.carousel-content {
  flex: 1;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.product-slide {
  padding: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.product-info h3 {
  font-size: 1.75rem;
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
}

.product-info p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.product-actions {
  display: flex;
  gap: 1rem;
}

.product-actions a {
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background: var(--vp-c-brand);
  color: white;
}

.btn-primary:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.btn-secondary {
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.btn-secondary:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.carousel-btn {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--vp-c-divider);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.dot:hover {
  border-color: var(--vp-c-brand);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .carousel-btn {
    display: none;
  }
}
</style>
