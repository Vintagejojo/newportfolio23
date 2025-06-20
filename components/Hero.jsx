'use client';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';
import * as THREE from 'three';

export default function Hero() {
  const sphereRef = useRef(null);

  useEffect(() => {
    // === THREE SETUP ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(400, 400);
    if (sphereRef.current) {
      sphereRef.current.appendChild(renderer.domElement);
    }

    // === LIGHTING ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // === TEXTURE & MATERIAL ===
    const texture = new THREE.TextureLoader().load('/jopic.jpg');
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ map: texture });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // Rotate to show front of the image
    sphere.rotation.y = Math.PI * 1.5;

    scene.add(sphere);

    // Camera position
    camera.position.z = 5;

    // === ANIMATION ===
    let step = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      step += 0.03;

      // Bounce + Sway
      sphere.position.y = Math.sin(step) * 0.1;
      sphere.position.x = Math.sin(step * 0.6) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    // === CLEANUP ===
    return () => {
      renderer.dispose();
      if (sphereRef.current?.contains(renderer.domElement)) {
        sphereRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section>
      <div className="flex flex-col text-center items-center justify-center mt-10 py-6 sm:py-20 md:flex-row md:space-x-4 md:text-left md:py-30">
        <div className="md:w-1/2 md:mt-2">
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
