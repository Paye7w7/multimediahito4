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
  
    const geometry = new THREE.ConeGeometry(1, 2, 3);
  
    // Material con brillo alto
    const material = new THREE.MeshPhongMaterial({
      color: 0xFFFF00, // amarillo
      shininess: 100,  // mucho brillo
      specular: 0xffffaa,
      side: THREE.DoubleSide,
    });
  
    const triangulo = new THREE.Mesh(geometry, material);
    scene.add(triangulo);
  
    // Luz puntual más intensa
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(2, 3, 5);
    scene.add(pointLight);
  
    // Luz direccional para sombras y reflejos
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(-1, 2, 4);
    scene.add(directionalLight);
  
    // Luz ambiental para iluminar zonas oscuras
    const ambientLight = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(ambientLight);
  
    const animate = () => {
      requestAnimationFrame(animate);
      triangulo.rotation.x += 0.01;
      triangulo.rotation.y += 0.01;
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
    box-shadow: 0 10px 30px rgba(255, 255, 0, 0.8); /* sombra amarilla más intensa */
    background: radial-gradient(circle at center, #1a1a1a, #000);
  }
  </style>