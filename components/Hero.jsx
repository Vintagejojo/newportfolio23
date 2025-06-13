'use client';
import AnimatedText from './common/AnimateText';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';
import * as THREE from 'three';

export default function Hero() {
  const sphereRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(400, 400);
    sphereRef.current.appendChild(renderer.domElement);

    // Add light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Sphere geometry and texture
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const texture = new THREE.TextureLoader().load('/jopic.jpg'); // Replace with your profile image path
    const sphereMaterial = new THREE.MeshStandardMaterial({ map: texture });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01; // Rotate the sphere
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
      sphereRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section>
      <div className="flex flex-col text-center items-center justify-center mt-10 py-6 sm:py-20 md:flex-row md:space-x-4 md:text-left md:py-30">
        <div className="md:w-1/2 md:mt-2">
          {/* Sphere canvas */}
          <div ref={sphereRef}></div>
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="header-shadow font-bold text-4xl text-generalbg mt-6 md:text-7xl md:mt-0">
            Hey there. I'm Jordan.
          </h1>
          <p className="text-lg text-generalbg mt-4 mb-6 md:text-2xl">
            I'm a{' '}
            <span className="font-semibold text-fuchsia-400">
              Full Stack Engineer{' '}
            </span>
            transforming challenges into seamless digital solutions
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="AboutMe"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
