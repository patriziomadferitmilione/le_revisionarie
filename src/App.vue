<script>
import Home from './components/views/Home.vue'
import Navbar from './components/Navbar.vue'
import Bottom from './components/Bottom.vue'

export default {
  components: {
    Navbar,
    Bottom,
  },
}
</script>

<template>
  <Navbar />
  <router-view class="view" />
  <Bottom />
</template>

<style scoped>
.view {
  min-height: 75vh;
  padding-top: 15vh;
  background: var(--white);
}
</style>
