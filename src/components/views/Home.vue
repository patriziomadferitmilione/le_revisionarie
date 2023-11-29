<template>
  <div class="home">
    <div
      style="
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <router-link class="r_link" to="/landingpage" active-class="active-link">
        <span class="navbar_titles">Landing Page</span>
      </router-link>
      <router-link class="r_link" to="/blogcreator" active-class="active-link">
        <span class="navbar_titles">Blog Creator</span>
      </router-link>
    </div>
    <!-- HEADER -->
    <w-card class="header">
      <div class="header_card">
        <p>
          Siamo Chiara Cioffi e Doralice Treglia, classe 1994.
          <br />
          <br />
          Dopo la laurea in Culture Moderne Comparate, ci siamo tuffate nel
          mondo dell'editoria lavorando come redattrici freelance per circa due
          anni.
          <br />
          <br />
          Ma questa posizione non ci dava modo di esprimere tutta la nostra
          creatività e di lavorare seguendo i nostri principi.
          <br />
          <br />
          Lo studio nasce dalla nostra <b>passione per le storie</b> e dal
          nostro desiderio di metterci dalla parte di chi le crea.
          <br />
          <br />
          <br />
          <button>Ti raccontiamo la nostra storia</button>
        </p>
        <img src="/images/IMG_5927.JPG" alt="home_header" />
      </div>
      <div class="header_card_2">
        <img src="/images/IMG_5955.JPG" alt="home_header" />

        <p>
          Ma nasce anche dalla nostra <b>amicizia</b>: è il nostro legame a dare
          un valore aggiunto al lavoro che facciamo con i nostri autori, che con
          noi possono sentirsi accolti, compresi e valorizzati.
          <br />
          <br />
          Da lettrici accanite, il nostro pane quotidiano sono le storie.
          <br />
          <br />
          Abbiamo affiancato a questa passione anni di formazione attraverso
          corsi incentrati sul mondo editoriale e sulle sue figure
          professionali.
          <br />
          <br />
          Tutte queste competenze sono messe al servizio degli autori che hanno
          una storia da raccontare e hanno bisogno di una bussola per orientarsi
          in questo universo complicato.
        </p>
      </div>
      <div class="header_card_3">
        <p>
          Il nostro intento è quello di aiutarti a trovare la tua voce come
          scrittore, e per renderlo possibile ti offriamo diversi servizi
          pensati per guidarti attraverso tutte le fasi che portano un testo a
          diventare un libro.
          <br />
          <br />
          Ti meriti la possibilità di condividere la tua storia con il mondo e
          <b>sai perché?</b> Perché <b>solo</b> tu puoi raccontarla, nessun
          altro.
        </p>
        <img src="/images/guida.jpg" alt="home_header" />
      </div>
    </w-card>

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

    <w-card class="header">
      <div class="header_card_4">
        <img src="/images/mockup.jpg" alt="home_header" />

        <div class="right">
          <p>
            Scarica gratis “Le 5 regole per un dialogo perfetto”!
            <br />
            <br />
            Iscriviti alla newsletter per scoprire come non sbagliare mai più la
            scrittura di un dialogo.
          </p>

          <form class="subscription-form">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="NOME"
              required
            />
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="COGNOME"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="INDIRIZZO E-MAIL"
              required
            />
            <button type="submit">REGISTRATI</button>
          </form>
        </div>
      </div>
    </w-card>
  </div>
</template>
<script setup></script>
<style scoped>
body::-webkit-scrollbar {
  display: none;
}
html::-webkit-scrollbar {
  display: none;
}
*::-webkit-scrollbar {
  display: none;
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  overflow: scroll;
}

.header {
  width: 100%;
  height: fit-content;
  text-align: center;
}

.header_card,
.header_card_2,
.header_card_3,
.header_card_4 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.header_card p,
.header_card_2 p,
.header_card_3 p,
.header_card_4 p {
  height: 100%;
  width: 50%;
  font-size: 22px;
}

.header_card_4 p {
  width: 80%;
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.header_card img {
  width: 30%;
}
.header_card_2 img {
  width: 40%;
}
.header_card_3 img {
  width: 30%;
}

.header_card_4 img {
  width: 50%;
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
  width: 80%;
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
  color: #fff;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.service-image img {
  max-width: 40%;
  height: auto;
}

button {
  box-shadow: none;
  width: 30%;
  background-color: var(--two);
  margin: 0;
  color: #212121;
  font-weight: bold;
}

.subscription-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.subscription-form input[type='text'],
.subscription-form input[type='email'] {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.subscription-form button {
  padding: 1rem;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: fit-content;
}

.subscription-form button:hover {
  background-color: #e60094;
}

.privacy-check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.privacy-check label {
  font-size: 0.75rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .subscription-form {
    width: 100%;
  }
}
</style>
