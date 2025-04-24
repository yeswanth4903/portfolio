import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSphere() {
  const pointsRef = useRef();
  
  useFrame(() => {
    pointsRef.current.rotation.y += 0.001;
  });

  const particleCount = 4000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const radius = 2;
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.random() * Math.PI;
    
    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(theta);
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ff0000"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function CodeSphere() {
  return (
    <div className="h-[300px] w-[300px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <ParticleSphere />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
