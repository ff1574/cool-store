import * as THREE from "three";

const GradientBackground = (scene) => {
  // Shader material for gradient background
  const material = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(0x444444) }, // Bottom color
      color2: { value: new THREE.Color(0x222222) }, // Top color
    },
    vertexShader: `
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec3 vPosition;
      void main() {
        float gradient = (vPosition.y + 50.0) / 100.0;
        gl_FragColor = vec4(mix(color2, color1, gradient), 1.0);
      }
    `,
    side: THREE.BackSide,
  });

  // Large sphere geometry for the gradient background
  const geometry = new THREE.SphereGeometry(100, 64, 64);
  const background = new THREE.Mesh(geometry, material);

  scene.add(background);
};

export default GradientBackground;
