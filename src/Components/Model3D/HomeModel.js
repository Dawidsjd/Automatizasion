import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const HomeModel = () => {
  const modelRef = useRef();

  let mixer = null;
  const { scene, animations } = useLoader(GLTFLoader, "/import3D/autumn_house.glb");

  scene.traverse(function (node) {
    if (node.isMesh) node.castShadow = true;
    node.receiveShadow = true;
  });

  mixer = new THREE.AnimationMixer(scene);

  useFrame((state, delta) => {
    mixer.update(delta);
    modelRef.current.rotation.y += 0.001;
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={[0.15, 0.15, 0.15]}
      position={[0, -1, 0]}
    />
  );
};

export default HomeModel;
