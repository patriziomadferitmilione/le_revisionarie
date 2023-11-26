<template>
  <div class="service-container">
    <div class="service-card">
      <h2>A chi si rivolge</h2>
      <p>...</p>
      <h2>Tempistiche</h2>
      <p>...</p>
      <h2>Tariffario</h2>
      <p>...</p>
    </div>
    <div class="service-content">
      <h1>Valutazione Manoscritti</h1>
      <p>
        Hai ultimato la prima stesura del tuo manoscritto e ti stai chiedendo
        quale sia lo step successivo? Un primo, saggio passo che puoi compiere è
        richiedere una valutazione professionale e ben strutturata del tuo
        testo. In questo modo, avrai un'idea sui punti di forza e sulle
        debolezze della tua storia e potrai capire come migliorarla per
        trasformarla nella sua versione migliore.
      </p>
      <p>
        La valutazione consiste in un documento che viene stilato dopo la
        lettura integrale del testo e che fornisce un'analisi dettagliata dei
        suoi elementi: l'architettura narrativa, la costruzione dei personaggi,
        lo stile, ecc… Dopo aver messo in luce le potenzialità e le criticità
        del testo, la scheda fornirà anche suggerimenti e consigli su come
        valorizzare al massimo il testo e correggerne le problematiche.
      </p>
      <p>...</p>
      <div class="evaluation-sheet">
        <h2>Inquadramento dell'opera</h2>
        <p>
          Qual è il genere in cui si colloca? Quali sono le prime impressioni
          che suscita?
        </p>

        <h2>Trama</h2>
        <p>
          Può sembrare superfluo per una scheda rivolta all'autore, ma in realtà
          può essere molto utile per scoprire come è stato recepito il suo testo
          e avere un riassunto schematico della propria storia.
        </p>

        <h2>Personaggi e luoghi</h2>
        <p>
          Come sono caratterizzati i personaggi? Sono coerenti, il loro arco di
          sviluppo funziona? Le descrizioni dei luoghi sono efficaci? Che
          sensazioni suscitano nel lettore?
        </p>

        <h2>Lo stile</h2>
        <p>
          Il lessico e la sintassi sono adatte al genere dell'opera? Il modo in
          cui l'autore sceglie di presentare la materia è funzionale alle
          proprie intenzioni comunicative?
        </p>

        <h2>Punti di forza e problematiche</h2>
        <p>
          prendendo in considerazione l'analisi fatta in precedenza, quali sono
          gli elementi su cui si può intervenire? In che modo, e seguendo quali
          esempi? Quali letture possono essere utili all'autore?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Your script content
}
</script>

<style scoped>
.service-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  max-width: 1200px; /* Adjust based on your design preference */
  margin: auto; /* Center the container */
}

.service-card,
.service-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.service-card {
  border-left: 5px solid #333;
}

.service-content h1,
.service-card h2 {
  color: #5c5c5c;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #5c5c5c;
  padding-bottom: 0.25rem;
}

.service-content p,
.service-card p {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 1rem;
}

/* First element of each section has no top margin for alignment */
.service-content h1:first-child,
.service-card h2:first-child {
  margin-top: 0;
}

.evaluation-sheet {
  max-width: 800px;
  margin: auto;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.evaluation-sheet h2 {
  color: #5c5c5c;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid #5c5c5c;
  padding-bottom: 0.25rem;
}

.evaluation-sheet p {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 1rem;
}

.evaluation-sheet h2:first-of-type {
  margin-top: 0;
}

@media (max-width: 768px) {
  .service-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-card,
  .service-content {
    padding: 1rem;
  }

  .service-content h1,
  .service-card h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .service-content p,
  .service-card p {
    font-size: 0.9rem;
  }
}
</style>
