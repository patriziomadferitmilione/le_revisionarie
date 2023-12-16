<template>
  <div class="container">
    Chi sono Le Revisionarie? Una domanda che apre tante porte: a livello
    esistenziale, professionale, personale... Per due logorroiche come noi non è
    semplice rispondere in poche parole. Ma se cerchiamo una risposta essenziale
    che possa farvi capire chi siamo e che ci stiamo a fare qui, ci viene in
    mente un'immagine ben precisa: noi dalla parte delle vostre storie, sempre.
    Due ragazze appassionate di libri che, negli anni dell'università, tra un
    esame di Letterature comparate e incalcolabili tazze di caffè, hanno
    ricamato un sogno insieme e lo hanno inseguito attraverso anni di studio e
    formazione. Due millenials che per rincorrere questo sogno hanno fatto un
    grande "ciaone" al posto fisso e si sono create uno spazio in cui fare il
    lavoro dei loro sogni. E questo posto è quel luogo magico in cui nascono le
    storie, in cui gli autori elaborano e danno un senso alla realtà che ci sta
    intorno attraverso le loro parole. Dopo aver capito che era questo il luogo
    in cui volevamo prendere posizione, abbiamo deciso che ci saremmo impegnate
    per renderlo uno spazio di accoglienza, ascolto e creatività condivisa, per
    essere ciò di cui chi scrive ha bisogno per portare a termine il suo
    obiettivo. Questo, in "poche" parole (siamo logorroiche, vi avevamo
    avvisato) è ciò su cui si fonda lo studio editoriale Le Revisionarie.
    L'obiettivo è guidare chi vuole scrivere una storia a realizzare il suo
    sogno, perché è anche il nostro. Sei prontə per tirare fuori il tuo libro
    dal cassetto? Siamo qui per te 🌟
    <div class="content chiara">
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
    <div class="content doralice">
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem; /* Spacing between the sections */
}

.chiara .image-section {
  order: 2; /* Image on the right for Chiara */
}

.doralice .text-section {
  order: 2; /* Text on the right for Doralice */
}

.image-section,
.text-section {
  flex: 1;
}

.image-section img {
  width: 100%; /* Adjust as needed */
}

.text-section h2 {
  font-size: 2em;
  color: #000;
  margin-bottom: 0.5em;
}

.text-section p {
  font-size: 1em;
  line-height: 1.6;
  color: #333;
}

/* If you need to specifically style Doralice's section, you can add another class */
</style>
