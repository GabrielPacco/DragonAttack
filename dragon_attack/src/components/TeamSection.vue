<template>
  <section class="team-section" id="team">
    <h2>Conoce al Equipo de DragonAttack</h2>
    <p>Descubre a los guerreros, estrategas y místicos detrás de la aventura.</p>
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
        { name: 'Gabriel Pacco', role: 'Desarrollador', photo: require('@/assets/gabriel.jpg') },
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
  color: #e0e0e0;
  background: linear-gradient(to bottom, #000000, #1e1e1e); /* De negro a gris oscuro */
}

.team-section h2 {
  font-size: 2.5em;
  color: #a14101; /* Color dorado épico */
  margin-bottom: 0.5em;
}

.team-section p {
  font-size: 1.2em;
  color: #dcdcdc;
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
}

.member-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(255, 204, 0, 0.5); /* Sombra para resaltar */
  margin: 0 auto 1em;
}

.member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member h3 {
  font-size: 1.1em;
  color: #ffcc00; /* Título dorado */
  margin-bottom: 0.2em;
}

.team-member .role {
  font-size: 1em;
  color: #dcdcdc;
}
</style>
