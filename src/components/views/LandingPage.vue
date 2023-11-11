<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-image">
        <!-- Insert hero image here -->
        <img src="/images/book_1.png" alt="book" />
      </div>
      <div class="content">
        <h1>Benvenuti, noi siamo 'Le Revisionarie'</h1>
        <p>
          Uno studio editoriale al femminile che promuove la cultura in tutte le
          sue forme. Forniamo il supporto di cui avete bisogno per trasformare
          il vostro manoscritto in un successo editoriale.
        </p>
        <button>Inizia Ora</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature">
        <h2>What do you get?</h2>
        <!-- Feature items -->
        <div class="feature-item">
          <span>Icon</span>
          <h3>Sleep Stories</h3>
          <p>
            Ever-growing library of Sleep Stories designed to lull you into a
            deep and restful slumber.
          </p>
        </div>
        <!-- Repeat for other feature items -->
      </div>
      <div class="cta">
        <button>Try Calm for Free</button>
      </div>
    </section>

    <!-- Stories Section -->
    <section class="stories">
      <!-- Stories carousel placeholder -->
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <!-- Testimonials carousel placeholder -->
    </section>

    <!-- Call to Action Section -->
    <section class="call-to-action">
      <button>Get Started</button>
    </section>
  </div>
</template>
<script>
export default {
  name: 'LandingPage',
}
</script>
<style scoped>
.hero {
  background-color: #8a56ac;
  color: white;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero .content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero .content p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.features {
  background-color: #fff;
  text-align: center;
  padding: 50px 0;
}

.feature-item {
  margin-bottom: 30px;
}

.feature-item .icon {
  display: block;
  margin: auto;
  margin-bottom: 10px;
  /* Placeholder for icon styles */
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 30px;
}

h3 {
  font-size: 1.25rem;
  color: #333;
}

p {
  color: #666;
}

.btn-primary,
.btn-secondary {
  background-color: #6b4e90;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 1rem;
}

.btn-secondary {
  background-color: #917bb6;
}
</style>
