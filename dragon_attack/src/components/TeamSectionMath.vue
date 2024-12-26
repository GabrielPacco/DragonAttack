<template>
    <section class="team-section" id="team">
      <h2>Conoce al Equipo de MathAdventure</h2>
      <p>Conoce a los creadores detrás de esta aventura educativa y divertida.</p>
      <div class="team-members">
        <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
          <div class="member-photo">
            <img :src="member.photo" :alt="member.name" />
          </div>
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TeamSection',
    data() {
      return {
        teamMembers: [
          { name: 'Gabriel Pacco.', role: 'Desarrollador', photo: require('@/assets/gabriel.jpg') },
          { name: 'Edson Béjar.', role: 'Diseñador', photo: require('@/assets/edson.jpeg') },
          { name: 'Jorge Tito.', role: 'Desarrollador', photo: require('@/assets/tito.jpg') },
          { name: 'Katherine Béjar.', role: 'Diseñadora', photo: require('@/assets/k.jpg') },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .team-section {
    padding: 3em 2em;
    text-align: center;
    color: #333333;
    background: linear-gradient(to bottom right, #0e0e0e, #3d3d3c); /* Fondo original */
  }
  
  /* Títulos destacados */
  .team-section h2 {
    font-size: 2.5em;
    color: #FF80AB; /* Rosa Vivo para destacar */
    margin-bottom: 0.5em;
    text-shadow: 2px 2px #FFF59D; /* Sombra Amarillo Pastel */
  }
  
  /* Descripción de la sección */
  .team-section p {
    font-size: 1.2em;
    color: #ffffff; /* Texto claro */
    margin-bottom: 2em;
  }
  
  /* Contenedor de miembros del equipo */
  .team-members {
    display: flex;
    justify-content: center;
    gap: 2em;
    flex-wrap: wrap;
  }
  
  /* Estilo de cada miembro */
  .team-member {
    text-align: center;
    max-width: 150px;
    background-color: #2c2f30; /* Fondo Turquesa para contraste */
    padding: 1em;
    border-radius: 15px; /* Bordes más amigables */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Sombra suave */
  }
  
  /* Foto del miembro */
  .member-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(255, 128, 171, 0.5); /* Sombra Rosa Vivo */
    margin: 0 auto 1em;
  }
  
  .member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Nombre del miembro */
  .team-member h3 {
    font-size: 1.1em;
    color: #FF7043; /* Naranja Vivo */
    margin-bottom: 0.2em;
  }
  
  /* Rol del miembro */
  .team-member .role {
    font-size: 1em;
    color: #FFD700; /* Amarillo Brillante */
  }
  </style>
  
  