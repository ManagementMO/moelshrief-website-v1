import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ParticleField } from './ParticleField';

interface Scene3DProps {
  children?: React.ReactNode;
  cameraPosition?: [number, number, number];
  controlsEnabled?: boolean;
}

export const Scene3D = ({
  children,
  cameraPosition = [0, 0, 5],
  controlsEnabled = false
}: Scene3DProps) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        {controlsEnabled && <OrbitControls enableZoom={false} enablePan={false} />}
        
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="purple" intensity={0.5} />
        
        <Suspense fallback={null}>
          <ParticleField />
          {children}
        </Suspense>
        
        <fog attach="fog" color="#050816" near={3} far={8} />
      </Canvas>
    </div>
  );
};
