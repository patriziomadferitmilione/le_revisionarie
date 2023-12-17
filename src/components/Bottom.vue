<template>
  <w-toolbar class="bottom" bottom shadow>
    <div class="spacer"></div>
    <w-card class="card_people1 ml3" shadow>
      <div class="inside_card">
        <h1>
          <w-icon class="icona_map" size="1.5em"> fa fa-map-marker </w-icon>
          &nbsp;
          <a
            href="https://www.google.com/maps/place/Googleplex/@37.4220661,-122.0840897,17z"
            target="_blank"
            >Torino</a
          >
        </h1>
      </div>
    </w-card>
    <div class="spacer"></div>
    <w-card class="card_people2 ml3" shadow>
      <div class="inside_card2">
        <a href="elisa.cioffi@lerevisionarie.com">
          <w-icon size="1em"> fa fa-envelope </w-icon>
          &nbsp;
          <span>info@lerevisionarie.com</span></a
        >
      </div>
    </w-card>
    <div class="spacer"></div>
    <w-card class="card_people3 ml3" shadow>
      <div class="inside_card3">
        <h4>
          <a href="tel:+393341932598"
            ><w-icon size="1em"> fa fa-phone </w-icon> &nbsp;Chiara Cioffi</a
          >
          <br />
          <br />
          <a href="tel:+393484325701"
            ><w-icon size="1em"> fa fa-phone </w-icon> &nbsp;Doralice Treglia</a
          >
        </h4>
      </div>
    </w-card>
    <div class="spacer"></div>
    <a href="https://www.instagram.com/lerevisionarie/" target="_blank"
      ><span class="ml2"
        ><w-icon class="social_icon" size="2.5em"> fa fa-instagram </w-icon>
        &nbsp;
      </span></a
    >
    <a
      href="https://www.linkedin.com/company/le-revisionarie/?originalSubdomain=it"
      target="_blank"
      ><span class="ml2"
        ><w-icon class="social_icon" size="2.5em">
          fa fa-linkedin-square
        </w-icon>
        &nbsp;</span
      ></a
    >
    <a
      href="https://www.facebook.com/profile.php?id=100081452891075"
      target="_blank"
    >
      <span class="ml2"
        ><w-icon class="social_icon" size="2.5em"> fa fa-facebook </w-icon>
        &nbsp;</span
      ></a
    >
    <div class="spacer"></div>
  </w-toolbar>
</template>
<script>
export default {}
</script>
<style scoped>
.bottom {
  height: 30vh;
  padding: 2rem;
  background-color: var(--two) !important;
}

.bottom h1 {
  color: white;
}

.inside_card {
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.inside_card2 {
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-size: 1.7rem;
}

.inside_card2 a span,
.inside_card2 a {
  color: var(--two);
}

.inside_card3 a {
  color: var(--two);
}

.inside_card h1 a {
  color: var(--two);
}

.inside_card2:hover,
.inside_card2 a:hover,
.inside_card2 a span:hover,
.inside_card3 h4:hover,
.inside_card:hover,
.inside_card h1 a:hover {
  cursor: pointer;
  color: var(--white);
}
.inside_card3 {
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.card_people3,
.card_people2,
.card_people1 {
  background-color: var(--four);
  height: fit-content;
}

.icona_map {
  color: var(--two);
}

.icona_map:hover {
  color: var(--white);
}

.social_icon {
  color: var(--one);
}

.social_icon:hover {
  color: var(--four);
}
</style>
