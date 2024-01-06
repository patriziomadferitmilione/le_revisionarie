<template>
  <div class="contatti">
    <div class="content">
      <div class="image-section">
        <img src="/images/IMG_5927.JPG" alt="contatti" />
      </div>
      <div class="text-section">
        <p>
          Da sogno nel cassetto a libro dei tuoi sogni <br />
          <br />
          Contattaci per renderlo possibile! <br /><br />
          Prenota la tua call conoscitiva
        </p>
      </div>
    </div>
    <div class="cal">
      <div v-html="tidyCalEmbedHTML"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // TidyCal embed HTML
      tidyCalEmbedHTML:
        '<div class="tidycal-embed" data-path="1dyv6k1/call"></div>',
      // TidyCal script URL
      tidyCalScriptSrc: 'https://assets.tidycal.com/js/embed.js',
    }
  },
  mounted() {
    // Load the TidyCal script dynamically
    const script = document.createElement('script')
    script.src = this.tidyCalScriptSrc
    script.async = true
    document.body.appendChild(script)
  },
}
</script>
<style scoped>
.contatti {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120vh;
  background-color: var(--white);
  font-family: 'DM Sans';
}

.content .image-section,
.content .text-section {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content .image-section img {
  box-shadow: 3px 4px 8px var(--one);
  border-radius: 5px;
  max-width: 70%;
}

.content .text-section p {
  font-size: 2.5rem;
}

.cal {
  width: 100%;
  height: 115vh;
}

.cal iframe {
  box-shadow: 3px 4px 8px var(--one);
  border-radius: 5px;
}
</style>
