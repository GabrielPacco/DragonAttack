<template>
  <section class="learning-process-section" id="learning-process">
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
          pdfLink: 'https://drive.google.com/file/d/1xj9_Avxjcx9i_9bErIlU6ELIwwEhXFnY/view?usp=sharing'
        },
        {   
          title: 'Diseño del Juego',
          description: 'Se desarrollan los elementos visuales y la mecánica de juego que combina actividad física y desafíos matemáticos.',
          image: require('@/assets/logo.png'),
          pdfLink: '/path/to/diseno_juego.pdf'
        },
        { 
          title: 'Pruebas de Usabilidad',
          description: 'Realización de pruebas con niños para asegurar que el juego sea atractivo, educativo y fácil de entender.',
          image: require('@/assets/logo.png'),
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
.learning-process-section {
  padding: 3em 2em;
  text-align: center;
  background-color: #81c784; /* Fondo verde claro */
  color: #040404;
}
  
.learning-process-section h2 {
  font-size: 2.5em;
  color: #ff7043;
  margin-bottom: 0.5em;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 800px;
  margin: 2em auto;
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
  box-sizing: border-box;
  padding: 2em;
  background: rgba(250, 250, 250, 0.9);
  border-radius: 10px;
  text-align: center;
}

.step-image {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 1em;
  border: 3px solid #4db6ac;
}

.carousel-nav {
  background: none;
  border: none;
  color: #ff7043;
  font-size: 2em;
  cursor: pointer;
}

.carousel-nav.left {
  position: absolute;
  left: -2em;
}

.carousel-nav.right {
  position: absolute;
  right: -2em;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5em;
  margin-top: 1em;
}

.carousel-indicators span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #777;
  border-radius: 50%;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: #ff7043;
}

.download-button {
  margin-top: 1em;
  background-color: #4db6ac;
  color: #ffffff;
  padding: 0.8em 1.5em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
}

.download-button:hover {
  background-color: #26a69a;
}
</style>
