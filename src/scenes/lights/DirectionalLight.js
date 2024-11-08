import * as THREE from "three";

const DirectionalLight = () => {
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(3, 10, 10);
  directionalLight.castShadow = true;

  directionalLight.shadow.mapSize.width = 2048; // Increase shadow resolution
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.radius = 4;

  return directionalLight;
};

export default DirectionalLight;
