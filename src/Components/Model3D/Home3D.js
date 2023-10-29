import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import HomeModel from './HomeModel';

const ThreeScene = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const models = [
    <HomeModel />,
    // Dodaj pozostałe modele do tablicy
  ];

  const handleNextModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  const handlePreviousModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  };
  
  return (
    <>
{/*       
      <button onClick={handlePreviousModel}>Poprzedni Model</button>
      <button onClick={handleNextModel}>Następny Model</button> */}

    <Canvas shadows style={{ width: '100%', height: '100%',}}>
      
      <Suspense fallback={null}>
        
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        zoomSpeed={0.5}
        panSpeed={0.8}
        rotateSpeed={0.4}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxDistance={100}
        minDistance={1}
      />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            
            {models[currentModelIndex]}
          </>
        )}
      </CubeCamera>
      

      <spotLight
        color={0xffffff} // Biały kolor światła
        intensity={65} // Intensywność światła
        angle={Math.PI / 4}
        penumbra={0.5}
        position={[0, 10, 0]} // Ustawia światło nad modelem
        castShadow
      />
      <spotLight
        color={0xffffff} // Biały kolor światła
        intensity={65} // Intensywność światła
        angle={Math.PI / 4}
        penumbra={0.5}
        position={[0, -10, 0]} // Ustawia światło pod modelem
        castShadow
      />
      <spotLight
        color={0xffffff} // Biały kolor światła
        intensity={65} // Intensywność światła
        angle={Math.PI / 4}
        penumbra={0.5}
        position={[10, 0, 0]} // Ustawia światło pod modelem
        castShadow
      />
      <spotLight
        color={0xffffff} // Biały kolor światła
        intensity={65} // Intensywność światła
        angle={Math.PI / 4}
        penumbra={0.5}
        position={[-10, 0, 0]} // Ustawia światło pod modelem
        castShadow
      />
      <spotLight
        color={0xffffff} // Biały kolor światła
        intensity={65} // Intensywność światła
        angle={Math.PI / 4}
        penumbra={0.5}
        position={[0, 0, 10]} // Ustawia światło pod modelem
        castShadow
      />
      <spotLight
        color={0xffffff} // Biały kolor światła
        intensity={65} // Intensywność światła
        angle={Math.PI / 4}
        penumbra={0.5}
        position={[0, 0, -10]} // Ustawia światło pod modelem
        castShadow
      />
       {currentModelIndex === 2 && (
        <EffectComposer>
          <Bloom
            blendFunction={BlendFunction.ADD}
            intensity={1.3}
            width={300}
            height={300}
            kernelSize={5}
            luminanceThreshold={0.25}
            luminanceSmoothing={0.025}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.0005, 0.0012]}
          />
        </EffectComposer>
      )}
      </Suspense>
      
    </Canvas>
    
  </>
  );
};

export default ThreeScene;
