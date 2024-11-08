import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loadPorscheModel = (scene) => {
  const loader = new GLTFLoader();

  return new Promise((resolve, reject) => {
    loader.load(
      "/models/porsche911.glb",
      (gltf) => {
        const model = gltf.scene;

        // Scale and position the model
        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0.7);
        model.rotation.set(0, Math.PI / 5, 0);
        model.castShadow = true;

        model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            if (node.material) {
              // For metallic paint look
              node.material.roughness = 0.1;
              node.material.metalness = 0.1;
              node.material.clearcoat = 0.6;
              node.material.clearcoatRoughness = 0.1;
            }
          }
        });

        // Add the model to the scene
        scene.add(model);

        // Resolve the promise with the model
        resolve(model);
      },
      undefined,
      (error) => {
        console.error("Error loading Porsche model:", error);
        reject(error);
      }
    );
  });
};

export default loadPorscheModel;
