<template>
    <div ref="canvasContainer" class="canvas-container"></div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import * as THREE from 'three';
  
  const canvasContainer = ref<HTMLDivElement | null>(null);
  
  onMounted(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#1a1a1a');
  
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 4;
  
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(300, 300);
  
    if (canvasContainer.value) {
      canvasContainer.value.appendChild(renderer.domElement);
    }
  
    const trapezoideGeometry = new THREE.BufferGeometry();
  
    const vertices = new Float32Array([
      // Base grande (inferior)
      -1, -1, 1,
      1, -1, 1,
      1, -1, -1,
      -1, -1, -1,
  
      // Base pequeña (superior)
      -0.5, 1, 0.5,
      0.5, 1, 0.5,
      0.5, 1, -0.5,
      -0.5, 1, -0.5,
    ]);
  
    const indices = [
      // Caras inferior y superior
      0, 1, 2, 0, 2, 3,
      4, 5, 6, 4, 6, 7,
  
      // Lados
      0, 1, 5, 0, 5, 4,
      1, 2, 6, 1, 6, 5,
      2, 3, 7, 2, 7, 6,
      3, 0, 4, 3, 4, 7
    ];
  
    trapezoideGeometry.setIndex(indices);
    trapezoideGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    trapezoideGeometry.computeVertexNormals();
  
    const material = new THREE.MeshPhongMaterial({
      color: 0x00fff0,  // celeste brillante
      shininess: 150,
      specular: 0x88ffff,
      side: THREE.DoubleSide
    });
  
    const trapezoide = new THREE.Mesh(trapezoideGeometry, material);
    scene.add(trapezoide);
  
    // Luces
    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);
  
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);
  
    const animate = () => {
      requestAnimationFrame(animate);
      trapezoide.rotation.x += 0.01;
      trapezoide.rotation.y += 0.01;
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