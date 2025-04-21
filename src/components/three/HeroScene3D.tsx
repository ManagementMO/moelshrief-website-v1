import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/hooks/use-theme';

interface HeroScene3DProps {
  strength?: number;
  scale?: number;
  speed?: number;
}

const AnimatedSphere = ({ strength = 0.4, scale = 1.5, speed = 0.3 }: HeroScene3DProps) => {
  const theme = useTheme();
  const sphereRef = useRef<THREE.Mesh>(null);
  
  // Create animated material colors based on theme
  const materialProps = {
    color: new THREE.Color(`hsl(${theme.primaryHue}, ${theme.primarySaturation}%, ${theme.primaryLightness}%)`),
    attach: "material",
    distort: 0.5,
    speed: 1.5,
    roughness: 0.2,
  };
  
  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    
    const t = clock.getElapsedTime() * speed;
    sphereRef.current.rotation.x = Math.sin(t / 2);
    sphereRef.current.rotation.y = Math.sin(t / 3);
    sphereRef.current.rotation.z = Math.sin(t / 5);
    
    // Subtle pulsing
    const pulseScale = scale + Math.sin(t) * 0.05;
    sphereRef.current.scale.set(pulseScale, pulseScale, pulseScale);
  });
  
  return (
    <Sphere ref={sphereRef} args={[1, 128, 128]} scale={scale}>
      <MeshDistortMaterial 
        {...materialProps}
        distort={strength}
      />
    </Sphere>
  );
};

export const HeroScene3D = (props: HeroScene3DProps) => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="purple" />
        
        <AnimatedSphere {...props} />
        
        <fog attach="fog" color="#050816" near={3} far={8} />
      </Canvas>
    </div>
  );
};
