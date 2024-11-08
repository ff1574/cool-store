import * as THREE from "three";

const ParticleBackground = (scene) => {
  const particlesCount = 1000;
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesMaterial = new THREE.PointsMaterial({
    color: 0x888888, // Adjust color to fit your desired aesthetic
    size: 0.05,
    transparent: true,
    opacity: 0.8,
  });

  // Generate random positions for each particle
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20; // Spread particles in a 20x20x20 area
  }
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  // Create the particle system
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);

  // Add the particle system to the scene
  scene.add(particles);

  // Animation update for the particle background
  const animateParticles = () => {
    particles.rotation.y += 0.001; // Slowly rotate particles around the Y-axis
  };

  return animateParticles;
};

export default ParticleBackground;
