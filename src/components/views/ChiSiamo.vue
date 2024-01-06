<template>
  <div class="chi_siamo">
    <div class="header">
      <h1>Chi Siamo</h1>
    </div>
    <div class="sub_header_des">
      <p>Chi sono Le Revisionarie?</p>
      <br />
      <p>
        Una domanda che apre tante porte: a livello esistenziale, professionale,
        personale... Per due logorroiche come noi non è semplice rispondere in
        poche parole. Ma se cerchiamo una risposta essenziale che possa farvi
        capire chi siamo e che ci stiamo a fare qui, ci viene in mente
        un'immagine ben precisa: noi dalla parte delle vostre storie, sempre.
        Due ragazze appassionate di libri che, negli anni dell'università, tra
        un esame di Letterature comparate e incalcolabili tazze di caffè, hanno
        ricamato un sogno insieme e lo hanno inseguito attraverso anni di studio
        e formazione. Due millenials che per rincorrere questo sogno hanno fatto
        un grande "ciaone" al posto fisso e si sono create uno spazio in cui
        fare il lavoro dei loro sogni.
      </p>
      <br />
      <p>
        E questo posto è quel luogo magico in cui nascono le storie, in cui gli
        autori elaborano e danno un senso alla realtà che ci sta intorno
        attraverso le loro parole. Dopo aver capito che era questo il luogo in
        cui volevamo prendere posizione, abbiamo deciso che ci saremmo impegnate
        per renderlo uno spazio di accoglienza, ascolto e creatività condivisa,
        per essere ciò di cui chi scrive ha bisogno per portare a termine il suo
        obiettivo.
      </p>
      <br />
      <P
        >Questo, in "poche" parole (siamo logorroiche, vi avevamo avvisato) è
        ciò su cui si fonda lo studio editoriale Le Revisionarie. L'obiettivo è
        guidare chi vuole scrivere una storia a realizzare il suo sogno, perché
        è anche il nostro.</P
      >
      <br />
      <p>
        Sei prontə per tirare fuori il tuo libro dal cassetto? Siamo
        <b style="color: var(--one)">qui per te</b>
      </p>
      <!-- 🌟 -->
    </div>

    <div class="content_chiara">
      <div class="image-section">
        <img src="/images/IMG_5996.JPG" alt="Chiara Cioffi" />
      </div>
      <div class="text-section">
        <h2>Chiara Cioffi</h2>
        <p>
          Conoscermi è facile perché le cose che mi rendono felice sono
          semplici: leggere, scrivere, mangiare cose buone e avere buona
          compagnia.
        </p>
        <p>
          Sono le storie a legare insieme tutti questi elementi, a farci sopra
          un bel fiocchetto e a regalarmi momenti di pura emozione.
        </p>
        <p>
          La passione per le storie mi accompagna da sempre: dai primi temi a
          scuola alla scelta della Facoltà di Lettere e il fatto che questa
          passione sia riuscita a trasformarsi in un lavoro mi ha insegnato cosa
          vuol dire saper credere nei propri sogni.
        </p>
        <p>E tu, ci credi?</p>
      </div>
    </div>
    <div class="content_doralice">
      <div class="text-section">
        <h2>Doralice Treglia</h2>
        <p>
          Conoscermi è facile perché le cose che mi rendono felice sono
          semplici: leggere, scrivere, mangiare cose buone e avere buona
          compagnia.
        </p>
        <p>
          Sono le storie a legare insieme tutti questi elementi, a farci sopra
          un bel fiocchetto e a regalarmi momenti di pura emozione.
        </p>
        <p>
          La passione per le storie mi accompagna da sempre: dai primi temi a
          scuola alla scelta della Facoltà di Lettere e il fatto che questa
          passione sia riuscita a trasformarsi in un lavoro mi ha insegnato cosa
          vuol dire saper credere nei propri sogni.
        </p>
        <p>E tu, ci credi?</p>
      </div>
      <div class="image-section">
        <img src="/images/IMG_6017.JPG" alt="Doralice Treglia" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.chi_siamo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  background-color: var(--white);
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
  background: url('/images/6138_60.png') no-repeat center center / cover;
  width: 100vw;
  height: 100vh;
  margin-bottom: 1rem;
}

.header h1 {
  font-size: 200px;
  color: var(--one);
  font-family: 'Covered By Your Grace';
}

.content_chiara .text-section h2,
.content_doralice .text-section h2 {
  color: var(--two);
}

.content_chiara {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: var(--four);
  padding-bottom: 1.5rem;
  height: 110vh;
  box-shadow: var(--two) 0px 3px 15px 4px;
}
.content_doralice {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: var(--one);
  padding-bottom: 1.5rem;
  height: 110vh;
  box-shadow: var(--two) 0px 3px 15px 4px;
}

.content_chiara .text-section p {
  background-color: var(--four);
  color: var(--two);
}

.content_chiara .text-section p:last-child {
  text-align: center;
}
.content_doralice .text-section p:last-child {
  text-align: center;
}

.content_doralice .text-section p {
  background-color: var(--one);
  color: var(--two);
}
.content_doralice .image-section {
  background-color: var(--one);
  padding: 2.5rem;
}

.image-section,
.text-section {
  flex: 1;
}

.content_chiara .image-section {
  padding: 2.5rem;
}

.content_chiara .image-section img {
  width: 100%;
  box-shadow: 3px 4px 8px var(--two);
  border-radius: 15px;
}

.content_doralice .image-section img {
  width: 100%;
  box-shadow: 3px 4px 8px var(--two);
  border-radius: 15px;
}

.text-section h2 {
  font-size: 2em;
  color: #000;
  margin-bottom: 0.5em;
  margin-top: 1rem;
}

.text-section p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #333;
  text-align: justify;
  padding: 1rem 3rem;
}

.sub_header_des {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: justify;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 3px 15px 1px inset;
  padding: 1rem;
  background-color: var(--white);
  margin-bottom: 1rem;
  border-radius: 5px;
}

.sub_header_des p {
  font-size: 1.2rem;
  line-height: 1.35;
  padding: 2rem 3rem;
}

.sub_header_des p:first-child {
  font-size: 2em;
  color: var(--one);
  text-shadow: 4px 0 4px var(--two);
}
</style>
