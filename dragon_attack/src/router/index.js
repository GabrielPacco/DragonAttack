// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import DragonAttackHome from '../components/DragonAttackHome.vue';
import MathAdventureHome from '../components/MathAdventureHome.vue';
import AboutDragon from '../components/AboutDragon.vue';
import VideosSection from '../components/VideosSection.vue';
import ProcessSection from '../components/ProcessSection.vue';
import TeamSection from '../components/TeamSection.vue';
import TeamSectionMath from '../components/TeamSectionMath.vue'; // Importa el nuevo componente
import OverviewSection from '../components/OverviewSection.vue';
import LearningProcessSection from '../components/LearningProcessSection.vue';

const routes = [
  { path: '/', redirect: '/math-adventure' }, // Redirige temporalmente a AboutDragon para probar
  { path: '/dragon-attack', name: 'DragonAttackHome', component: DragonAttackHome },
  { path: '/math-adventure', name: 'MathAdventureHome', component: MathAdventureHome },
  { path: '/about', component: AboutDragon },
  { path: '/videos', component: VideosSection },
  { path: '/process', component: ProcessSection },
  { path: '/team', component: TeamSection },
  { path: '/math-adventure/team', component: TeamSectionMath }, // Ruta para la nueva sección
  { path: '/overview', component: OverviewSection},
  { path: '/processmath', component: LearningProcessSection}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
