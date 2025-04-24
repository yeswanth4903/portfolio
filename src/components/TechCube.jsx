import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

function TechSymbols({ position, symbol, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        ref={meshRef}
        position={position}
        fontSize={0.5}
        color={color}
        maxWidth={0.5}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
      >
        {symbol}
      </Text>
    </Float>
  );
}

function AnimatedCube() {
  const cubeRef = useRef();
  
  useFrame((state) => {
    cubeRef.current.rotation.y += 0.002;
    cubeRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  const techSymbols = [
    { symbol: '</>', position: [0, 2, 0], color: '#ffffff' },
    { symbol: 'AI', position: [2, 0, 0], color: '#ffffff' },
    { symbol: '{ }', position: [-2, 0, 0], color: '#ffffff' },
    { symbol: '01', position: [0, -2, 0], color: '#ffffff' },
  ];

  return (
    <group ref={cubeRef}>
      {/* Main cube */}
      <Box args={[3, 3, 3]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ff0000"
          opacity={0.3}
          transparent
          side={THREE.DoubleSide}
          wireframe={true}
          emissive="#ff0000"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>

      {/* Inner cube for glow effect */}
      <Box args={[2.8, 2.8, 2.8]} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#ff0000"
          opacity={0.1}
          transparent
          side={THREE.DoubleSide}
          emissive="#ff0000"
          emissiveIntensity={0.2}
        />
      </Box>

      {techSymbols.map((tech, index) => (
        <TechSymbols key={index} {...tech} />
      ))}

      {/* Add multiple point lights for better illumination */}
      <pointLight color="#ff0000" intensity={2} distance={4} decay={2} position={[0, 0, 0]} />
      <pointLight color="#ff3333" intensity={1} distance={6} decay={2} position={[2, 2, 2]} />
      <pointLight color="#ff3333" intensity={1} distance={6} decay={2} position={[-2, -2, -2]} />
    </group>
  );
}

export default function TechCube() {
  return (
    <div className="h-[400px] w-[400px] relative">
      <div className="absolute inset-0 bg-gradient-radial from-red-500/20 via-transparent to-transparent rounded-full blur-xl"></div>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.3} intensity={1} />
        <fog attach="fog" args={['#000000', 8, 20]} />
        <AnimatedCube />
        <OrbitControls 
          enableZoom={false} 
          autoRotate={true}
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
