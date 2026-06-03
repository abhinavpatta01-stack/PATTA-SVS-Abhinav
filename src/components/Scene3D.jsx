import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function MetallicStructure() {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  return (
    <group ref={group}>
      {/* Central octahedron core */}
      <mesh castShadow>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#080808"
          metalness={1}
          roughness={0.05}
          envMapIntensity={3}
        />
      </mesh>

      {/* Inner icosahedron */}
      <mesh rotation={[0.4, 0.6, 0]}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.15}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Primary gold ring */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.04, 16, 128]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.1}
          emissive="#D4AF37"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Secondary thin ring */}
      <mesh rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[2.8, 0.015, 16, 128]} />
        <meshStandardMaterial
          color="#F8F8F8"
          transparent
          opacity={0.2}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Tertiary wide ring */}
      <mesh rotation={[Math.PI / 2.5, Math.PI / 5, 0]}>
        <torusGeometry args={[3.5, 0.01, 16, 128]} />
        <meshStandardMaterial
          color="#D4AF37"
          transparent
          opacity={0.15}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Holographic interface planes */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={`holo-${i}`}
          position={[
            Math.sin((i / 3) * Math.PI * 2) * 1.8,
            Math.cos((i / 3) * Math.PI * 2) * 0.5,
            Math.cos((i / 3) * Math.PI * 2) * 1.8
          ]}
          rotation={[0, (i / 3) * Math.PI * 2, 0]}
        >
          <planeGeometry args={[0.6, 0.4]} />
          <meshStandardMaterial
            color="#D4AF37"
            transparent
            opacity={0.06}
            side={THREE.DoubleSide}
            emissive="#D4AF37"
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      position: [
        Math.sin((i / 30) * Math.PI * 2) * (3 + Math.random() * 2),
        (Math.random() - 0.5) * 4,
        Math.cos((i / 30) * Math.PI * 2) * (3 + Math.random() * 2)
      ],
      scale: 0.02 + Math.random() * 0.04,
      speed: 0.5 + Math.random() * 0.5
    }));
  }, []);

  return (
    <group>
      {particles.map((p, i) => (
        <Float key={i} speed={p.speed} floatIntensity={0.5} rotationIntensity={0}>
          <mesh position={p.position}>
            <sphereGeometry args={[p.scale, 8, 8]} />
            <meshBasicMaterial color="#F5D76E" transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Scene3D() {
  return (
    <div style={{
      width: '100%', height: '100%',
      position: 'absolute', top: 0, right: 0,
      zIndex: 0, pointerEvents: 'none'
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        {/* Cinematic lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[8, 8, 5]} intensity={1.5} color="#D4AF37" />
        <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#1a1a1a" />
        <pointLight position={[0, 0, 0]} intensity={0.8} color="#F5D76E" distance={12} />
        <pointLight position={[3, 3, 3]} intensity={0.3} color="#D4AF37" distance={8} />

        <Float
          speed={1.5}
          rotationIntensity={0.4}
          floatIntensity={0.8}
          floatingRange={[-0.3, 0.3]}
        >
          <MetallicStructure />
        </Float>

        <FloatingParticles />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
