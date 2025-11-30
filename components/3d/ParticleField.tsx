'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const particlesCount = 50; // Reduced for better performance

  // Create particle positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particlesCount; i++) {
      const t = Math.random() * 2 * Math.PI;
      const y = Math.random() * 10 - 5; // Vertical spread
      const x = Math.cos(t) * 15; // Horizontal circle
      const z = Math.sin(t) * 15; // Depth circle
      temp.push([x, y, z]);
    }
    return temp;
  }, []);

  // Animation loop - optimized with memoization
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Update particle positions
      for (let i = 0; i < particlesCount; i++) {
        const [x, y, z] = particles[i];
        
        // Create wave motion effect
        const newY = y + Math.sin(time + i * 0.1) * 0.5;
        const newX = x + Math.cos(time * 0.5 + i * 0.05) * 0.3;
        const newZ = z + Math.sin(time * 0.3 + i * 0.03) * 0.3;
        
        const matrix = new THREE.Matrix4();
        matrix.setPosition(newX, newY, newZ);
        meshRef.current.setMatrixAt(i, matrix);
      }
      
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particlesCount]} frustumCulled={false}>
      <sphereGeometry args={[0.1, 4, 4]} /> {/* Reduced geometry detail */}
      <meshStandardMaterial 
        color="#a78bfa" 
        transparent 
        opacity={0.6}
        roughness={0.1}
        metalness={0.9}
        fog={false}
      />
    </instancedMesh>
  );
}