'use client';

import { Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useReducedMotion } from 'motion/react';

export default function SpatialOrb() {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      fallback={<div />}
    >
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 4, 5]} intensity={3} color="#ffffff" />
      <pointLight position={[-3, -1, 2]} intensity={25} color="#8b9cff" />
      <Float speed={1.2} rotationIntensity={0.45} floatIntensity={0.6}>
        <mesh rotation={[0.4, 0.3, 0]}>
          <icosahedronGeometry args={[1.3, 5]} />
          <meshPhysicalMaterial
            color="#d5e8ff"
            metalness={0.15}
            roughness={0.18}
            clearcoat={1}
            clearcoatRoughness={0.12}
            transparent
            opacity={0.65}
          />
        </mesh>
        <mesh rotation={[1.1, 0.2, 0.4]}>
          <torusGeometry args={[1.7, 0.025, 16, 120]} />
          <meshStandardMaterial color="#a8b8ff" metalness={0.5} roughness={0.25} />
        </mesh>
      </Float>
    </Canvas>
  );
}
