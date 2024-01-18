import { defineConfig } from 'vite'
import svg from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import components from 'unplugin-vue-components/vite'
import fonts from 'unplugin-fonts/vite'
import eslint from 'vite-plugin-eslint'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls,
        compilerOptions: {
          isCustomElement: tag => tag.includes('-') && !tag.startsWith('v-'),
        },
      },
    }),
    svg({
      defaultImport: 'component',
    }),
    vuetify(),
    components(),
    fonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
    eslint({
      lintOnStart: false,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
})
