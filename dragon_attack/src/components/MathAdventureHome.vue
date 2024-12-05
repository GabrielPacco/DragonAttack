<template>
  <div class="math-adventure-home">
    <section id="overview">
      <OverviewSection />
    </section>
    <section id="overview">
      <TimelineSteps />
    </section>
    <section id="demos">
      <DemosSection />
    </section>
    <section id="learning-process">
      <LearningProcessSection />
    </section>
    <section id="team">
      <TeamSectionMath />
    </section>
  </div>
</template>

<script>
import OverviewSection from './OverviewSection.vue';
import DemosSection from './DemosSection.vue';
import LearningProcessSection from './LearningProcessSection.vue';
import TeamSectionMath from './TeamSectionMath.vue';
import TimelineSteps from './TimelineSteps.vue';

export default {
  name: 'MathAdventureHome',
  components: {
    OverviewSection,
    TimelineSteps,
    DemosSection,
    LearningProcessSection,
    TeamSectionMath,
  },
};
</script>

<style scoped>
.math-adventure-home {
  display: flex;
  flex-direction: column;
  gap: 0; /* Elimina espacio entre los elementos hijos */
}

section {
  padding: 0em; /* Reduce el espacio interno */
  border: 0px solid transparent; /* Borde transparente o ajustado */
  border-radius: 4px; /* Ajusta el redondeo de las esquinas */
}
</style>

