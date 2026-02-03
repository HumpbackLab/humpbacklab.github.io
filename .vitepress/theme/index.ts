import DefaultTheme from 'vitepress/theme'
import ProductCarousel from './components/ProductCarousel.vue'
import CommunitySection from './components/CommunitySection.vue'
import TechStack from './components/TechStack.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProductCarousel', ProductCarousel)
    app.component('CommunitySection', CommunitySection)
    app.component('TechStack', TechStack)
  }
}
