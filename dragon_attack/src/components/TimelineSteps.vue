<template>
  <section class="timeline-section" id="process-timeline">
    <h2>Proceso de Creación</h2>
    <p>Sigue el camino interactivo de nuestra evolución de la idea hasta la implementación.</p>

    <div class="timeline-container">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="timeline-step"
        :class="{ active: selectedStep === index }"
        @click="toggleStep(index)"
      >
        <!-- Número del paso -->
        <div class="step-number">{{ index + 1 }}</div>

        <!-- Título que se muestra solo si el paso no está desplegado -->
        <div v-if="selectedStep !== index" class="step-title">
          <h3>{{ step.title }}</h3>
        </div>

        <!-- Contenido del paso (solo cuando está desplegado) -->
        <div v-if="selectedStep === index" class="step-content">
          <!-- Título y descripción en columna -->
          <div class="step-text">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>

          <!-- Imagen -->
          <img
            v-if="step.image"
            :src="step.image"
            :alt="step.title"
            class="step-image"
          />

          <!-- Videos en disposición horizontal -->
          <div v-if="step.videos && selectedStep === index" class="video-container">
            <iframe
              v-for="(video, vidIndex) in step.videos"
              :key="vidIndex"
              :src="video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <!-- Botón Ver Más -->
          <button
            v-if="step.link"
            @click.stop="openLink(step.link)"
            class="view-button"
          >
            Ver Más
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

 

  <script>
  export default {
    name: "TimelineSection",
    data() {
      return {
        selectedStep: null,
        steps: [
          {
            title: "Creación de la Idea",
            description: "Identificación de necesidades para encontrar una solución creativa.",
            image: require("@/assets/idea_creation.jpeg"),
            videos: [
              "https://www.youtube.com/embed/videoseries?list=PLUcGAU4fh-Fs_pvkq5E0Qi9-7FdxcjLNt",
              "https://www.youtube.com/embed/videoseries?list=PLUcGAU4fh-Fs_pvkq5E0Qi9-7FdxcjLNt",
            ],
          },
          {
            title: "Prototipo de Baja Fidelidad",
            description: "Dibujos y prototipos rápidos para visualizar el concepto inicial.",
            image: require("@/assets/low_fidelity.png"),
            link: "https://example.com/low-fidelity",
          },
          {
            title: "Pruebas de Usabilidad",
            description: "Validación inicial del prototipo con usuarios reales.",
            image: require("@/assets/usability_testing.jpg"),
            link: "https://example.com/usability-testing",
          },
          {
            title: "Prototipo de Alta Fidelidad",
            description: "Diseño completo y funcional que incorpora retroalimentación.",
            image: require("@/assets/usability_testing.jpg"),
            link: "https://example.com/high-fidelity",
          },
        ],
      };
    },
    methods: {
      toggleStep(index) {
        this.selectedStep = this.selectedStep === index ? null : index;
      },
      openLink(link) {
        window.open(link, "_blank");
      },
    },
  };
</script>


  
  <style scoped>
  /* Sección principal */
  .timeline-section {
    padding: 3em 2em;
    text-align: center;
    color: #ffffff;
    background: linear-gradient(to bottom, #0e0e0e, #3d3d3c);
  }
  
  .timeline-section h2 {
    font-size: 2.5em;
    color: #FF7043; /* Naranja Vivo */
    margin-bottom: 0.5em;
  }
  
  .timeline-section p {
    font-size: 1.2em;
    color: #dcdcdc;
    margin-bottom: 2em;
  }
  
  /* Contenedor principal */
  .timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
  
/* Estilo de cada paso */
.timeline-step {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1em;
  width: auto;
  padding: 1em;
  background-color:#dae7ff; /* Naranja Pastel */
  color: #333333;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  position: relative; /* Necesario para la flecha */
  transition: transform 0.3s, box-shadow 0.3s;
} 
  
  .timeline-step:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  .timeline-step.active {
  width: 1500px; /* Más ancho cuando está activo */
  height: 350px; /* O establece una altura fija */
  background-color: #FF80AB; /* Cambia el color de fondo si es necesario */
  color: #ffffff;
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
}

  
  .step-number {
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #4DB6AC; /* Verde Pastel */
    color: #ffffff;
    border-radius: 50%;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    margin: 0;
    display: flex; /* Flexbox para centrar el contenido */
    align-items: center; /* Centra verticalmente el número */
    justify-content: center; /* Centra horizontalmente el número */
  }
  
  .step-content {
    display: flex;
    flex-direction: row; /* Coloca los elementos en columna */
    align-items: center; /* Centra los elementos horizontalmente */
    gap: 0.5em; /* Espaciado entre el título y la descripción */
    overflow: hidden;
    max-height: 0; /* Colapsado por defecto */
    transition: max-height 0.3s ease-out; /* Expansión suave */
  }

  /* Título y descripción en columna */
  .step-text {
    display: flex;
    flex-direction: column; /* Alinea título y descripción en columna */
    align-items: center; /* Alinea el texto a la izquierda */
    gap: 0.5em; /* Espaciado entre el título y la descripción */
  }
  
  /* Título que siempre se muestra */
  .step-title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Arial', sans-serif;
    color: #333333;
    padding: 0.5em 0; /* Espaciado interno */
    width: 100%; /* Ocupa todo el ancho del recuadro */
  }

.step-title h3 {
  font-size: 1.2em; /* Tamaño adecuado para recuadros pequeños */
  font-weight: bold;
  margin: 0;
  color: #302f2f; /* Naranja Vivo */
} 
  
  .timeline-step.active .step-content {
    max-height: 300px; /* Altura expandida */
  }
  
  
  .step-content h3 {
    font-size: 1.2em;
    margin: 0;
  }
  
  .step-content p {
    font-size: 0.9em;
    margin: 0;
  }
  
  .step-image {
    width: 100%;
    max-width: 280px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    display: block; /* Asegura que la imagen se comporte como un bloque */
    margin: 1em auto; /* Centra horizontalmente y añade margen arriba/abajo */
  }

  
/* Contenedor de videos */
.video-container {
  display: flex;
  flex-wrap: wrap; /* Permitir que los elementos se ajusten */
  justify-content: center; /* Centrar los videos */
  gap: 1em; /* Espaciado entre los videos */
  margin: 1em 0;
}
  
  /* Dimensiones iniciales del iframe */
iframe {
  width: 100%;
  max-width: 250px;
  height: 140px;
  border: 2px solid #FF7043; /* Naranja Vivo */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out; /* Animación suave */
}
  
  /* Botón de acción */
  .view-button {
    background-color: #26C6DA; /* Azul Turquesa */
    color: #ffffff;
    padding: 0.5em 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .view-button:hover {
    background-color: #4DB6AC;
  }

/* Agrandar videos cuando la sección está activa */
.timeline-step.active iframe {
  max-width: 280px; /* Ancho aumentado */
  height: 300px; /* Alto aumentado */
}

/* Flechas entre pasos */
.timeline-step::after {
  content: "↓"; /* Flecha vertical */
  font-size: 2rem;
  color: #FF7043; /* Naranja Vivo */
  position: absolute;
  bottom: -30px; /* Ajusta el espacio entre el paso y la flecha */
  left: 50%; /* Centra la flecha horizontalmente */
  transform: translateX(-50%);
}

.timeline-step:last-child::after {
  content: ""; /* Sin flecha para el último paso */
}
  </style>
  