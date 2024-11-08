import * as THREE from "three";

const LightSphere = (
  color = 0xff0000,
  intensity = 1,
  position = { x: 0, y: 0, z: 0 }
) => {
  // Create the sphere geometry
  const geometry = new THREE.SphereGeometry(1, 32, 32);

  // Create a material with emissive color to simulate light emission
  const material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    emissiveIntensity: intensity,
    roughness: 0.5, // Adjust as needed for the effect
    metalness: 0, // Non-metallic for a soft glow
  });

  // Create the mesh and apply position
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(position.x, position.y, position.z);

  return sphere;
};

export default LightSphere;
