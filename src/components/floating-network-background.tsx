
'use client';

import React, { useEffect, useState, useMemo } from 'react';

interface ParticleStyle {
  id: string;
  left: string;
  top: string;
  width: string;
  height: string;
  animationName: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
}

const NUM_PARTICLES = 25; // Number of floating nodes

const FloatingNetworkBackground = () => {
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    const newParticles: ParticleStyle[] = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      newParticles.push({
        id: `particle-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 5 + 2}px`, // size 2px to 7px
        height: `${Math.random() * 5 + 2}px`,
        animationName: `floatAnimation${Math.ceil(Math.random() * 3)}`, // 3 different animations
        animationDuration: `${Math.random() * 15 + 10}s`, // 10s to 25s
        animationDelay: `${Math.random() * 10}s`, // 0s to 10s delay
        opacity: Math.random() * 0.25 + 0.05, // opacity 0.05 to 0.3 for subtlety
      });
    }
    setParticles(newParticles);
  }, []);

  // Memoize particles to prevent re-renders unless particles array changes
  const memoizedParticles = useMemo(() => particles.map((style) => (
    <div
      key={style.id}
      className="absolute rounded-full bg-primary/40 dark:bg-primary/30"
      style={{
        left: style.left,
        top: style.top,
        width: style.width,
        height: style.height,
        opacity: style.opacity,
        animationName: style.animationName,
        animationDuration: style.animationDuration,
        animationDelay: style.animationDelay,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      }}
    />
  )), [particles]);


  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {memoizedParticles}
    </div>
  );
};

export default FloatingNetworkBackground;
