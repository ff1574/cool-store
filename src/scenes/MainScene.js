import DirectionalLight from "./lights/DirectionalLight";
import loadPorscheModel from "./objects/PorscheModel";
import Pedestal from "./objects/Pedestal";
import FoggyLightSphere from "./objects/FoggyLightSphere";

const MainScene = async (scene) => {
  const directionalLight = DirectionalLight();
  const pedestal = Pedestal();
  const foggyLightSphere = FoggyLightSphere();

  // scene.add(directionalLight);
  scene.add(pedestal);
  // scene.add(foggyLightSphere);

  const porscheModel = await loadPorscheModel(scene);

  return { porscheModel, pedestal, foggyLightSphere };
};

export default MainScene;
