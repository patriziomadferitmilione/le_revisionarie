<template>
  <div class="home">
    <!-- HEADER -->
    <w-card class="header" shadow>
      <div class="inside">
        <h1>Studio Editoriale</h1>
        <p>
          Il supporto di cui hai bisogno per trasformare il tuo manoscritto in
          un libro pronto per il mercato editoriale.
        </p>
        <div class="btns">
          <button>Servizi Editoriali</button>
          <button>Iscriviti alla Newsletter</button>
        </div>
      </div>
    </w-card>

    <div class="spacer" style="height: 5vh"></div>

    <!-- CARDS SERVICES-->
    <w-flex wrap class="text-center cards">
      <!-- First Card -->
      <w-flex-item class="lg4 md12 sm12 xs12 pa1">
        <w-card class="card ml3" shadow bg-color="error-dark2">
          <w-icon size="3em" class="card_icon" color="white">
            fa fa-cubes
          </w-icon>
          &nbsp;
          <div class="inside_card">
            <h1>Servizi Editoriali</h1>
            <p>Scopri tutti i servizi offerti dallo studio</p>
            <button>Scopri di più</button>
          </div>
        </w-card>
      </w-flex-item>

      <!-- Second Card -->
      <w-flex-item class="lg4 md12 sm12 xs12 pa1">
        <w-card class="card ml3" shadow bg-color="tranparent">
          <w-icon size="3em" class="card_icon"> fa fa-commenting-o </w-icon>
          &nbsp;
          <div class="inside_card2">
            <h1>Chi Siamo</h1>
            <p>
              Qualche informazione sulle menti che si celano dietro il nostro
              progetto
            </p>
            <button>Conosciamoci</button>
          </div>
        </w-card>
      </w-flex-item>

      <!-- Third Card -->
      <w-flex-item class="lg4 md12 sm12 xs12 pa1">
        <w-card class="card ml3" shadow bg-color="black">
          <w-icon size="3em" class="card_icon" color="error-dark2">
            fa fa-paper-plane
          </w-icon>
          &nbsp;
          <div class="inside_card3">
            <h1>Scrivici</h1>
            <p>Tutti i modi in cui puoi metterti in contatto con noi</p>
            <button>Scrivici</button>
          </div>
        </w-card>
      </w-flex-item>
    </w-flex>

    <div class="spacer" style="height: 10vh"></div>

    <!-- CARDS PEOPLE -->
    <w-flex wrap class="text-center cards" style="width: 100vw">
      <h1>Il nostro campo d’azione</h1>
      <p class="blog_sub">
        Il progetto Le Revisionarie nasce nel 2021 con l’obiettivo di lavorare
        al fianco degli aspiranti scrittori nel loro percorso di creazione e di
        aiutarli a trasformare la loro idea in un libro. I servizi offerti dallo
        Studio coprono diverse fasi di lavorazione, dalla progettazione
        all’editing, dalla redazione alla revisione, passando anche attraverso
        la formazione e il coaching. Crediamo fermamente che non si nasca
        scrittori, ma che sia possibile diventarlo attraverso la dedizione e
        l’impegno.
      </p>
      <!-- First Card -->
      <w-flex-item class="lg4 md12 sm12 xs12 pa1">
        <w-card class="card_people ml3" shadow bg-color="error-dark2">
          <div class="inside_card"></div>
          <w-toolbar class="card_bottom" bottom shadow>
            <div class="title2">Doralice Treglia</div>
            <a
              class="social"
              href="https://www.linkedin.com/in/doralice-treglia-640ab9192/"
              target="_blank"
              ><w-icon color="white" size="1.5em"> fa fa-linkedin </w-icon></a
            >
            &nbsp;
            <a href="doralice.treglia@lerevisionarie.com">
              <w-icon size="1em"> fa fa-envelope </w-icon>
              &nbsp; doralice.treglia@lerevisionarie.com</a
            >
          </w-toolbar>
        </w-card>
      </w-flex-item>

      <!-- Second Card -->
      <w-flex-item class="lg4 md12 sm12 xs12 pa1">
        <w-card class="card_people2 ml3" shadow bg-color="tranparent">
          <div class="inside_card2"></div>
          <w-toolbar class="card_bottom" bottom shadow>
            <div class="title2">Chiara Cioffi</div>
            <a
              class="social"
              href="https://www.linkedin.com/in/chiara-cioffi-978427140/?originalSubdomain=it"
              target="_blank"
              ><w-icon color="white" size="1.5em"> fa fa-linkedin </w-icon></a
            >
            &nbsp;
            <a href="chiara.cioffi@lerevisionarie.com">
              <w-icon size="1em"> fa fa-envelope </w-icon>
              &nbsp; chiara.cioffi@lerevisionarie.com</a
            >
          </w-toolbar>
        </w-card>
      </w-flex-item>

      <!-- Third Card -->
      <w-flex-item class="lg4 md12 sm12 xs12 pa1">
        <w-card class="card_people3 ml3" shadow bg-color="black">
          <div class="inside_card3"></div>
          <w-toolbar class="card_bottom" bottom shadow>
            <div class="title2">Elisa Cioffi</div>
            <a
              class="social"
              href="https://www.linkedin.com/in/elisa-cioffi-991658253/"
              target="_blank"
              ><w-icon color="white" size="1.5em"> fa fa-linkedin </w-icon></a
            >
            &nbsp;
            <a href="elisa.cioffi@lerevisionarie.com">
              <w-icon size="1em"> fa fa-envelope </w-icon>
              &nbsp; elisa.cioffi@lerevisionarie.com</a
            >
          </w-toolbar>
        </w-card>
      </w-flex-item>
    </w-flex>

    <div class="spacer" style="height: 60vh"></div>

    <!-- BLOG POSTS -->
    <w-flex wrap class="text-center">
      <div
        class="text-center"
        style="width: 100vw; margin-top: 25vh; margin-bottom: 5vh, text-align: justify"
      >
        <h1>Il Blog</h1>
        <br />
        <p>
          In questa sezione trovi la raccolta di tutti gli articoli di
          approfondimento su scrittura, editoria e storytelling.
        </p>
      </div>
      <w-flex-item
        v-for="(card, index) in cards"
        :key="index"
        class="blog_card lg3 md6 sm12 xs12 pa1"
      >
        <w-card shadow bg-color="error-dark2">
          <img :src="card.image" alt="Blog post image" class="card-image" />
          <w-toolbar class="card_bottom_blog" bottom shadow>
            <div class="blog_title">{{ card.title }}</div>
            <p class="blog_content">{{ card.content.slice(0, 30) }}...</p>
          </w-toolbar>
        </w-card>
      </w-flex-item>
    </w-flex>

    <div style="height: 10vh"></div>

    <w-card bg-color="error-dark2" class="news" shadow>
      <div class="form">
        <!-- Your alert component -->
        <w-alert :success="success" :error="error" :info="!success && !error">
          {{
            !success && !error
              ? 'The form is still pristine'
              : success
              ? 'Success'
              : 'Error'
          }}
        </w-alert>

        <p>The form has been validated {{ validated }} time(s).</p>

        <w-form
          @validate="handleValidate"
          @success="handleSuccess"
          @error="handleError"
        >
          <w-input label="Name" :validators="[validators.required]"></w-input>
          <w-input
            class="mt3"
            label="Surname"
            :validators="[validators.required]"
          ></w-input>
          <w-input
            class="mt3"
            label="Email"
            :validators="[validators.required, validators.email]"
          ></w-input>

          <button type="submit">Iscriviti</button>
        </w-form>
      </div>
    </w-card>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const success = ref(null)
