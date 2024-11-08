import * as THREE from "three";

const AmbientLight = () => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 3);

  return ambientLight;
};

export default AmbientLight;
