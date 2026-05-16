
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
  cssVariables: {
    '--start-opacity': number;
    '--mid-opacity': number;
  };
}

const NUM_PARTICLES = 25; // Number of floating nodes

const FloatingNetworkBackground = () => {
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    // This component is no longer used in AboutSection,
    // but keeping it here in case it's needed elsewhere or for reference.
    // If not needed, it can be deleted.
    const newParticles: ParticleStyle[] = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const startOpacity = Math.random() * 0.2 + 0.3; // Range 0.3 to 0.5
      const midOpacity = Math.min(1, startOpacity + 0.2); // Ensure midOpacity doesn't exceed 1

      newParticles.push({
        id: `particle-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 4}px`, // size 4px to 10px
        height: `${Math.random() * 6 + 4}px`, // size 4px to 10px
        animationName: `floatAnimation${Math.ceil(Math.random() * 3)}`, // 3 different animations
        animationDuration: `${Math.random() * 15 + 10}s`, // 10s to 25s
        animationDelay: `${Math.random() * 10}s`, // 0s to 10s delay
        cssVariables: {
          '--start-opacity': startOpacity,
          '--mid-opacity': midOpacity,
        },
      });
    }
    setParticles(newParticles);
  }, []);

  const memoizedParticles = useMemo(() => particles.map((style) => (
    <div
      key={style.id}
      className="absolute rounded-full bg-primary/80 dark:bg-primary/70"
      style={{
        left: style.left,
        top: style.top,
        width: style.width,
        height: style.height,
        animationName: style.animationName,
        animationDuration: style.animationDuration,
        animationDelay: style.animationDelay,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        ...(style.cssVariables as React.CSSProperties),
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
