
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ProfilePicture3D } from './ProfilePicture3D';
import { ErrorBoundary } from 'react-error-boundary';

interface Scene3DProps {
  children?: React.ReactNode;
  cameraPosition?: [number, number, number];
  controlsEnabled?: boolean;
}

// Fallback component for when errors occur in the 3D scene
const ErrorFallback = () => (
  <mesh>
    <sphereGeometry args={[1, 16, 16]} />
    <meshStandardMaterial color="red" />
  </mesh>
);

export const Scene3D = ({
  children,
  cameraPosition = [0, 0, 3],
  controlsEnabled = true
}: Scene3DProps) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas frameloop="demand">
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} color="purple" intensity={0.5} />
        
        <Suspense fallback={null}>
          <ErrorBoundary FallbackComponent={() => <ErrorFallback />}>
            <ProfilePicture3D />
            {children}
          </ErrorBoundary>
        </Suspense>
      </Canvas>
    </div>
  );
};
