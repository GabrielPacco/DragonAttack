<template>
  <section class="learning-process-section" id="learning-process">
    <div class="content-wrapper">
      <h2>Proceso de Aprendizaje en MathAdventure</h2>
      <p>Explora el aprendizaje interactivo y los conceptos detrás de MathAdventure.</p>
      
      <div class="carousel">
        <button @click="prevSlide" class="carousel-nav left">❮</button>
        
        <div class="carousel-track-container">
          <ul class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <li v-for="(step, index) in learningSteps" :key="index" class="carousel-slide">
              <h3>{{ step.title }}</h3>
              <img :src="step.image" :alt="step.title" class="step-image"/>
              <p>{{ step.description }}</p>
              <button @click="openPDF(step.pdfLink)" class="download-button">Ver Documento</button>
            </li>
          </ul>
        </div>
        
        <button @click="nextSlide" class="carousel-nav right">❯</button>
      </div>
      
      <div class="carousel-indicators">
        <span 
          v-for="(step, index) in learningSteps" 
          :key="index" 
          :class="{ active: index === currentSlide }" 
          @click="goToSlide(index)">
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LearningProcessSection',
  data() {
    return {
      currentSlide: 0,
      learningSteps: [
        { 
          title: 'Detección de Necesidades',
          description: 'Identificación de las necesidades cognitivas y físicas de los niños, cruciales para diseñar una experiencia interactiva.',
          image: require('@/assets/identificar_necesidades.webp'),
          pdfLink: 'https://drive.google.com/file/d/1xYUzyqyfKcxn6DH1srKPYIsBDyXSxm9g/view?usp=sharing'
        },
        {
          title: 'Prototipo de Baja Fidelidad',
          description: 'Se crearon representaciones simples y rápidas del diseño del juego para evaluar la combinación de actividad física y desafíos matemáticos. Este prototipo permitió probar la idea con usuarios reales y obtener retroalimentación temprana sobre las mecánicas básicas del juego.',
          image: require('@/assets/identificar_necesidades.webp'),
          pdfLink: 'https://drive.google.com/file/d/1CtBktNql4-Cq7BdU353HpqCvwn3KVQbq/view?usp=sharing'
        },
        { 
          title: 'Pruebas de Usabilidad',
          description: 'Realización de pruebas con niños para asegurar que el juego sea atractivo, educativo y fácil de entender.',
          image: require('@/assets/identificar_necesidades.webp'),
          pdfLink: '/path/to/pruebas_usabilidad.pdf'
        }
      ],
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.learningSteps.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.learningSteps.length - 1;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    openPDF(link) {
      window.open(link, '_blank');
    }
  },
};
</script>

<style scoped>
/* General Section Styles */
.learning-process-section {
  padding: 2em 1em;
  text-align: center;
  background: linear-gradient(to bottom, #4dd8aa, #66c75d);
  font-family: 'Poppins', sans-serif;
  color: #2E2E2E; /* Mejor contraste */
}

/* Content Wrapper */
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

/* Title Styles */
h2 {
  font-size: 2.4rem;
  color: #ff7043;
  margin-bottom: 0.5em;
  font-weight: 700;
}

/* Subtitle Styles */
p {
  font-size: 1rem;
  margin-bottom: 1em;
  line-height: 1.5;
}

/* Carousel */
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1em auto;
}

.carousel-track-container {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  text-align: center;
  padding: 1em 0;
}

/* Slide Title */
.carousel-slide h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5em;
  font-weight: 600;
  color: #2E2E2E;
}

/* Slide Description */
.carousel-slide p {
  font-size: 0.9rem;
  margin-bottom: 1em;
  line-height: 1.5;
  color: #4a4a4a;
}

/* Image Styles */
.step-image {
  width: 100%;
  max-width: 400px;
  margin-bottom: 1em;
  border-radius: 10px;
}

/* Button Styles */
.download-button {
  background-color: #4db6ac;
  color: white;
  padding: 0.5em 1em;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.download-button:hover {
  background-color: #26a69a;
}

/* Navigation Buttons */
.carousel-nav {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #ff7043;
  cursor: pointer;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.carousel-indicators span {
  width: 8px;
  height: 8px;
  background-color: #ff7043;
  border-radius: 50%;
  margin: 0 5px;
}

.carousel-indicators .active {
  background-color: #ffffff;
}
</style>
