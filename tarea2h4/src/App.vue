<template>
  <div id="app">
    <h1>🎨 Figuras de Payesito 🤡</h1>
    <div class="figuras-wrapper">
      <div class="figura-card">
        <Triangulo3D />
        <p class="nombre">🔺 Triángulo</p>
      </div>
      <div class="figura-card">
        <Trapezoide3D />
        <p class="nombre">🔷 Trapezoide</p>
      </div>
      <div class="figura-card">
        <Cubo3D />
        <p class="nombre">🔷 Cubo</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Triangulo3D from './components/Triangulo3D.vue'
import Trapezoide3D from './components/Trapezoide3D.vue'
import Cubo3D from './components/Cubo3D.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

body, html {
  margin: 0;
  padding: 0;
  background: radial-gradient(circle at top left, #ffcc70, #ff5891, #a844a7);
  font-family: 'Fredoka One', cursive;
  overflow-x: hidden;
}

#app {
  text-align: center;
  padding: 40px 20px;
  color: #fff;
}

h1 {
  font-size: 3rem;
  margin-bottom: 40px;
  color: #fff;
  text-shadow: 3px 3px #00000055;
  animation: pop 1s ease-in-out;
}

.figuras-wrapper {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.figura-card {
  background: linear-gradient(145deg, #ffaad4, #ffe6c7);
  padding: 25px;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border: 4px dashed #ffffff88;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 320px;
  height: auto;
}

.figura-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.4);
  border-color: #ffffffcc;
}

.nombre {
  margin-top: 15px;
  font-weight: bold;
  font-size: 1.4rem;
  color: #333;
  text-shadow: 1px 1px 2px #fff;
}

/* Animación */
@keyframes pop {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>