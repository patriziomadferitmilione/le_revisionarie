<template>
  <div class="container">
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
