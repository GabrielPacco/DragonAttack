// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import DragonAttackHome from '../components/DragonAttackHome.vue';
import MathAdventureHome from '../components/MathAdventureHome.vue';
import AboutDragon from '../components/AboutDragon.vue';
import VideosSection from '../components/VideosSection.vue';
import ProcessSection from '../components/ProcessSection.vue';
import TeamSection from '../components/TeamSection.vue';

const routes = [
  { path: '/', redirect: '/dragon-attack' }, // Redirige temporalmente a AboutDragon para probar
  { path: '/dragon-attack', name: 'DragonAttackHome', component: DragonAttackHome },
  { path: '/math-adventure', name: 'MathAdventureHome', component: MathAdventureHome },
  { path: '/about', component: AboutDragon },
  { path: '/videos', component: VideosSection },
  { path: '/process', component: ProcessSection },
  { path: '/team', component: TeamSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
