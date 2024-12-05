<template>
  <section class="demos-section" id="mathadventure-demos">
    <h2>Explora las Demostraciones Interactivas de MathAdventure</h2>
    <p>Descubre cómo MathAdventure puede ayudarte a aprender y jugar al mismo tiempo.</p>
    
    <div class="video-container">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/6II34wSqDM4"    
        title="MathAdventure Demo Video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    
    <div class="video-thumbnails">
      <div class="thumbnail" v-for="(demo, index) in demoVideos" :key="index">
        <img :src="demo.thumbnail" :alt="demo.title" />
        <h3>{{ demo.title }}</h3>
        <button @click="openDemo(demo.url)">Ver Demostración</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DemosSection',
  data() {
    return {
      demoVideos: [
        {
          title: 'Introducción a MathAdventure',
          url: 'https://www.youtube.com/watch?v=example1',
          thumbnail: require('@/assets/intro_thumbnail.webp'),
        },
        {
          title: 'Demostración: Resolver Problemas',
          url: 'https://www.youtube.com/watch?v=example2',
          thumbnail: require('@/assets/problems_thumbnail.jpg'),
        },
        {
          title: 'Explorando el Mundo Virtual',
          url: 'https://www.youtube.com/watch?v=example3',
          thumbnail: require('@/assets/virtualworld_thumbnail.webp'),
        },
      ],
    };
  },
  methods: {
    openDemo(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
.demos-section {
  padding: 3em 2em;
  text-align: center;
  color: #e0e0e0;
  background-color: #0e0e0e;
}

.demos-section h2 {
  font-size: 2.5em;
  color: #FF80AB; /* Rosa Vivo */
  margin-bottom: 0.5em;
}

.demos-section p {
  font-size: 1.2em;
  color: #dcdcdc;
  margin-bottom: 2em;
}

.video-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}

iframe {
  width: 100%;
  max-width: 800px;
  height: 450px;
  border: 5px solid #FF80AB; /* Rosa Vivo */
  border-radius: 10px;
}

.video-thumbnails {
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
}

.thumbnail {
  text-align: center;
  max-width: 200px;
}

.thumbnail img {
  width: 100%;
  border-radius: 8px;
  border: 3px solid #4DB6AC; /* Verde Pastel */
  box-shadow: 0 0 10px rgba(77, 182, 172, 0.5);
  cursor: pointer;
  transition: transform 0.3s;
}

.thumbnail img:hover {
  transform: scale(1.05);
}

.thumbnail h3 {
  font-size: 1em;
  color: #FF80AB; /* Rosa Vivo */
  margin: 0.5em 0;
}

.thumbnail button {
  padding: 0.5em 1em;
  background-color: #4DB6AC; /* Verde Pastel */
  color: #0e0e0e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.thumbnail button:hover {
  background-color: #26C6DA; /* Azul Turquesa */
}
</style>
