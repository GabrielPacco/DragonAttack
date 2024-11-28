<template>
  <section class="math-overview">
    <div class="overview-content">
      <h1>MathAdventure</h1>
      <h2>¡Aprende, Juega y Mejora Tus Habilidades!</h2>
      <p>
        MathAdventure es una aventura educativa que mezcla desafíos matemáticos con acción física. 
        Los jugadores esquivan obstáculos y resuelven problemas matemáticos en un entorno interactivo, 
        ¡donde cada movimiento cuenta! Desarrolla rapidez mental, mejora tus reflejos y fortalece el 
        equilibrio mientras te diviertes.
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
  flex-wrap: wrap; 
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom right, #81c784, #64b5f6);
  color: #ffffff;
  width: 100vw;
  height: 90vh;
  padding: 2em;
  box-sizing: border-box;
}

.overview-content {
  max-width: 50%;
  text-align: center;
  padding: 1em;
}

.overview-content h1 {
  font-size: 3rem;
  color: #ff7043;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  margin-bottom: 0.5em;
  text-shadow: 2px 2px #ffcc00;
}

.overview-content h2 {
  font-size: 2rem;
  color: #ffcc80;
  margin-bottom: 1em;
  text-shadow: 1px 1px #ff7043;
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
  background-color: #ff7043;
  color: #ffffff;
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
  background-color: #ffa500;
}

.overview-image {
  max-width: 40%;
  width: 100%; /* Se ajusta al ancho disponible */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}

.overview-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
}

/* Media Queries para pantallas pequeñas */
@media (max-width: 768px) {
  .math-overview {
    flex-direction: column; /* Coloca los elementos uno debajo del otro */
    padding: 1em;
  }

  .overview-content {
    max-width: 90%; /* Ajusta el ancho en pantallas pequeñas */
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
    max-width: 90%;
    margin-top: 1em;
  }

  .overview-image img {
    max-width: 100%;
  }
}
</style>
