<template>
  <div class="onshelf">
    <div class="header">
      <h2>percorso</h2>
      <h1>In Self</h1>
    </div>

    <div class="sub_header" style="background-color: var(--four); height: 60vh">
      <p style="color: var(--two); font-size: 2.5rem">
        Diciamolo forte e chiaro:
      </p>
      <p style="color: var(--two); font-size: 3.5rem">
        IL SELF-PUBLISHING NON È L'ULTIMA SPIAGGIA DI CHI NON È RIUSCITO A
        PUBBLICARE ALTROVE.
      </p>
    </div>

    <div class="content_header">
      <h2 class="content_header_title">Percorso In Self</h2>
      <div class="content">
        <div class="image-section">
          <img src="/images/IMG_6132.JPG" alt="onshelf" />
        </div>
        <div class="text-section">
          <br />
          <p>
            L'editoria moderna sta cominciando a riconoscere al mondo del self e
            della letteratura indie il suo giusto merito, andando ad abbattere
            <b style="color: var(--one)">giudizi e stereotipi </b>.
          </p>
          <br />
          <p>
            Forse anche tu sei tentato di approcciarti al mondo del
            self-publishing, ma non vuoi essere visto come
            <b style="color: var(--one)">lo scrittore che non ce l'ha fatta</b>
            con l'editoria tradizionale e quindi, rifiutato da tutti, decide di
            autopubblicarsi.
          </p>
          <br />
          <p>
            Se è così, siamo felici di comunicarti che puoi anche
            <b style="color: var(--one)">smettere di tormentarti</b>:
            fortunatamente, il mondo della letteratura indipendente sta
            cominciando a godere del riconoscimento che merita!
          </p>
        </div>
      </div>
    </div>

    <div class="content_header">
      <div class="content">
        <div class="image-section-2">
          <img src="/images/IMG_6136.JPG" alt="onshelf" />
        </div>
        <div class="text-section">
          <br />
          <p>
            Pubblicare in self-publishing, oggi, vuol dire potersi avvalere di
            <b style="color: var(--one)">guadagni maggiori</b>, avere un solido
            <b style="color: var(--one)">controllo sulle vendite</b> del tuo
            libro e poter partecipare in prima persona al processo di
            <b style="color: var(--one)">creazione del libro</b> stesso.
          </p>
          <br />
          <p>
            Inoltre, sono sempre di più i
            <b style="color: var(--one)">librai</b> che si mostrano solidali con
            gli autori indie, e decidono di accogliere nelle loro librerie testi
            non provenienti da case editrici, ma sponsorizzati dai singoli
            autori.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.onshelf {
  width: 100%;
  text-align: center;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  background: url('/images/6132_60.png') no-repeat center center / cover;
}

.header h1 {
  font-size: 200px;
  color: var(--four);
  font-family: 'Covered By Your Grace';
  text-shadow: 10px 0 10px var(--two);
}

.header h2 {
  font-size: 40px;
  color: var(--four);
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

.sub_header_bottom {
  height: 40vh;
  text-align: center;
  font-size: 40px;
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 3px 15px 1px inset;
}

.sub_header p {
  line-height: 1.4;
}

h1 {
  font-size: 50px;
  color: var(--white);
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content:nth-child(1) {
  background: linear-gradient(to top right, var(--two) 50%, var(--white) 50%);
}
.content:nth-child(2) {
  background: linear-gradient(to top left, var(--two) 50%, var(--white) 50%);
}

.content_header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
}

.content_header_title {
  font-size: 40px;
  color: var(--one);
  position: absolute;
  z-index: 100;
  top: 5%;
  left: 13%;
}

.content .image-section,
.content .image-section-2 {
  order: 2;
}

.text-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image-section,
.image-section-2 {
  flex: 1;
  padding: 1rem;
}

.image-section img,
.image-section-2 img {
  max-width: 99%;
  border-radius: 5px;
  box-shadow: 3px 4px 8px var(--one);
}

.text-section h2,
.text-section h1 {
  font-size: 2em;
  color: #000;
  margin-bottom: 0.5em;
  font-family: 'Roboto Slab', serif;
}

.text-section h1 {
  font-size: 40px;
  display: none;
}

.text-section p {
  font-size: 1.5rem;
  line-height: 1.4;
  color: #212121;
  padding: 0 4rem;
  text-align: left;
}

.service_section {
  text-align: center;
  padding: 4rem;
  background-color: var(--one);
}

.service_header {
  font-size: 2em;
  margin-bottom: 0.5em;
  color: var(--two);
}

.service_subheader {
  font-size: 1.5em;
  margin-bottom: 2em;
  color: var(--two);
}

.services {
  display: flex;
  justify-content: space-between;
}

.service {
  width: 30%;
  padding: 2rem;
  box-shadow: 3px 4px 8px var(--two);
  margin: 1rem;
  background: var(--white);
  border-radius: 5px;
}

.service h3 {
  font-size: 1.5em;
  color: var(--one);
  margin-bottom: 1.5em;
}

.service p {
  font-size: 1em;
  line-height: 1.3;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
}

.results_section {
  padding: 4rem;
  background: var(--two);
}

.results_header {
  font-size: 2.5em;
  margin-bottom: 1em;
  color: var(--one);
}

.results {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.result {
  width: 45%;
  padding: 2rem;
  margin: 1rem;
  background: var(--white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 28vh;
}

.result h3 {
  font-size: 1.4em;
  color: var(--one);
  margin-bottom: 2rem;
  height: 30%;
}

.result p {
  font-size: 1em;
  line-height: 1.3;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
}

.collaboration_section {
  padding: 4rem;
  text-align: center;
}

.collaboration_header {
  font-size: 2em;
  margin-bottom: 1em;
  text-align: center;
}

.collaboration_list {
  list-style-type: none; /* Remove default bullets */
  padding: 0;
  margin: 0;
}

.collaboration_list li {
  background: url('/path/to/bullet-image.svg') no-repeat left center; /* Replace with your bullet image path */
  padding-left: 40px; /* Adjust depending on your bullet image size */
  margin-bottom: 1rem; /* Space between list items */
  text-align: center;
  font-size: 1em;
  line-height: 1.6;
}

.list_title {
  font-weight: bold;
}

.btn_bottom {
  font-size: 30px;
  padding: 1rem;
  box-shadow: 3px 4px 8px var(--one);
}

.btn_bottom:hover {
  background-color: var(--two);
  box-shadow: 3px 4px 8px var(--two);
}

.btn_bottom a {
  color: var(--two);
}
.btn_bottom a:hover {
  color: var(--one);
}
</style>
