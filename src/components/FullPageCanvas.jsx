import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import MainScene from "../scenes/MainScene";

const FullPageCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x1c1c2e, 0.8);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    camera.position.set(0, 1.5, 4);
    camera.rotation.x = -Math.PI / 6.4; 

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    new RGBELoader().load("/textures/studio.hdr", (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.background = texture;
    });

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.5, // Bloom intensity
      0.2, // Bloom radius
      0.6 // Bloom threshold (keep low to enhance glow effect)
    );
    composer.addPass(bloomPass);

    let porscheModel, pedestal, foggyLightSphere;
    MainScene(scene).then((loadedObjects) => {
      porscheModel = loadedObjects.porscheModel;
      pedestal = loadedObjects.pedestal;
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (porscheModel && pedestal) {
        porscheModel.rotation.y += 0.01; // Rotate the car model
        pedestal.rotation.y += 0.01; // Rotate the pedestal
      }

      composer.render();
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100vw", height: "100vh" }}
    />
  );
};

export default FullPageCanvas;
