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

    <!-- <w-flex wrap class="text-center">
      <w-flex-item class="xs6 md4 pa1">
        <div class="primary--bg py3">Left Div</div>
      </w-flex-item>
      <w-flex-item class="xs6 md8 pa1">
        <div class="primary--bg py3">Right Div</div>
      </w-flex-item>
    </w-flex> -->

    <!-- CARDS PEOPLE -->
    <w-flex wrap class="text-center cards">
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

    <!-- BLOG POSTS -->
    <w-flex wrap class="text-center">
      <!-- Column 1 -->
      <div class="lg3 md6 sm12 xs12 pa1">
        <div class="primary--bg py3">Column 1</div>
      </div>

      <!-- Column 2 -->
      <div class="lg3 md6 sm12 xs12 pa1">
        <div class="primary--bg py3">Column 2</div>
      </div>

      <!-- Column 3 -->
      <div class="lg3 md6 sm12 xs12 pa1">
        <div class="primary--bg py3">Column 3</div>
      </div>

      <!-- Column 4 -->
      <div class="lg3 md6 sm12 xs12 pa1">
        <div class="primary--bg py3">Column 4</div>
      </div>
    </w-flex>

    <div style="height: 90vh"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // to be added to w-card
      //:image="`${baseUrl}/images/copertina.png`"
      // just uncommment
      //baseUrl: import.meta.env.BASE_URL,
    }
  },
}
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
</style>
