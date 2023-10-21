<template>
  <div class="home">
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
  color: #212121;
}

.header {
  text-align: center;
  background: url('../../../public/images/copertina.png') no-repeat center
    center / 100% 400px;
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
</style>
