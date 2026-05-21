"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * WebGL hero centerpiece — a slowly rotating wireframe icosahedron (a
 * d20, the nerd's die) rendered with raw Three.js behind the hero
 * content.
 *
 * - Line colour tracks the active theme (lime on dark, ink on light).
 * - The camera drifts gently toward the pointer.
 * - The render loop pauses while the hero is scrolled out of view.
 * - Reduced-motion users get a single static frame.
 * - Every GPU resource is disposed on unmount.
 */
export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // --- Mutable loop state (declared first to avoid use-before-define) ---
    let raf = 0;
    let loopRunning = false;
    let visible = true;
    let pointerX = 0;
    let pointerY = 0;

    const getSize = () => ({
      w: mount.clientWidth || 1,
      h: mount.clientHeight || 1,
    });

    // --- Scene ---
    const { w, h } = getSize();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    mount.appendChild(renderer.domElement);

    const lineColor = () =>
      document.documentElement.classList.contains("dark")
        ? 0xa6f500
        : 0x0b0b0c;

    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
      color: lineColor(),
      transparent: true,
      opacity: 0.55,
    });
    const wireframe = new THREE.LineSegments(edges, material);
    scene.add(wireframe);

    const render = () => renderer.render(scene, camera);

    const loop = () => {
      loopRunning = true;
      wireframe.rotation.y += 0.0026;
      wireframe.rotation.x += 0.0012;
      camera.position.x += (pointerX * 1.1 - camera.position.x) * 0.04;
      camera.position.y += (-pointerY * 1.1 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      render();
      if (visible) {
        raf = requestAnimationFrame(loop);
      } else {
        loopRunning = false;
        raf = 0;
      }
    };

    // --- Theme sync ---
    const themeObserver = new MutationObserver(() => {
      material.color.setHex(lineColor());
      if (!loopRunning) render();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // --- Pointer ---
    const onPointerMove = (e: PointerEvent) => {
      pointerX = e.clientX / window.innerWidth - 0.5;
      pointerY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // --- Pause when scrolled out of view ---
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible && !reduced && !loopRunning) loop();
      },
      { threshold: 0 },
    );
    io.observe(mount);

    // --- Resize ---
    const onResize = () => {
      const s = getSize();
      camera.aspect = s.w / s.h;
      camera.updateProjectionMatrix();
      renderer.setSize(s.w, s.h);
      render();
    };
    window.addEventListener("resize", onResize);

    // --- Start ---
    if (reduced) {
      render();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
      io.disconnect();
      geometry.dispose();
      edges.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
