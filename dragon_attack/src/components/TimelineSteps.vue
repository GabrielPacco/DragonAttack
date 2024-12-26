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

            <!-- Problema y Objetivo (solo para el paso 1) -->
            <div v-if="index === 0">
              <h3>Problema</h3>
              <p>{{ steps[0].extraContent.problem }}</p>
              <hr />
              <h3>Objetivo</h3>
              <p>{{ steps[0].extraContent.objective }}</p>
            </div>
          </div>

          <!-- Imagen -->
          <img
            v-if="step.image"
            :src="step.image"
            :alt="step.title"
            class="step-image"
          />

          <!-- Videos estilo actualizado con imágenes, texto y botón -->
          <div v-if="step.videos && step.videos.length" class="video-section">
            <div
              v-for="(video, vidIndex) in step.videos"
              :key="vidIndex"
              class="video-thumbnail"
            >
              <!-- Imagen del video -->
              <a :href="video.url" target="_blank" rel="noopener noreferrer">
                <img
                  :src="video.thumbnail"
                  :alt="'Video ' + (vidIndex + 1)"
                  class="video-image"
                />
              </a>

              <!-- Texto dinámico (Entrevista 1, Entrevista 2, ...) -->
              <p class="video-text">Entrevista {{ vidIndex + 1 }}</p>

              <!-- Botón debajo de la imagen -->
              <button @click.stop="openVideo(video.url)" class="video-button">Ver</button>
            </div>
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

    <!-- Sección Oculta -->
    <section v-if="showHiddenSection" id="hidden-section">
      <div class="hidden-content">
        <h2>Sección Oculta</h2>
        <p>Aquí se incluye el contenido adicional para explorar más detalles.</p>
        <button @click="toggleHiddenSection" class="view-button">Cerrar</button>
      </div>
    </section>
  </section>
</template>



