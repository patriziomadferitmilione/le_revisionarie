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
      <!-- <router-link class="r_link" to="/blogcreator" active-class="active-link">
        <span class="navbar_titles">Blog Creator</span>
      </router-link> -->
    </div>
    <!-- HEADER -->
    <div class="onshelf">
      <div class="banner">
        <p>Siamo Chiara Cioffi e Doralice Treglia, classe 1994.</p>
        <p>
          Dopo la laurea in Culture Moderne Comparate, ci siamo tuffate nel
          mondo dell'editoria lavorando come redattrici freelance per circa due
          anni. Ma questa posizione non ci dava modo di esprimere tutta la
          nostra creatività e di lavorare seguendo i nostri principi. Lo studio
          nasce dalla nostra
          <b style="color: var(--one)">passione per le storie</b> e dal nostro
          desiderio di metterci dalla parte di chi le crea.
        </p>

        <div class="header_btn">
          <button>Ti raccontiamo la nostra storia</button>
        </div>
      </div>
    </div>
    <div class="header">
      <!-- <div class="header_row">
        <div class="header_p">
          <p>
            Siamo Chiara Cioffi e Doralice Treglia, classe 1994.
            <br />
            <br />
            Dopo la laurea in Culture Moderne Comparate, ci siamo tuffate nel
            mondo dell'editoria lavorando come redattrici freelance per circa
            due anni.
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
            <div class="header_btn"><button>Ti raccontiamo la nostra storia</button></div>
          </p>
        </div>
        <div class="header_img">
          <img src="/images/IMG_5927.JPG" alt="home_header" />
        </div>
      </div> -->
      <div class="sub_header">
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
    </div>

    <div class="img">
      <img
        style="max-height: 100vh"
        src="/images/IMG_5955.JPG"
        alt="home_header"
      />
    </div>

    <div class="header_row_3">
      <div class="header_p">
        <p>
          Il nostro intento è quello di aiutarti a
          <b style="color: var(--two)">trovare la tua voce</b> come scrittore, e
          per renderlo possibile ti offriamo diversi servizi pensati per
          guidarti attraverso tutte le fasi che portano un testo a
          <b style="color: var(--two)">diventare un libro.</b>
          <br />
          <br />
          Ti meriti la possibilità di condividere la tua storia con il mondo e
          <b style="color: var(--two)">sai perché?</b> Perché
          <b style="color: var(--two)">solo</b> tu puoi raccontarla, nessun
          altro.
        </p>
      </div>
      <div class="header_img">
        <img src="/images/chi_siamo_.png" alt="home_header" />
      </div>
    </div>

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

    <div class="bottom_form">
      <div class="form_img">
        <img src="/images/mockup.jpg" alt="home_header" />
      </div>

      <div class="form_right">
        <p>Scarica gratis “Le 5 regole per un dialogo perfetto”!</p>
        <br />
        <p>
          Iscriviti alla newsletter per scoprire come <br />
          non sbagliare mai più la scrittura di un dialogo.
        </p>
        <br />
        <form>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NOME"
            required
          />
          <label for="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="COGNOME"
            required
          />
          <label for="email">Email</label>
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
  </div>
</template>
<script setup></script>
<style scoped>
*::-webkit-scrollbar {
  display: none;
}

.onshelf {
  width: 100%;
  text-align: center;
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  background: url('/images/5960_30.png') no-repeat center center / cover;
}

.banner p:nth-child(1) {
  font-size: 3rem;
  text-align: justify;
  color: var(--one);
  text-shadow: 1px 1px 3px var(--two);
  font-weight: bold;

  margin-bottom: 0.5rem;
}
.banner p:nth-child(2) {
  font-size: 2rem;
  text-align: justify;
  margin-bottom: 0.5rem;
  text-shadow: 2.5px 2.5px 3px var(--two);
  padding: 1rem 3rem;
}
.banner p:nth-child(3) {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: scroll;
}

.header {
  width: 100%;
  height: fit-content;
  padding: 1rem;
}

.header_row,
.header_row_2,
.header_row_3 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.header_row_3 {
  width: 100vw;
  background-color: var(--one);
  height: 90vh;
}

.header_row_3 img {
  width: 40vw;
}

.header_row_3 .header_p p {
  color: var(--two);
  line-height: 1.5;
  font-size: 1.6rem;
}

.header_p {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header_p p {
  line-height: 1.4;
  font-size: 1.3rem;
  padding: 1rem 3rem;
}

.header_row .header_img img {
  width: 30vw;
  border-radius: 5px;
  box-shadow: 3px 4px 8px var(--one);
}

.header_btn {
  width: 100%;
  text-align: center;
}

.header_btn button {
  font-size: 25px;
  width: fit-content;
  padding: 1rem;
  background-color: var(--one);
  color: var(--two);
  box-shadow: 3px 4px 8px var(--one);
}

.header_btn button:hover {
  cursor: pointer;
  color: var(--one);
  background-color: var(--two);
  box-shadow: 3px 4px 8px var(--one);
}

.sub_header {
  height: 70vh;
  text-align: center;
  font-size: 25px;
  padding: 1rem 3rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 3px 15px 1px inset;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom_form {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 70vh;
  text-align: center;
}

.form_img img {
  height: 70vh;
}

.form_right {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 3rem;
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

.service-content h2 {
  font-size: 3rem;
  color: var(--one);
  text-shadow: 2px 2px 5px var(--two);
}

.service-content p {
  font-size: 1.35rem;
  padding: 1rem 2rem;
  height: 40%;
}

.service-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.service-content button {
  font-size: 1.3rem;
  width: fit-content;
  padding: 1rem;
  background-color: var(--one);
  color: var(--two);
  box-shadow: 3px 4px 8px var(--one);
  margin-bottom: 1rem;
}

.service-content button:hover {
  cursor: pointer;
  color: var(--one);
  background-color: var(--two);
  box-shadow: 3px 4px 8px var(--one);
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

.bottom_form label {
  display: none;
}

.bottom_form input[type='text'],
.bottom_form input[type='email'] {
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.bottom_form button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #e91e63;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;
}

.bottom_form button:hover {
  background-color: #c2185b;
}

.bottom_form input[type='checkbox'] {
  margin-right: 10px;
}

.img {
  padding: 3rem 2rem;
}

.img img {
  border-radius: 5px;
  box-shadow: 3px 4px 8px var(--one);
}
</style>
