import * as THREE from "three";

const Pedestal = () => {
  const geometry = new THREE.CylinderGeometry(2.5, 2.5, 1, 64);
  const material = new THREE.MeshStandardMaterial({
    color: 0x888888,
    metalness: 0.8,
    roughness: 0.2,
  });
  const pedestal = new THREE.Mesh(geometry, material);

  pedestal.castShadow = true;
  pedestal.receiveShadow = true;

  // Position the pedestal just below the car
  pedestal.position.set(0, -0.5, 0);

  return pedestal;
};

export default Pedestal;