const error = ref(null)
const validated = ref(0)

const validators = {
  required: (value) => !!value || 'This field is required',
  email: (value) => /.+@.+\..+/.test(value) || 'Invalid email',
}

const handleValidate = () => {
  validated.value++
  success.value = error.value = false
}

const handleSuccess = () => {
  success.value = true
}

const handleError = () => {
  error.value = true
}

// Fake data to populate the cards
const cards = ref([
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_1.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_2.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_3.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_4.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_5.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_6.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_7.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_8.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_9.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_10.jpg',
  },
  {
    title: 'Titolo articolo',
    content: "Inizio dell'articolo...",
    image: '../../../images/blog_post_11.jpg',
  },
])
</script>
<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  overflow: scroll;
}

.header {
  text-align: center;
  background: url('../../../images/copertina.png') no-repeat center center /
    100% 400px;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
}

.inside {
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  left: -10%;
}

.inside p {
  font-size: 22px;
  width: 50%;
  margin: 0.5rem;
}

.btns {
  bottom: 0;
  position: absolute;
}

.cards {
  height: 50vh;
  justify-content: center;
  align-items: center;
}

.card {
  height: 35vh;
  width: 60vh;
  color: black;
}

.card h1 {
  color: black;
}

.inside_card button {
  background: white;
  color: black;
  font-weight: bold;
}
.inside_card2 button {
  background: black;
  color: white;
  font-weight: bold;
}
.inside_card3 button {
  background: #a60505;
  color: white;
  font-weight: bold;
}

.inside_card3,
.inside_card3 > h1 {
  color: white;
}

.inside_card,
.inside_card2,
.inside_card3 {
  position: relative;
}

.inside_card h1,
.inside_card2 h1,
.inside_card3 h1 {
  position: absolute;
  top: 12%;
}

.inside_card button,
.inside_card2 button,
.inside_card3 button {
  width: 10rem;
  position: absolute;
  bottom: 5%;
}

.inside_card,
.inside_card2,
.inside_card3 {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card_icon {
  position: absolute;
  top: 5;
  left: 3%;
}

.card_people {
  background: url('../../../images/people1.jpg') no-repeat center center / 100%;
}

.card_people2 {
  background: url('../../../images/people2.jpg') no-repeat center center / 100%;
}

.card_people3 {
  background: url('../../../images/people3.jpg') no-repeat center center / 100%;
}

.card_people,
.card_people2,
.card_people3 {
  height: 74vh;
  width: 65vh;
}

.card_bottom {
  height: 20vh;
  width: 60vh;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card_bottom .title2 {
  font-weight: bold;
  color: white;
}

.social:hover {
  transform: scale(1.3);
}

.news {
  width: 100vw;
  height: fit-content;
  padding: 1rem;
}

.card-image {
  width: 100%;
  height: auto;
}

.blog_card {
  max-height: 50vh;
}

.blog_sub {
  font-size: 20px;
  padding: 2rem 5rem;
  text-align: justify;
}
</style>
