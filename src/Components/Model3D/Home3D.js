import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Html } from '@react-three/drei';
import HomeModel from './HomeModel';

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
          minDistance={1}
        />

        <pointLight position={[0, 10, 0]} intensity={1} />

        <Environment preset='sunset' />
        <HomeModel />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
