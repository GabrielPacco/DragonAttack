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
          { name: 'Gabriel P.', role: 'Desarrollador', photo: require('@/assets/gabriel.jpg') },
          { name: 'Edson B.', role: 'Diseñador', photo: require('@/assets/edson.jpeg') },
          { name: 'Jorge T.', role: 'Desarrollador', photo: require('@/assets/edson.jpeg') },
          { name: 'Katherine B.', role: 'Diseñadora', photo: require('@/assets/edson.jpeg') },
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
    background: linear-gradient(to bottom, #8ecae6, #42d49c); /* Colores brillantes para MathAdventure */
  }
  
  .team-section h2 {
    font-size: 2.5em;
    color: #ff6d00; /* Color vibrante para destacar */
    margin-bottom: 0.5em;
  }
  
  .team-section p {
    font-size: 1.2em;
    color: #ffffff;
    margin-bottom: 2em;
  }
  
  .team-members {
    display: flex;
    justify-content: center;
    gap: 2em;
    flex-wrap: wrap;
  }
  
  .team-member {
    text-align: center;
    max-width: 150px;
    background-color: #ffffff; /* Fondo blanco para contraste */
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .member-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(34, 195, 160, 0.5); /* Sombra colorida */
    margin: 0 auto 1em;
  }
  
  .member-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .team-member h3 {
    font-size: 1.1em;
    color: #ff6d00; /* Color brillante */
    margin-bottom: 0.2em;
  }
  
  .team-member .role {
    font-size: 1em;
    color: #219ebc; /* Azul temático */
  }
  </style>
  