<script>
export default {
  name: "TimelineSection",
  data() {
    return {
      selectedStep: null,
      showHiddenSection: false, // Control para mostrar la sección oculta 
      steps: [
        {
          title: "Creación de la Idea",
          description: "Identificación de necesidades para encontrar una solución creativa.",
          image: require("@/assets/idea_creation.jpeg"),
          extraContent: {
            problem: "Los estudiantes de primaria tienen dificultades en matemáticas básicas debido a métodos tradicionales centrados en la memorización, lo que genera desmotivación y bajo rendimiento académico.",
            objective: "Crear una solución educativa interactiva que refuerce la comprensión matemática con herramientas visuales y ejercicios adaptativos para mejorar motivación y progreso.",
          },
          link: 'https://drive.google.com/file/d/1xYUzyqyfKcxn6DH1srKPYIsBDyXSxm9g/view?usp=sharing', // Enlace al documento
        },

        {
          title: "Prototipo de Baja Fidelidad",
          description: "Dibujos y prototipos rápidos para visualizar el concepto inicial.",
          image: require("@/assets/collage1.png"),
          videos: [
            {
              url: "https://www.youtube.com/watch?v=v5refXud4r0&list=PLUcGAU4fh-Fs_pvkq5E0Qi9-7FdxcjLNt&index=2",
              thumbnail: require("@/assets/video1.png"),
            },
            {
              url: "https://www.youtube.com/watch?v=nYj9VY7cFaQ&list=PLUcGAU4fh-Fs_pvkq5E0Qi9-7FdxcjLNt&index=1",
              thumbnail: require("@/assets/video2.png"),
            },
            {
              url: "https://www.youtube.com/watch?v=nEGSVi9LZ8Y&list=PLUcGAU4fh-Fs_pvkq5E0Qi9-7FdxcjLNt&index=4",
              thumbnail: require("@/assets/video3.png"),
            },
            {
              url: "https://www.youtube.com/watch?v=p8o6yoMiZ2c&list=PLUcGAU4fh-Fs_pvkq5E0Qi9-7FdxcjLNt&index=5",
              thumbnail: require("@/assets/video4.png"),
            },
            {
              url: "https://www.youtube.com/watch?v=4OMf7FUmstY&list=PLUcGAU4fh-Fs_pvkq5E0Qi9-7FdxcjLNt&index=3",
              thumbnail: require("@/assets/video5.png"),
            },
          ],
          link: 'https://drive.google.com/file/d/1Ki0WC1VmlwQApjwNE4tMcBaQ_w6nZxQQ/view?usp=sharing',
        },
        {
    title: "Pruebas de Usabilidad",
    description: "Validación del prototipo con usuarios reales.",
    image: require("@/assets/prueba_usabilidad.png"),
    videos: [
            {
              url: "https://www.youtube.com/watch?v=uy3hkfM-egQ&t=163s",
              thumbnail: require("@/assets/persona_primaria.png"), // Reemplaza con la ruta real de la imagen
            },
            {
              url: "https://www.youtube.com/watch?v=2uQeJnLJGig",
              thumbnail: require("@/assets/persona_secundaria.png"), // Reemplaza con la ruta real de la imagen
            },
            {
              url: "https://www.youtube.com/watch?v=L0ymPBWr19k&t=362s",
              thumbnail: require("@/assets/persona_terciaria.png"), // Reemplaza con la ruta real de la imagen
            },
            {
              url: "https://www.youtube.com/watch?v=AJ9RJjZHk3Q",
              thumbnail: require("@/assets/antipersona.png"), // Reemplaza con la ruta real de la imagen
            },
          ],
          link: "https://www.canva.com/design/DAGZDMU3r0o/4g2Sfaw-nZpddcyYIQioUg/edit",
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
      window.open(link, "_blank"); // Abre el enlace en una nueva pestaña
    },
    openVideo(url) {
      if (url) {
        window.open(url, "_blank"); // Abre el video en una nueva pestaña
      } else {
        console.error("No se encontró la URL del video");
      }
    },
    toggleHiddenSection() {
      this.showHiddenSection = !this.showHiddenSection;
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
  background-color: #dae7ff; /* Naranja Pastel */
  color: #333333;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  position: relative; /* Necesario para la flecha */
  transition: transform 0.3s, box-shadow 0.3s;
}

/* Ajustes para limitar el ancho del texto */
.timeline-step .step-text {
  max-width: 40%; /* Limita el ancho del texto al 70% del contenedor */
  text-align: justify; /* Justifica el texto para una mejor presentación */
  margin: 0 auto; /* Centra el texto horizontalmente */
  line-height: 1.5em; /* Mejora la legibilidad del texto */
}
/* Ajustar la posición del botón Ver Más */
.timeline-step .step-content {
  display: flex;
  flex-direction: row; /* Asegura disposición vertical */
  align-items: center; /* Centra los elementos horizontalmente */
  gap: 1em; /* Espacio entre la imagen y el botón */
}

.timeline-step .step-image {
  max-width: 300px; /* Reduce el tamaño de la imagen */
  height: auto; /* Mantiene la proporción */
  margin: 0 auto; /* Centra la imagen */
}

.view-button {
  margin-top: 0.5em; /* Agrega un poco de espacio superior */
  padding: 0.3em 0.8em; /* Tamaño del botón */
  font-size: 0.8em; /* Ajusta el tamaño de fuente */
  display: block; /* Asegura que el botón ocupe su propia fila */
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
  max-width: 250px; /* Ancho aumentado */
  height: 125px; /* Alto aumentado */
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

/* Contenedor general de los videos */
.video-section {
  display: flex;
  justify-content: center; /* Centra las miniaturas horizontalmente */
  flex-wrap: wrap; /* Permite que se ajusten en varias filas si es necesario */
  gap: 1em; /* Espaciado entre las miniaturas */
  margin-top: 1em; /* Espaciado con el contenido anterior */
}

/* Contenedor individual de cada miniatura */
.video-thumbnail {
  text-align: center;
  max-width: 150px; /* Ajusta el tamaño máximo de las miniaturas */
  position: relative; /* Para posicionar el botón sobre la imagen */
}

/* Imagen de las miniaturas */
.video-image {
  width: 60%;
  border-radius: 8px; /* Bordes redondeados */
  border: 3px solid #4DB6AC; /* Borde verde pastel */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
  cursor: pointer; /* Cambia el cursor al pasar por la miniatura */
  transition: transform 0.3s, box-shadow 0.3s; /* Animación suave */
}

.video-image:hover {
  transform: scale(1.05); /* Aumenta ligeramente el tamaño */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Sombra más intensa */
}

/* Texto dinámico */
.video-text {
  font-size: 1em;
  color: #FF7043; /* Naranja */
  margin: 0.5em 0; /* Espaciado con la imagen y el botón */
}

/* Botón debajo de la imagen */
.video-button {
  padding: 0.5em 1em;
  background-color: #4DB6AC; /* Verde pastel */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.video-button:hover {
  background-color: #26C6DA; /* Azul turquesa */
  transform: scale(1.05); /* Aumenta ligeramente el tamaño del botón */
}

/* Sección Oculta */
#hidden-section {
  display: block;
  background-color: #0e0e0e;
  color: #ffffff;
  padding: 2em;
  margin: 2em 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>
  