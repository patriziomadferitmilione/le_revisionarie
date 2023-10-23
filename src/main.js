import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'

import App from './App.vue'

// Import WaveUI library and its styles
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import 'font-awesome/css/font-awesome.min.css'

// Import individual view components
import Home from './components/views/Home.vue'
import ChiSiamo from './components/views/ChiSiamo.vue'
import IlBlog from './components/views/IlBlog.vue'
import ServiziEditoriali from './components/views/ServiziEditoriali.vue'
import Contatti from './components/views/Contatti.vue'

// Define application routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: ChiSiamo },
  { path: '/blog', component: IlBlog },
  { path: '/services', component: ServiziEditoriali },
  { path: '/contacts', component: Contatti },
  { path: '/:catchAll(.*)', redirect: '/' },
]

// Initialize Vue router with history mode and predefined routes
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Create a new Vue application and use the router
const app = createApp(App).use(router)

// Define an empty object to hold the fetched colors
let fetchedColors = {}

// Fetch the colors.json file and populate the fetchedColors object
fetch('/colors.json')
  .then((response) => response.json())
  .then((colors) => {
    fetchedColors = colors
    // Initialize WaveUI after fetching colors
    app.use(WaveUI, {
      on: '#app',
      breakpoints: {
        xs: 600,
        sm: 900,
        md: 1200,
        lg: 1700,
        xl: 9999,
      },
      colors: fetchedColors,
      css: {},
      icons: [],
      iconsLigature: 'material-icons',
      notificationManager: {
        align: 'right',
        transition: 'default',
      },
      presets: {
        'w-button': {
          color: 'light-blue-light4',
          bgColor: 'deep-purple-light2',
          tile: true,
          outline: true,
          lg: true,
        },
        'w-accordion': { expandIconRotate90: true },
        'w-overlay': { bgColor: 'pink', opacity: 0.3 },
      },
      theme: 'dark',
    })
    // Mount the app
    app.mount('#app')
  })
  .catch((error) => console.error('Error fetching color data:', error))
