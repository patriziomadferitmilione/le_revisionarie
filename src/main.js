import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'

import App from './App.vue'

// Import WaveUI library and its styles
// import WaveUI from 'wave-ui'
// import 'wave-ui/dist/wave-ui.css'
// import 'font-awesome/css/font-awesome.min.css'

// Import Material Design icons
// import 'material-design-icons/iconfont/material-icons.css'

// Define application routes
// const routes = [{ path: '/', component: App }]

// // Initialize Vue router with history mode and predefined routes
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

// Create a new Vue application and use the router
const app = createApp(App)
//.use(router)

// // Define an empty object to hold the fetched colors
// let fetchedColors = {}

// // Fetch the colors.json file and populate the fetchedColors object
// fetch('/colors.json')
//   .then((response) => response.json())
//   .then((colors) => {
//     fetchedColors = colors
//   })
//   .catch((error) => console.error('Error fetching color data:', error))

// app.use(WaveUI, {
//   on: '#app',
//   breakpoints: {
//     xs: 600,
//     sm: 900,
//     md: 1200,
//     lg: 1700,
//     xl: 9999,
//   },
//   colors: fetchedColors, // Using the fetched colors
//   css: {},
//   icons: [],
//   iconsLigature: 'material-icons',
//   notificationManager: {
//     align: 'right',
//     transition: 'default',
//   },
//   presets: {
//     'w-button': {
//       color: 'light-blue-light4',
//       bgColor: 'deep-purple-light2',
//       tile: true,
//       outline: true,
//       lg: true,
//     },
//     'w-accordion': { expandIconRotate90: true },
//     'w-overlay': { bgColor: 'pink', opacity: 0.3 },
//   },
//   theme: 'dark',
// })
app.mount('#app')
