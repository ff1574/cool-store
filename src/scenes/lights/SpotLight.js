import * as THREE from "three";

const SpotLight = () => {
  const spotLight = new THREE.SpotLight(0xffffff, 2);

  spotLight.position.set(0, 0, 0);
  spotLight.angle = 0.3;
  spotLight.penumbra = 1;
  spotLight.castShadow = true;
  spotLight.shadow.bias = -0.0001;

  return spotLight;
};

export default SpotLight;
