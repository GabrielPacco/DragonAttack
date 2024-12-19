<template>
  <nav class="navbar">
    <div class="section-links">
      <ul v-if="currentProject === 'dragon'">
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#process">Proceso</a></li>
        <li><a href="#team">Nuestro Equipo</a></li>
      </ul>
      <ul v-else-if="currentProject === 'math'">
        <li><a href="#overview">Visión General</a></li>
        <li><a href="#demos">Demostraciones</a></li>
        <li><a href="#learning-process">Proceso de Aprendizaje</a></li>
        <li><a href="#team">Nuestro Equipo</a></li>
      </ul>
    </div>

    <div class="project-switch">
      <button @click="goToDragonAttack">DragonAttack</button>
      <button @click="goToMathAdventure">MathAdventure</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  computed: {
    currentProject() {
      return this.$route.name && this.$route.name.includes('Dragon') ? 'dragon' : 'math';
    },
  },
  methods: {
    goToDragonAttack() {
      this.$router.push('/dragon-attack');
    },
    goToMathAdventure() {
      this.$router.push('/math-adventure');
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #272525;
  padding: 0.5em;
  margin: 0;
  box-sizing: border-box;
  border-bottom: 2px solid #444; /* Línea decorativa */
}

.section-links ul {
  display: flex;
  list-style: none;
  gap: 1em;
  margin: 0;
  padding: 0;
}

.section-links a {
  text-decoration: none;
  color: #fff;
  padding: 0.6em 1em; /* Espaciado interno */
  border-radius: 8px; /* Bordes ligeramente redondeados */
  transition: all 0.3s ease;
  position: relative;
}

.section-links a:hover {
  color: #ffcc00; /* Resalta el texto en amarillo */
}

.section-links a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent; /* Invisible por defecto */
  border-radius: 8px; /* Alineado con los bordes del enlace */
  transition: all 0.3s ease;
}

.section-links a:hover::before {
  border-color: #ffcc00; /* Borde visible en amarillo al pasar el cursor */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra para un efecto más llamativo */
}

.project-switch {
  display: flex;
  gap: 0.5em;
  margin: 0;
  padding: 0;
}

.project-switch button {
  padding: 0.6em 1em;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  font-size: 1em;
  transition: all 0.3s ease;
}

.project-switch button:hover {
  background-color: rgba(255, 255, 255, 0.4);
  border-color: #ffcc00; /* Borde visible en amarillo */
  transform: scale(1.05); /* Ligeramente más grande */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra para un efecto visual */
}

.project-switch button:active {
  transform: scale(0.95); /* Efecto al presionar */
}

</style>
