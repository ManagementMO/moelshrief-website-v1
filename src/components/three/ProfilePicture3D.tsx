
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export const ProfilePicture3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Load the profile picture as a texture
  const texture = useTexture('/lovable-uploads/86c801ab-34a3-44ee-b414-f9c7e2c323ca.png');
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle floating animation
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.05;
    meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
  });

  return (
    <Plane
      ref={meshRef}
      args={[3, 3]} // Adjust size as needed
    >
      <meshPhysicalMaterial
        map={texture}
        transparent
        roughness={0.2}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0.2}
        side={THREE.DoubleSide}
      />
    </Plane>
  );
};
