'use client';

import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { FloatingShape } from './FloatingShape';
import { ParticleField } from './ParticleField';
import * as THREE from 'three';

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false
        }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        frameloop="always"
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <FloatingShape 
          position={[-4, 2, -2]} 
          rotationSpeed={0.3}
          floatSpeed={0.5}
          size={1.5}
          color="#818cf8" // light indigo
        />
        
        <FloatingShape 
          position={[3, -1, 1]} 
          rotationSpeed={0.7}
          floatSpeed={0.8}
          size={1}
          color="#c084fc" // light purple
        />
        
        <FloatingShape 
          position={[0, 3, -3]} 
          rotationSpeed={0.4}
          floatSpeed={0.6}
          size={1.2}
          color="#60a5fa" // light blue
        />
        
        <ParticleField />
        
        <Preload all />
      </Canvas>
    </div>
  );
}