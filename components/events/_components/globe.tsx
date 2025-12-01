'use client';

import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

const GLOBE_IMAGE_URL = '/globe/earth-blue-marble.webp';
const BUMP_IMAGE_URL = '/globe/earth-topology.webp';
const CLOUDS_IMG_URL = '/globe/clouds.webp';

// Cloud configuration
const CLOUDS_ALT_FACTOR = 0.018; 
const GLOBE_ROTATION_SPEED = 0.0008; 

// Camera Configuration
const CAMERA_FOV = 50;
const INITIAL_CAMERA_Z_DESKTOP = 450;
const INITIAL_CAMERA_Z_MOBILE = 150;

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<ThreeGlobe | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const globeInstance = useMemo(() => {
    return new ThreeGlobe()
      .globeImageUrl(GLOBE_IMAGE_URL)
      .bumpImageUrl(BUMP_IMAGE_URL);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const globe = globeInstance;
    globeRef.current = globe; 

    // Lighting
    scene.add(new THREE.AmbientLight(0xcccccc, 1.5));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.8));

    // --- Clouds Mesh Setup ---
    const cloudsRadius = globe.getGlobeRadius() * (1 + CLOUDS_ALT_FACTOR);
    const cloudsGeometry = new THREE.SphereGeometry(cloudsRadius, 75, 75);
    
    const cloudsMesh = new THREE.Mesh(cloudsGeometry);
    
    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      cloudsMesh.material = new THREE.MeshPhongMaterial({
        map: cloudsTexture,
        transparent: true,
        opacity: 0.9,
        depthWrite: false, 
      });
      cloudsMesh.material.needsUpdate = true;
    });

    globe.add(cloudsMesh);
    scene.add(globe);

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);
    
    // --- Camera Setup ---
    const camera = new THREE.PerspectiveCamera(CAMERA_FOV, 1, 0.1, 2000); 
    cameraRef.current = camera;
    
    const initialZ = window.innerWidth < 425 ? INITIAL_CAMERA_Z_MOBILE : INITIAL_CAMERA_Z_DESKTOP;
    camera.position.z = initialZ;

    const handleResize = () => {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      renderer.setSize(containerWidth, containerHeight);
      
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
    };
    
    handleResize();

    // --- Animation Loop ---
    const animate = () => {
      globe.rotation.y += GLOBE_ROTATION_SPEED;
      cloudsMesh.rotation.y += GLOBE_ROTATION_SPEED * 1.5;

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      cloudsMesh.geometry.dispose();
      if (cloudsMesh.material) {
        if (Array.isArray(cloudsMesh.material)) {
          cloudsMesh.material.forEach(m => m.dispose());
        } else {
          cloudsMesh.material.dispose();
        }
      }
    };
  }, [globeInstance]);

  return (
    <div 
      ref={containerRef} 
      id="globeViz" 
      className="overflow-hidden pointer-events-none w-full h-full" 
    />
  );
}