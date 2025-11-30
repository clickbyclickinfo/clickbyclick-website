'use client';

import { useState, useRef, memo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingShapeProps {
  position?: [number, number, number];
  rotationSpeed?: number;
  floatSpeed?: number;
  size?: number;
  color?: string;
}

function FloatingShapeComponent({
  position = [0, 0, 0],
  rotationSpeed = 0.5,
  floatSpeed = 1,
  size = 1,
  color = '#6366f1' // indigo color
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const floatOffset = useRef(0);

  // Animation loop for continuous rotation and floating
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the shape
      meshRef.current.rotation.x += delta * rotationSpeed * 0.5;
      meshRef.current.rotation.y += delta * rotationSpeed;
      
      // Float up and down
      floatOffset.current += delta * floatSpeed;
      meshRef.current.position.y = position[1] + Math.sin(floatOffset.current) * 0.5;
      
      // Scale change on hover
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(size * 1.1, size * 1.1, size * 1.1), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(size, size, size), 0.1);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={() => setHovered(!hovered)}
      frustumCulled={false}
    >
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8}
        roughness={0.2}
        metalness={0.8}
        fog={false}
      />
    </mesh>
  );
}

export const FloatingShape = memo(FloatingShapeComponent);