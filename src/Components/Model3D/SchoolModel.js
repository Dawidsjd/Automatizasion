import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from "three";

const SchoolModel = () => {

  const modelRef = useRef();

  let mixer = null;
  const { scene, animations } = useLoader(GLTFLoader, "/import3D/school.glb");
  //console.log(scene.animations);
    
    scene.traverse(function(node){
        if(node.isMesh)
            node.castShadow = true;
            node.receiveShadow = true;
            
    });

  mixer = new THREE.AnimationMixer(scene);
  // void mixer.clipAction(animations[0]).play();

  useFrame((state, delta) => {
    mixer.update(delta);
    // Tutaj można dodać animacje lub manipulacje modelem
    modelRef.current.rotation.y += 0.001;
  });

  return <primitive object={scene} ref={modelRef} scale={[0.004, 0.004, 0.004]} position={[0, -2, 0]} />;
};

export default SchoolModel;
