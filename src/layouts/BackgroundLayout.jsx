import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import CustomCursor from '../components/CustomCursor';
import SocialLinks from '../components/SocialLinks';

function Starfield({ count = 2000 }) {
  const mesh = useRef();
  const starTexture = useMemo(() => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 300;
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      cols[i * 3] = 1;
      cols[i * 3 + 1] = 1;
      cols[i * 3 + 2] = 1;
    }
    return cols;
  }, [count]);

  const sizes = useMemo(() => {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = Math.random() * 2 + 0.5;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y = 0.0001 * performance.now();
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={sizes.length} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        map={starTexture}
        vertexColors={true}
        size={3}
        sizeAttenuation={true}
        transparent={true}
        opacity={1}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const BackgroundLayout = ({ children }) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      width: '100vw', 
      background: 'black', 
      position: 'relative', 
      overflow: 'hidden',
      cursor: 'none'
    }}>
      <CustomCursor />
      <SocialLinks />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
      }}>
        <Canvas
          camera={{ position: [0, 0, 100], fov: 75 }}
          gl={{ antialias: true }}
          style={{ background: 'black' }}
        >
          <Starfield />
        </Canvas>
      </div>
      <div style={{
        position: 'relative',
        zIndex: 2,
      }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout; 