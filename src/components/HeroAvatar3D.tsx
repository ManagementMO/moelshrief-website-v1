import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

// Replace this with the correct path to your image in the public folder
const AVATAR_IMG_URL = "/avatar-portfolio.jpg";

function RotatingFrame({ children }: { children: React.ReactNode }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { mouse, size } = useThree();

  useFrame(() => {
    // Rotate frame based on mouse position
    if (meshRef.current) {
      const x = (mouse.x * Math.PI) / 6;
      const y = (mouse.y * Math.PI) / 6;
      meshRef.current.rotation.x = y;
      meshRef.current.rotation.y = x;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[1.5, 0.15, 32, 100]} />
      <meshStandardMaterial
        color="#00f0ff"
        emissive="#00f0ff"
        emissiveIntensity={0.7}
        metalness={0.7}
        roughness={0.25}
      />
      {children}
    </mesh>
  );
}

function AvatarImage() {
  // Load the avatar image as a texture
  const texture = useLoader(TextureLoader, AVATAR_IMG_URL);
  return (
    <mesh position={[0, 0, 0.05]}>
      <circleGeometry args={[1.25, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function HeroAvatar3D() {
  return (
    <div style={{ width: 260, height: 260, position: "relative", zIndex: 20 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={null}>
          <RotatingFrame>
            <AvatarImage />
          </RotatingFrame>
        </Suspense>
      </Canvas>
      {/* Optional: Add a subtle glow overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        boxShadow: '0 0 40px 10px #00f0ff88, 0 0 80px 20px #00f0ff44',
        pointerEvents: 'none',
        zIndex: 21
      }} />
    </div>
  );
}
