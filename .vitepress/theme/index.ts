import DefaultTheme from 'vitepress/theme'
import ProductCarousel from './components/ProductCarousel.vue'
import CommunitySection from './components/CommunitySection.vue'
import RcSeriesLanding from './components/RcSeriesLanding.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProductCarousel', ProductCarousel)
    app.component('CommunitySection', CommunitySection)
    app.component('RcSeriesLanding', RcSeriesLanding)
  }
}
