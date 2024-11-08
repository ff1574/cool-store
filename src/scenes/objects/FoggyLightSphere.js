import * as THREE from "three";

const FoggyLightSphere = () => {
  const sphere = new THREE.SphereGeometry(0.5, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const mesh = new THREE.Mesh(sphere, material);

  mesh.position.set(0, 5, -3);

  const light = new THREE.PointLight(0xff69b4, 10, 50); // Bright pink light
  light.add(mesh); // Attach the mesh to the light

  // Increase the light intensity for a more powerful glow
  light.intensity = 20;
  light.distance = 5000;

  return light;
};

export default FoggyLightSphere;
