
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export const ProfilePicture3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [textureLoaded, setTextureLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Use useTexture to load the texture
  const texture = useTexture('/lovable-uploads/9ad28947-10af-4c6d-b967-731db0e3ad4a.png', (texture) => {
    // Success callback
    console.log("Texture loaded successfully");
    setTextureLoaded(true);
  }, () => {
    // Error callback
    console.error("Error loading texture");
    setHasError(true);
  });
  
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
      {textureLoaded && !hasError ? (
        <meshStandardMaterial
          map={texture}
          transparent
          roughness={0.4}
          metalness={0.3}
          side={THREE.DoubleSide}
        />
      ) : (
        // Fallback material if texture fails to load
        <meshStandardMaterial
          color="white"
          transparent
          opacity={0.7}
          roughness={0.4}
          side={THREE.DoubleSide}
        />
      )}
    </Plane>
  );
};
