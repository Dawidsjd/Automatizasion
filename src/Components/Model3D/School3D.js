import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Html, OrbitControls } from '@react-three/drei';
import SchoolModel from './SchoolModel';

const Loading = () => {
  return (
    <Html>
      <div className='loading'>
        <p>Loading...</p>
      </div>
    </Html>
  );
};

const ThreeScene = () => {
  return (
    <Canvas shadows style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={<Loading />}>
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.5}
          panSpeed={0.8}
          rotateSpeed={0.4}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          maxDistance={10}
          minDistance={4}
        />

        <Environment preset='forest' />

        <SchoolModel />

        <spotLight
          color={0xffffff}
          intensity={65}
          angle={Math.PI / 4}
          penumbra={0.5}
          position={[0, 10, 0]}
          castShadow
        />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
