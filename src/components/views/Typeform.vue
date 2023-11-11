<template>
  <div class="typeform">
    <h1 style="margin-bottom: 1rem">TypeForm</h1>
    <!-- Typeform embed container -->
    <div
      ref="typeformEmbed"
      data-tf-live="01HEYNMET73S4KYH8H2YB1CKVE"
      style="width: 100%; height: 500px"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const typeformEmbed = ref(null)

onMounted(() => {
  const script = document.createElement('script')
  script.src = '//embed.typeform.com/next/embed.js'
  script.async = true
  script.defer = true

  document.head.appendChild(script)
})
</script>

<style scoped>
.typeform {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
