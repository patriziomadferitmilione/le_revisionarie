<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Benvenuti, noi siamo 'Le Revisionarie'</h1>
        <p>
          Uno studio editoriale al femminile che promuove la cultura in tutte le
          sue forme. Forniamo il supporto di cui avete bisogno per trasformare
          il vostro manoscritto in un successo editoriale.
        </p>
        <button class="btn-primary">Inizia Ora</button>
      </div>
      <div class="hero-image">
        <!-- Image of a mobile device and a laptop -->
        <img src="/images/book_1.png" alt="Dispositivi" />
      </div>
    </section>
    <!-- New Section: About the Book -->
    <section class="about-book">
      <div class="about-image">
        <!-- Image of a person using a tablet -->
        <img src="/images/book_1.png" alt="Persona con tablet" />
      </div>
      <div class="about-content">
        <h2>Alcune parole sul libro</h2>
        <p>
          Immediatamente dopo aver sfogliato le prime pagine del libro è
          diventato ovvio per me - è un capolavoro e una vera e propria mappa
          stradale per i giovani imprenditori all'azione!
        </p>
        <p>
          Grazie a quel tipo di esperienza prolungata sento di poter aiutare gli
          altri. Fondamentalmente, tutto ciò di cui ho scritto nei miei 12
          libri, è stato testato da me praticamente. L'idea principale dietro ai
          miei libri è uno standard di business compassionevole - soprattutto
          nel posto di lavoro. Ecco perché è fondamentale ciò, come donne.
        </p>
        <p class="author-signature">Carol C.</p>
      </div>
    </section>
    <!-- Facts About Books Section -->
    <section class="facts-section">
      <div class="facts-heading">
        <h2>Alcuni fatti sui libri</h2>
        <p>Chi ama profondamente il sistema eco-sostenibile.</p>
      </div>
      <div class="facts-container">
        <!-- Fact Card -->
        <div class="fact-card" v-for="(fact, index) in facts" :key="index">
          <div class="fact-icon">
            <!-- Icon will be inserted here -->
            <img :src="fact.icon" :alt="fact.title" />
          </div>
          <div class="fact-number">{{ fact.number }}</div>
          <div class="fact-description">{{ fact.title }}</div>
        </div>
      </div>
    </section>
    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="testimonials-heading">
        <h2>Cosa dicono i nostri lettori di noi</h2>
        <p>Chi ama profondamente il sistema eco-sostenibile.</p>
      </div>
      <div
        class="testimonial"
        v-for="(review, index) in reviews"
        :key="index"
        v-show="currentReviewIndex === index"
      >
        <div class="testimonial-content">
          <blockquote>{{ review.text }}</blockquote>
          <footer>
            <cite>{{ review.author }}</cite>
            <span>{{ review.status }}</span>
          </footer>
        </div>
      </div>
    </section>
    <!-- Blog Section -->
    <section class="blog-section">
      <div class="blog-heading">
        <h2>Our Blog</h2>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div class="blog-container">
        <!-- Blog Post Card -->
        <div class="blog-post" v-for="(post, index) in blogPosts" :key="index">
          <div class="post-image">
            <!-- Image of the blog post -->
            <img :src="post.image" :alt="post.title" />
          </div>
          <div class="post-details">
            <div class="post-date">{{ post.date }}</div>
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-info">{{ post.info }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'LandingPage',
  setup() {
    const facts = ref([
      {
        number: 151,
        title: 'Web Designing',
        icon: '/images/web-design-icon.png',
      },
      {
        number: 165,
        title: 'Brand Building',
        icon: '/images/brand-building-icon.png',
      },
      // ... Add more facts as needed ...
    ])

    const currentReviewIndex = ref(0)
    const reviews = ref([
      {
        author: 'Kristiana',
        status: 'Cliente',
        text: 'Recensione ...',
      },
      // Add more mockup reviews here
      {
        author: 'Gianni',
        status: 'Cliente',
        text: 'Testo fittizio per la recensione. Continua a fornire ottimi contenuti.',
      },
      {
        author: 'Lorenzo',
        status: 'Partner',
        text: 'Eccellente collaborazione e servizi eccezionali!',
      },
    ])

    const blogPosts = ref([
      {
        date: '20 Nov',
        title: 'ARRIVAL IN THE WINTER 2018 BOOK FAIR AVAILABLE.',
        info: 'By | 5 Comment',
        image: '/images/blog1.png', // Update the path as needed
      },
      {
        date: '20 Nov',
        title: 'ARRIVAL IN THE WINTER 2018 BOOK FAIR AVAILABLE.',
        info: 'By | 5 Comment',
        image: '/images/blog1.png', // Update the path as needed
      },
      {
        date: '20 Nov',
        title: 'ARRIVAL IN THE WINTER 2018 BOOK FAIR AVAILABLE.',
        info: 'By | 5 Comment',
        image: '/images/blog1.png', // Update the path as needed
      },
      {
        date: '20 Nov',
        title: 'ARRIVAL IN THE WINTER 2018 BOOK FAIR AVAILABLE.',
        info: 'By | 5 Comment',
        image: '/images/blog1.png', // Update the path as needed
      },
    ])

    let interval
    onMounted(() => {
      interval = setInterval(() => {
        currentReviewIndex.value =
          (currentReviewIndex.value + 1) % reviews.value.length
      }, 5000)
    })

    onBeforeUnmount(() => {
      console.log('Componente in fase di smontaggio') // Log when component is about to unmount
      clearInterval(interval)
    })

    return {
      facts,
      currentReviewIndex,
      blogPosts,
      reviews,
    }
  },
}
</script>

