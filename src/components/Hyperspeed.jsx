import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BloomEffect, EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset } from 'postprocessing';

const Hyperspeed = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.error('Container ref is not available');
      return;
    }

    try {
      console.log('Initializing Hyperspeed effect...');
      const container = containerRef.current;
      
      // Initialize renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;
      console.log('Renderer initialized');

      // Initialize camera
      const camera = new THREE.PerspectiveCamera(
        90,
        container.offsetWidth / container.offsetHeight,
        0.1,
        10000
      );
      camera.position.z = -5;
      camera.position.y = 8;
      camera.position.x = 0;
      console.log('Camera initialized');

      // Initialize scene
      const scene = new THREE.Scene();
      scene.background = null;
      sceneRef.current = scene;
      console.log('Scene initialized');

      // Add fog
      const fog = new THREE.Fog(0x000000, 80, 200000);
      scene.fog = fog;

      // Create stars
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 2000;
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 2000;
        positions[i3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i3 + 2] = (Math.random() - 0.5) * 2000;

        colors[i3] = 1;
        colors[i3 + 1] = 1;
        colors[i3 + 2] = 1;
      }

      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const starMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
      });

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
      console.log('Stars created and added to scene');

      // Initialize post-processing
      const composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      const bloomPass = new EffectPass(
        camera,
        new BloomEffect({
          luminanceThreshold: 0.2,
          luminanceSmoothing: 0,
          resolutionScale: 1
        })
      );

      const smaaPass = new EffectPass(
        camera,
        new SMAAEffect({
          preset: SMAAPreset.MEDIUM,
          searchImage: SMAAEffect.searchImageDataURL,
          areaImage: SMAAEffect.areaImageDataURL
        })
      );

      renderPass.renderToScreen = false;
      bloomPass.renderToScreen = false;
      smaaPass.renderToScreen = true;

      composer.addPass(renderPass);
      composer.addPass(bloomPass);
      composer.addPass(smaaPass);
      composerRef.current = composer;
      console.log('Post-processing initialized');

      // Animation
      const clock = new THREE.Clock();
      let animationFrameId;

      const animate = () => {
        try {
          const delta = clock.getDelta();
          
          // Rotate stars
          stars.rotation.y += delta * 0.1;
          stars.rotation.x += delta * 0.05;
          
          // Move stars forward
          stars.position.z += delta * 100;
          
          // Reset stars when they get too close
          if (stars.position.z > 1000) {
            stars.position.z = -1000;
          }

          composer.render(delta);
          animationFrameId = requestAnimationFrame(animate);
        } catch (error) {
          console.error('Error in animation loop:', error);
        }
      };

      animate();
      console.log('Animation started');

      // Handle resize
      const handleResize = () => {
        try {
          const width = container.offsetWidth;
          const height = container.offsetHeight;

          camera.aspect = width / height;
          camera.updateProjectionMatrix();

          renderer.setSize(width, height);
          composer.setSize(width, height);
        } catch (error) {
          console.error('Error in resize handler:', error);
        }
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        console.log('Cleaning up Hyperspeed effect...');
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        
        renderer.dispose();
        composer.dispose();
        starGeometry.dispose();
        starMaterial.dispose();
        console.log('Cleanup completed');
      };
    } catch (error) {
      console.error('Error initializing Hyperspeed effect:', error);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.4,
        pointerEvents: 'none'
      }}
    />
  );
};

export default Hyperspeed; 