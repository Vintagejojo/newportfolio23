'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Stars = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load background texture
    const loader = new THREE.TextureLoader();
    // Replace with your image path below
    // const backgroundTexture = loader.load('/space_stars.jpg');
    // scene.background = backgroundTexture;

    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1, // Adjust size to your preference
      sizeAttenuation: true, // Ensures stars scale with distance
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3),
    );

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 1;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default Stars;
