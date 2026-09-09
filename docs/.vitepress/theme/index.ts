import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import { useRoute } from 'vitepress'
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import 'viewerjs/dist/viewer.min.css'
import './custom.css'

const Announcement = () => h(
  'div',
  { class: 'announcement-banner' },
  '⚠️ Early alpha: this learning path is incomplete and may contain errors. Please open an issue with feedback.'
)

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('vImageViewer', vImageViewer)
  },
  setup() {
    imageViewer(useRoute())
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(Announcement)
    })
  }
} satisfies Theme
