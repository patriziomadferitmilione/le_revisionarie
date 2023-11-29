<template>
  <div class="servizi">
    <div class="header">
      <h1>Servizi Editoriali</h1>
    </div>

    <p>
      Il nostro studio si impegna a seguire il testo in tutte le sue fasi di
      lavorazione per accompagnarlo nella sua trasformazione in prodotto
      editoriale: rivolgendoci sia a case editrici sia a singoli autori, ci
      occupiamo dell'editing, della correzione di bozze, dell'impaginazione, del
      ghostwriting e della formazione degli aspiranti scrittori attraverso corsi
      pensati apposta per loro.
    </p>

    <!-- Services Section -->
    <section class="services">
      <div class="spacer"></div>
      <div class="service">
        <div class="service-content">
          <div class="service-image">
            <!-- <w-icon size="5em"> fa fa-compass</w-icon> -->
            <img src="/images/meridian.png" alt="" />
          </div>
          <h2>In Self</h2>
          <p>
            In self, ma non da solo: un percorso pensato per affiancare lo
            scrittore che vuole autopubblicarsi.
          </p>
          <br />
          <button>Scopri</button>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="service">
        <div class="service-content">
          <div class="service-image">
            <img src="/images/typewriter.png" alt="mockup" />
          </div>
          <h2>On Shelf</h2>
          <p>
            Se il tuo sogno è vedere il tuo libro sugli scaffali delle librerie,
            il primo passo e farlo uscire dal cassetto. Al resto pensiamo noi!
          </p>
          <br />
          <button>Scopri</button>
        </div>
      </div>
      <div class="spacer"></div>
    </section>
    <div class="typeform">
      <h1 style="margin-bottom: 1rem">Questionario</h1>
      <!-- Typeform embed container -->
      <div
        ref="typeformEmbed"
        data-tf-live="01HEYNMET73S4KYH8H2YB1CKVE"
        style="width: 100%; height: 500px"
      ></div>
    </div>
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
.servizi {
  width: 100%;
  text-align: center;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  background: url('/images/IMG_5963.JPG') no-repeat center center / cover;
}

.services {
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--one);
  padding: 1rem;
}

.service {
  display: flex;
  max-width: 40%;
  background: var(--white);
  box-shadow: 0 2px 5px var(--one);
  border-radius: 5px;
  text-align: center;
}

.service-content,
.service-image {
  padding: 1rem;
  flex: 1;
}

.service-content p {
  width: 90%;
  font-size: 20px;
}

.service-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.service-link {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #000;
  color: var(--white);
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.service-image img {
  max-width: 40%;
  height: auto;
}

p {
  color: #212121;
  width: 100%;
  font-size: 20px;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

h2 {
  color: #212121;
  font-size: 30px;
}
</style>