<style scoped>
.hero {
  background-color: #5b2245;
  color: white;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

.btn-primary {
  background-color: #9e7a59;
  color: white;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #c5a582;
}

.about-book {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #fff;
}

.about-image img {
  max-width: 50%;
  height: auto;
}

.about-content {
  max-width: 50%;
}

.about-content h2 {
  font-size: 2rem;
  color: #5b2245;
  margin-bottom: 20px;
}

.about-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.author-signature {
  font-style: italic;
  color: #5b2245;
}

.facts-section {
  background-color: #fff;
  text-align: center;
  padding: 50px;
}

.facts-heading h2 {
  color: #5b2245;
  margin-bottom: 10px;
}

.facts-heading p {
  color: #666;
  margin-bottom: 30px;
}

.facts-container {
  display: flex;
  justify-content: space-around;
}

.fact-card {
  background-color: #5b2245;
  color: #fff;
  padding: 20px;
  width: 200px;
  margin: 0 10px;
  position: relative;
}

.fact-icon {
  margin-bottom: 15px;
}

.fact-icon img {
  width: 50px;
  height: auto;
}

.fact-number {
  font-size: 3rem;
  margin-bottom: 5px;
}

.fact-description {
  font-size: 1.2rem;
}

.testimonials-section {
  background-color: #fff;
  text-align: center;
  padding: 50px;
}

.testimonials-heading h2 {
  color: #5b2245;
  margin-bottom: 10px;
}

.testimonials-heading p {
  color: #666;
  margin-bottom: 30px;
}

.testimonial-content blockquote {
  padding: 20px;
  font-style: italic;
  color: #333;
  border-left: 5px solid #5b2245;
}

.testimonial-content footer {
  margin-top: 10px;
}

.testimonial-content cite {
  font-weight: bold;
  display: block;
}

.testimonial-content span {
  font-size: 0.8em;
  color: #666;
}

.blog-section {
  background-color: #fff;
  text-align: center;
  padding: 50px;
}

.blog-heading h2 {
  color: #5b2245;
  margin-bottom: 10px;
}

.blog-heading p {
  color: #666;
  margin-bottom: 30px;
}

.blog-container {
  display: flex;
  justify-content: space-between;
}

.blog-post {
  width: 30%;
  margin-bottom: 20px;
}

.post-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.post-details {
  text-align: left;
}

.post-date {
  background-color: #9e7a59;
  color: white;
  display: inline-block;
  padding: 5px 15px;
  position: relative;
  top: -20px;
  left: -20px;
  border-radius: 5px;
}

.post-title {
  color: #5b2245;
  margin: 10px 0;
}

.post-info {
  color: #666;
  font-size: 0.8em;
}
</style>
