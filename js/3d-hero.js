/**
 * ScaleNova Lightweight 3D Hero Canvas Visualizer
 * 
 * Renders an interactive, performant interconnected node lattice and cybernetic data flow
 * using Three.js. Includes auto-throttling on mobile, mouse parallax, and prefers-reduced-motion checks.
 */
(function initScaleNova3DHero() {
  function startVisualizer() {
    const canvas = document.getElementById('hero3dCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      canvas.style.display = 'none';
      return;
    }

    try {
      const scene = new THREE.Scene();
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || 600;

      const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
      camera.position.z = 14;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: 'low-power'
      });

      const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height);

      // Adaptive particle density (mobile vs desktop)
      const isMobile = window.innerWidth < 768;
      const nodeCount = isMobile ? 35 : 70;

      // 1. Cybernetic Data Flow Ring Lattice
      const torusGeo = new THREE.TorusGeometry(5.5, 1.4, isMobile ? 12 : 20, isMobile ? 36 : 64);
      const torusMat = new THREE.MeshBasicMaterial({
        color: 0x7F00FF,
        wireframe: true,
        transparent: true,
        opacity: 0.18
      });
      const torusMesh = new THREE.Mesh(torusGeo, torusMat);
      scene.add(torusMesh);

      // 2. Interconnected Operational Data Points
      const particlePositions = new Float32Array(nodeCount * 3);
      for (let i = 0; i < nodeCount * 3; i += 3) {
        particlePositions[i] = (Math.random() - 0.5) * 24;
        particlePositions[i + 1] = (Math.random() - 0.5) * 16;
        particlePositions[i + 2] = (Math.random() - 0.5) * 12;
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

      const particleMat = new THREE.PointsMaterial({
        size: isMobile ? 0.18 : 0.22,
        color: 0x38BDF8,
        transparent: true,
        opacity: 0.7
      });
      const particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

      // Mouse Parallax
      let targetX = 0;
      let targetY = 0;
      let mouseX = 0;
      let mouseY = 0;

      window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
      }, { passive: true });

      // Resize Listener
      const onResize = () => {
        if (!canvas) return;
        const newWidth = canvas.clientWidth || window.innerWidth;
        const newHeight = canvas.clientHeight || 600;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', onResize, { passive: true });

      // Render Loop with frame throttling if tab is inactive
      let animationFrameId;
      function animate() {
        animationFrameId = requestAnimationFrame(animate);

        // Smooth rotation
        torusMesh.rotation.x += 0.002;
        torusMesh.rotation.y += 0.0035;
        particleSystem.rotation.y -= 0.0012;

        // Smooth mouse damping
        targetX += (mouseX - targetX) * 0.04;
        targetY += (mouseY - targetY) * 0.04;
        torusMesh.rotation.x += targetY * 0.02;
        torusMesh.rotation.y += targetX * 0.02;

        renderer.render(scene, camera);
      }

      animate();

      // Clean up if needed
      window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
      });

    } catch (err) {
      console.warn('[ScaleNova 3D Visualizer] Fallback gracefully:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startVisualizer);
  } else {
    startVisualizer();
  }
})();
