<template>
  <div class="onshelf">
    <div class="header">
      <h1>On Shelf</h1>
    </div>

    <div class="sub_header">
      <p>
        Se vuoi che il tuo libro arrivi sugli scaffali delle librerie, <br />
        prima devi tirarlo fuori dal cassetto e dargli una bella sistemata.
        <br />
        <br />
        Presentarsi a un editore è il momento più importante nella vita di un
        manoscritto, <br />
        non vorrai mica mandarlo all'appuntamento tutto malconcio e spettinato,
        no?
      </p>
    </div>

    <div class="content">
      <div class="image-section">
        <img src="/images/IMG_6077.JPG" alt="onshelf" />
      </div>
      <div class="text-section">
        <h1>Le Revisionarie</h1>
        <h2>Percorso On Shelf</h2>
        <br />
        <p>
          Hai scritto qualcosa che secondo te è buono. <br />
          Non lo hai mai pensato, ma mentre sei alle prese con la <br />
          scrittura ti convinci sempre di più che la tua storia potrebbe
          diventare qualcosa di più di un semplice passatempo. <br /><br />
          Ti arrovelli per capire come arrivare alle <br />
          case editrici, ma è difficile. <br />
          E in più, come puoi sapere se ciò che hai scritto è buono <br />
          per davvero, o se è solo una tua impressione? <br /><br />
          Ti suona familiare? <br />
          <br />
          Tranquillo, non sei il solo a trovarti in questa situazione. <br />
          Anzi! è molto più comune di quanto credi.
        </p>
      </div>
    </div>

    <div class="sub_header">
      <p>
        Anche se a volte uscirne sembra impossibile, <br />
        per farlo hai soltanto bisogno di una guida! <br />
        Una bussola che ti aiuti ad orientarti nel burrascoso mare del mondo
        editoriale. <br />
        <br />
        Alla fine del nostro lavoro insieme il tuo manoscritto sarà in forma
        smagliante, <br />
        pronto a sbaragliare la concorrenza e attirare tutti gli sguardi su di
        sé.
      </p>
    </div>

    <div class="sub_header">
      <p>
        Scrivere qualcosa, sperare di essere pubblicati e non ricevere mai
        risposta dagli editori è terribilmente demoralizzante.
        <br />
        <br />
        Per questo motivo, tantissimi scrittori mollano ancor prima di averci
        provato davvero. Non cascarci anche tu: rendi finalmente il tuo sogno
        una realtà!
      </p>
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
  height: 90vh;
  width: 100%;
  background: url('/images/IMG_6138.JPG') no-repeat center center / cover;
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
  width: 100%;
  height: 100vh;
  margin-bottom: 2rem;
}

.content .image-section {
  order: 2;
}

.image-section,
.text-section {
  flex: 1;
}

.image-section img {
  width: 100%;
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
  font-size: 20px;
  line-height: 1.4;
  color: #212121;
  padding: 0 4rem;
}
</style>
