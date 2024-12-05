<template>
  <section class="learning-process-section" id="learning-process">
    <div class="content-wrapper">
      <h2>Proceso de Aprendizaje</h2>
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
          title: 'Needfinding',
          description: 'Identificación de las necesidades cognitivas de los niños, cruciales para diseñar una experiencia interactiva.',
          image: require('@/assets/identificar_necesidades.webp'),
          pdfLink: 'https://drive.google.com/file/d/1xYUzyqyfKcxn6DH1srKPYIsBDyXSxm9g/view?usp=sharing'
        },
        {
          title: 'Prototipo de Baja Fidelidad',
          description: 'Se crearon representaciones simples y rápidas del diseño del juego para evaluar la combinación de mecánicas básicas y desafíos matemáticos.',
          image: require('@/assets/baja_fidelidad.png'),
          pdfLink: 'https://drive.google.com/file/d/1Ki0WC1VmlwQApjwNE4tMcBaQ_w6nZxQQ/view?usp=sharing'
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
  background: linear-gradient(to bottom right, #0e0e0e, #3d3d3c);
  font-family: 'Poppins', sans-serif;
  color: #2E2E2E; /* Contraste adecuado para texto */
}

/* Content Wrapper */
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

/* Title Styles */
h2 {
  font-size: 2.4rem;
  color: #FF80AB; /* Rosa Vivo */
  margin-bottom: 0.5em;
  font-weight: 700;
  text-shadow: 2px 2px #FFF59D; /* Sombra Amarillo Pastel */
}

/* Subtitle Styles */
p {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #ffffff;
  font-family: Arial, sans-serif;
  margin-bottom: 1em;
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
  padding: 0 1em; /* Margen interno para mantener el contenido centrado */
  box-sizing: border-box;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  margin: 0 1em; /* Margen horizontal para el contenido desplazable */
}

.carousel-slide {
  min-width: calc(100% - 2em); /* Ajusta el ancho para compensar los márgenes */
  text-align: center;
  padding: 1em 0;
  margin: 0 1em; /* Espaciado entre las diapositivas */
}

/* Slide Title */
.carousel-slide h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5em;
  font-weight: 600;
  color: #FF7043; /* Naranja Vivo */
}

/* Slide Description */
.carousel-slide p {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #ffffff;
  font-family: Arial, sans-serif;
  margin-bottom: 1em;
}

/* Image Styles */
.step-image {
  width: 100%;
  max-width: 400px;
  margin-bottom: 1em;
  border-radius: 15px; /* Mayor redondeo para un estilo amigable */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); /* Sombra suave */
}

/* Button Styles */
.download-button {
  background-color: #4DB6AC; /* Verde Pastel */
  color: white;
  padding: 0.5em 1em;
  font-size: 1rem;
  border-radius: 10px; /* Bordes más suaves */
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #26C6DA; /* Azul Turquesa */
}

/* Navigation Buttons */
.carousel-nav {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #FF80AB; /* Rosa Vivo */
  cursor: pointer;
  transition: color 0.3s ease;
}

.carousel-nav:hover {
  color: #FFA500; /* Naranja claro */
}

/* Carousel Indicators */
.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.carousel-indicators span {
  width: 10px;
  height: 10px;
  background-color: #FF7043; /* Naranja Vivo */
  border-radius: 50%;
  margin: 0 5px;
  transition: background-color 0.3s ease;
}

.carousel-indicators .active {
  background-color: #FFF59D; /* Amarillo Pastel */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .learning-process-section {
    padding: 1em 0.5em;
  }

  h2 {
    font-size: 2rem;
  }

  .carousel-slide h3 {
    font-size: 1.2rem;
  }

  .carousel-slide p {
    font-size: 0.8rem;
  }

  .step-image {
    max-width: 300px;
  }

  .download-button {
    font-size: 0.9rem;
    padding: 0.4em 0.8em;
  }

  .carousel-indicators span {
    width: 8px;
    height: 8px;
  }
}
</style>

