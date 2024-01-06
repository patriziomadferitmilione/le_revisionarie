<template>
  <div class="servizi">
    <div class="header">
      <h1>Servizi Editoriali</h1>
    </div>

    <div class="sub_header">
      <p>
        È arrivato il momento di trasformare il tuo libro nel cassetto nel libro
        dei tuoi sogni. <br />
        Per farlo, hai davanti a te due strade da seguire: sta a te scegliere
        qual è quella che fa al caso tuo.
      </p>
      <br />
      <br />
      <h3>Scopri il percorso più adatto a te!</h3>
    </div>

    <!-- Services Section -->
    <section class="services">
      <div class="service">
        <img src="/images/meridian.png" alt="" />
        <h2>In Self</h2>
        <p>
          In self, ma non da solo: un percorso <br />
          pensato per affiancare lo scrittore che vuole autopubblicarsi.
        </p>
        <router-link class="path_btn" to="/inself">
          <button>Scopri</button>
        </router-link>
      </div>
      <div class="service">
        <img src="/images/typewriter.png" alt="mockup" />
        <h2>On Shelf</h2>
        <p>
          Se il tuo sogno è vedere il tuo libro sugli <br />
          scaffali delle librerie, il primo passo e farlo uscire dal cassetto.
          Al resto pensiamo noi!
        </p>
        <router-link class="path_btn" to="/onshelf">
          <button>Scopri</button>
        </router-link>
      </div>
    </section>

    <div class="typeform">
      <h2>Lavoriamo insieme sul tuo libro</h2>
      <!-- Router Link replacing the button -->
      <router-link class="path_btn" to="/contacts">
        <button>Contattaci</button>
      </router-link>
      <br />
      <h3>
        Se non sei sicuro di quale strada intraprendere, <br />
        scoprilo con il nostro questionario
      </h3>
      <br />
      <!-- Typeform embed container -->
      <div
        ref="typeformEmbed"
        data-tf-live="01HEYNMET73S4KYH8H2YB1CKVE"
        style="
          width: 95%;
          height: 500px;
          box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
            rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
          border-radius: 5px;
          border: none;
        "
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
  height: 90vh;
  width: 100%;
  background: url('/images/5963_60.png') no-repeat center center / cover;
}

.header h1 {
  font-size: 200px;
  color: var(--one);
  font-family: 'Covered By Your Grace';
  text-shadow: 10px 0 10px var(--two);
}

.sub_header {
  height: 40vh;
  text-align: center;
  font-size: 25px;
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 3px 15px 1px inset;
}

.services {
  height: 100vh;
  display: flex;
  background-color: var(--one);
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.service {
  display: flex;
  max-width: 40%;
  height: 70vh;
  background: var(--white);
  box-shadow: 0 2px 5px var(--one);
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.service img {
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service h2 {
  font-family: 'Roboto Slab', serif;

  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}

.service p {
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  padding: 0 3rem;
}

.service .path_btn {
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.service .path_btn button {
  width: 50%;
  height: 60%;
  font-size: 20px;
}

button:hover {
  color: #212121;
  background-color: var(--two);
  cursor: pointer;
}

h3 {
  font-family: 'Roboto Slab', serif;
}

.typeform {
  height: 115vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: var(--one) 0px 2px 4px 0px, var(--one) 0px 2px 16px 0px inset;
}

.typeform h2 {
  font-size: 2.5rem;
}
.typeform h3 {
  font-size: 2rem;
  font-family: 'DM Sans', sans-serif;
}

.path_btn button {
  width: 20vw;
  height: 6vh;
  font-size: 20px;
}

.path_btn button:hover {
  color: #212121;
  background-color: var(--two);
  cursor: pointer;
}
</style>
