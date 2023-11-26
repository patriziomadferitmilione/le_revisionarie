<template>
  <div class="servizi">
    <h1>Servizi Editoriali</h1>
  </div>

  <div class="content">
    <p>
      Il nostro studio si impegna a seguire il testo in tutte le sue fasi di
      lavorazione per accompagnarlo nella sua trasformazione in prodotto
      editoriale: rivolgendoci sia a case editrici sia a singoli autori, ci
      occupiamo dell'editing, della correzione di bozze, dell'impaginazione, del
      ghostwriting e della formazione degli aspiranti scrittori attraverso corsi
      pensati apposta per loro.
    </p>
    <div class="grid-container">
      <div class="grid-item">
        <img src="@/assets/vue.svg" alt="Ghostwriting" />
        <h2>GHOSTWRITING</h2>
        <p>
          Se hai un'idea geniale per un libro, ma non sai come metterla nero su
          bianco, il nostro servizio di Ghostwriting fa al caso tuo!
        </p>
        <button @click="navigateTo('/ghost')">Vai alla sezione</button>
      </div>
      <div class="grid-item">
        <img src="@/assets/vue.svg" alt="Scrittura Guidata" />
        <h2>SCRITTURA GUIDATA</h2>
        <p>
          Pensato per gli scrittori che desiderano un editor sempre al tuo
          fianco, il nostro servizio di scrittura guidata renderà il tuo romanzo
          nel cassetto un prodotto pronto e competitivo per il mercato
          editoriale.
        </p>
        <button @click="navigateTo('/guided')">Vai alla sezione</button>
      </div>
      <div class="grid-item">
        <img src="@/assets/vue.svg" alt="Copywriting" />
        <h2>COPYWRITING</h2>
        <p>
          Hai un sito web o un blog e hai bisogno di una penna che ti aiuti a
          ottimizzare i tuoi contenuti in ottica SEO? Dai un'occhiata al nostro
          servizio di copywriting!
        </p>
        <button @click="navigateTo('/copy')">Vai alla sezione</button>
      </div>
      <div class="grid-item">
        <img src="@/assets/vue.svg" alt="Valutazione Manoscritti" />
        <h2>VALUTAZIONE MANOSCRITTI</h2>
        <p>
          Se hai già un libro nel cassetto e vorresti un parere professionale,
          puoi usufruire del nostro servizio di lettura integrale a cui seguirà
          l'elaborazione di una scheda valutativa.
        </p>
        <button @click="navigateTo('/assess')">Vai alla sezione</button>
      </div>
      <div class="grid-item">
        <img src="@/assets/vue.svg" alt="Correzione Bozze" />
        <h2>CORREZIONE BOZZE</h2>
        <p>
          Ci occuperemo di ripulire il testo da refusi, errori grammaticali,
          sintattici e ortografici.
        </p>
        <button @click="navigateTo('/draft')">Vai alla sezione</button>
      </div>
      <div class="grid-item">
        <img src="@/assets/vue.svg" alt="Impaginazione" />
        <h2>IMPAGINAZIONE</h2>
        <p>
          Renderemo il testo idoneo agli standard di impaginazione editoriale
          con l'utilizzo di programmi professionali.
        </p>
        <button @click="navigateTo('/layout')">Vai alla sezione</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const navigateTo = (path) => {
      router.push(path)
    }

    return { navigateTo }
  },
}
</script>
<style scoped>
.servizi {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: var(--one);
}

.content {
  padding: 1rem;
}

p {
  color: #212121;
  width: 100%;
  padding: 1rem 3rem;
  text-align: justify;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  color: #212121;
}

.grid-item img {
  margin-bottom: 20px;
}

.grid-item h2 {
  color: #cc0000;
}

.grid-item button {
  margin-top: 20px;
}
</style>
