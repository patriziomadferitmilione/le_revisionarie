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

    <div class="service_section">
      <h2 class="service_header">
        DA SOGNO NEL CASSETTO A LIBRO DEI TUOI SOGNI
      </h2>
      <p class="service_subheader">
        Cosa è compreso nel Percorso <em>on shelf</em>
      </p>
      <div class="services">
        <div class="service">
          <h3>Valutazione del manoscritto</h3>
          <p>
            Per capire se ci sono questioni irrisolte o errori da correggere,
            bisogna prima trovarli!
          </p>
        </div>
        <div class="service">
          <h3>Editing</h3>
          <p>
            Dopo la fase di ricognizione, bisogna passare all'azione. Mettiamo
            mano al testo (sempre e solo dopo il confronto con l'autore) per
            dare il via alla sua trasformazione.
          </p>
        </div>
        <div class="service">
          <h3>Consulenza editoriale</h3>
          <p>
            Ma dove vai, se le regole del gioco non le sai? Ti guidiamo verso la
            soluzione di pubblicazione più adatta a te.
          </p>
        </div>
      </div>
    </div>

    <div class="results_section">
      <h2 class="results_header">COSA OTTERRAI</h2>
      <div class="results">
        <div class="result">
          <h3>UN LIBRO PRONTO PER LA PUBBLICAZIONE</h3>
          <p>
            Non dovrai mai più disperarti per cercare beta-reader in giro per il
            web o chiedere a tutti i tuoi amici cosa ne pensano: alla fine del
            percorso avrai fra le tue mani un libro finito, corretto, completo.
            Insomma, pronto per prendere il volo!
          </p>
        </div>
        <div class="result">
          <h3>
            ORIENTAMENTO VERSO CASE EDITRICI INTERESSATE A TESTI COME IL TUO
          </h3>
          <p>
            Potrà sorprenderti: ma molti autori non ricevono risposta alle loro
            proposte di pubblicazione semplicemente perché pongono domande
            sbagliate alle persone sbagliate. Con noi, questo non accadrà più.
          </p>
        </div>
      </div>
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

    <div class="collaboration_section">
      <h2 class="collaboration_header">
        Come avverrà il nostro lavoro insieme? Attraverso:
      </h2>
      <ul class="collaboration_list">
        <li>
          <span class="list_title">Confronto continuo:</span> ogni modifica da
          noi proposta dovrà essere discussa e vagliata da te
        </li>
        <li>
          <span class="list_title"
            >Gruppo Telegram o Whatsapp sempre attivo</span
          >
          per qualsiasi dubbio o aggiornamento sui lavori
        </li>
        <li>
          <span class="list_title">Videochiamate</span> per le comunicazioni più
          impegnative
        </li>
      </ul>
    </div>

    <div class="sub_header">
      <p>
        Allora, sei pronto a metterti in gioco?
        <br />
        <br />
        <button>
          <a
            href="https://calendly.com/lerevisionarie/callconoscitiva"
            target="_blank"
            >Prenota una call conoscitiva</a
          >
        </button>
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

.service_section {
  text-align: center;
  padding: 4rem;
}

.service_header {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.service_subheader {
  font-size: 1.5em;
  margin-bottom: 2em;
}

.services {
  display: flex;
  justify-content: space-between;
}

.service {
  width: 30%;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  background: var(--white);
}

.service h3 {
  font-size: 1.2em;
  color: var(--primary-color);
  margin-bottom: 1em;
}

.service p {
  font-size: 1em;
  line-height: 1.6;
  color: var(--text-color);
}

.results_section {
  padding: 4rem;
  background: #f5f5f5;
}

.results_header {
  font-size: 2em;
  margin-bottom: 1em;
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
}

.result h3 {
  font-size: 1.4em;
  color: var(--primary-color);
  margin-bottom: 1em;
}

.result p {
  font-size: 1em;
  line-height: 1.6;
  color: var(--text-color);
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
</style>
