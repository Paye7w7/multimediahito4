<template>
    <div ref="canvasContainer" class="canvas-container"></div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import * as THREE from 'three';
  
  const canvasContainer = ref<HTMLDivElement | null>(null);
  
  onMounted(() => {
    const scene = new THREE.Scene();
  
    const camera = new THREE.PerspectiveCamera(
      75,
      1, // Relación de aspecto cuadrada para 400x400
      0.1,
      1000
    );
  
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 400);
  
    if (canvasContainer.value) {
      canvasContainer.value.appendChild(renderer.domElement);
    }
  
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00, // Verde brillante
      wireframe: true
    });
  
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    camera.position.z = 3;
  
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
  
    animate();
  });
  </script>
  
  <style scoped>
  .canvas-container {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.6); /* sombra celeste marcada */
    background: radial-gradient(circle at center, #1a1a1a, #000);
  }
  </style>