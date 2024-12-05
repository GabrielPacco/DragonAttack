<template>
  <section class="math-overview">
    <div class="overview-content">
      <h1>MathAdventure</h1>
      <h2>¡Aprende, Juega y Mejora Tus Habilidades!</h2>
      <p>
        MathAdventure es una aventura educativa que mezcla desafíos matemáticos en un entorno interactivo. 
        Los jugadores resuelven problemas matemáticos mientras desarrollan rapidez mental y mejoran sus habilidades de lógica y estrategia.
      </p>
      <p>
        Este juego desafía a los niños a medida que avanzan, aumentando la dificultad de los problemas y obstáculos. 
        Con recompensas y retroalimentación instantánea, MathAdventure mantiene la motivación y compromiso, 
        ofreciendo una experiencia lúdica y educativa ideal para el desarrollo integral.
      </p>
      <button class="explore-more" @click="goToGameFeatures">Explorar Más</button>
    </div>
    <div class="overview-image">
      <img src="../assets/math_adventure.png" alt="Math World VR Image" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'OverviewSection',
  methods: {
    goToGameFeatures() {
      this.$router.push('/processmath');
    },
  },
};
</script>

<style scoped>
.math-overview {
  display: flex;
  justify-content: space-between; /* Distribuye los elementos correctamente */
  align-items: center;
  background: linear-gradient(to bottom right, #0e0e0e, #3d3d3c);
  color: #ffffff;
  width: 99vw; /* Asegura el ancho completo */
  height: 90vh; /* Ajusta la altura para ocupar el 90% del viewport */
  padding: 10em; /* Uniforme para evitar espacios adicionales */
  box-sizing: border-box; /* Garantiza el cálculo correcto del tamaño */
  border-radius: 0px;
}

.overview-content {
  max-width: 50%; /* Ajusta el contenido a la mitad del contenedor */
  text-align: center;
  padding: 2em; /* Espaciado interno uniforme */
}

.overview-content h1 {
  font-size: 3rem;
  color: #FF80AB; /* Rosa Vivo */
  font-family: 'Comic Sans MS', cursive, sans-serif;
  margin-bottom: 0.5em;
  text-shadow: 2px 2px #FFF59D; /* Amarillo Pastel */
}

.overview-content h2 {
  font-size: 2rem;
  color: #FFD700; /* Amarillo Brillante */
  margin-bottom: 1em;
  text-shadow: 1px 1px #FF80AB; /* Rosa Vivo */
}

.overview-content p {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #ffffff;
  font-family: Arial, sans-serif;
  margin-bottom: 1em;
}

.explore-more {
  margin-top: 1em;
  background-color: #FFD700; /* Amarillo Brillante */
  color: #1E1E1E; /* Texto oscuro para contraste */
  padding: 0.8em 1.5em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-shadow: 1px 1px #000000;
  transition: background-color 0.3s ease;
}

.explore-more:hover {
  background-color: #FF80AB; /* Rosa Vivo para el hover */
}

.overview-image {
  flex: 1; /* Asegura que la imagen tome el espacio restante */
  display: flex;
  justify-content: flex-end; /* Ajusta la posición de la imagen */
  align-items: center;
  padding: 0; /* Sin padding adicional */
  margin: 0; /* Sin márgenes adicionales */
}

.overview-image img {
  width: 100%; /* Ocupa el 90% del contenedor */
  max-width: 500px;
  border-radius: 35px; /* Bordes redondeados */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5); /* Sombra para efecto visual */
  object-fit: cover; /* Ajusta la imagen al espacio disponible */
}

/* Media Queries para pantallas pequeñas */
@media (max-width: 768px) {
  .math-overview {
    flex-direction: column; /* Coloca los elementos uno debajo del otro */
    padding: 1em; /* Ajusta el padding para pantallas pequeñas */
  }

  .overview-content {
    max-width: 90%; /* Ajusta el ancho del contenido */
    padding: 1em; /* Reduce el espaciado interno */
  }

  .overview-content h1 {
    font-size: 2.5rem;
  }

  .overview-content h2 {
    font-size: 1.5rem;
  }

  .overview-content p {
    font-size: 1rem;
  }

  .explore-more {
    font-size: 1rem;
    padding: 0.6em 1em;
  }

  .overview-image {
    max-width: 90%; /* Ajusta la imagen al ancho disponible */
    margin-top: 1em; /* Agrega espacio entre contenido e imagen */
  }

  .overview-image img {
    max-width: 100%; /* Asegura que la imagen no desborde */
  }
}
</style>


