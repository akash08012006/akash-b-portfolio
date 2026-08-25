import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life?: number;
  maxLife?: number;
}

export default function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const clicksRef = useRef<{ x: number; y: number; radius: number; maxRadius: number; opacity: number }[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  
  const currentColorsRef = useRef<string[]>(['#3b82f6', '#06b6d4', '#60a5fa', '#22d3ee']);
  const speedMultiplierRef = useRef<number>(1.0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handler
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width || window.innerWidth;
      canvas.height = rect?.height || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initial particles
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80);
    const particles: Particle[] = [];
    const colors = currentColorsRef.current;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
      });
    }
    particlesRef.current = particles;

    // Custom Event Listeners for Companion
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.colors) {
        currentColorsRef.current = customEvent.detail.colors;
        particlesRef.current.forEach((p) => {
          if (p.life === undefined) {
            p.color = currentColorsRef.current[Math.floor(Math.random() * currentColorsRef.current.length)];
          }
        });
      }
    };

    const handleSpeedChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && typeof customEvent.detail.speed === 'number') {
        speedMultiplierRef.current = customEvent.detail.speed;
      }
    };

    const handleSparkBurst = (e: Event) => {
      const customEvent = e as CustomEvent;
      const originX = customEvent.detail?.x || Math.random() * canvas.width;
      const originY = customEvent.detail?.y || Math.random() * canvas.height;
      const burstColors = currentColorsRef.current;

      const sparkCount = 40;
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1.5;
        particlesRef.current.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 0.8,
          color: burstColors[Math.floor(Math.random() * burstColors.length)],
          alpha: 1,
          life: 0,
          maxLife: Math.random() * 35 + 20,
        });
      }
    };

    window.addEventListener('companion-theme', handleThemeChange);
    window.addEventListener('companion-speed', handleSpeedChange);
    window.addEventListener('companion-spark', handleSparkBurst);

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    // Click effect - spawn sparks and a circular wave
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Add a ripple wave
      clicksRef.current.push({
        x: clickX,
        y: clickY,
        radius: 0,
        maxRadius: 100,
        opacity: 1,
      });

      // Add sparks (fast particles with short life)
      const sparkCount = 12;
      const colors = currentColorsRef.current;
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1.5;
        particlesRef.current.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 1.5 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          life: 0,
          maxLife: Math.random() * 30 + 20,
        });
      }
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
      parent.addEventListener('click', handleClick);
    }

    let animationId: number;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const clicks = clicksRef.current;

      // 1. Render click ripple waves
      clicksRef.current = clicks.filter((wave) => {
        wave.radius += 2.5;
        wave.opacity -= 0.025;

        if (wave.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${wave.opacity * 0.25})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        return true;
      });

      // 2. Update and draw particles
      particlesRef.current = particles.filter((p) => {
        // Spark lifetime check
        if (p.life !== undefined && p.maxLife !== undefined) {
          p.life++;
          p.alpha = 1 - p.life / p.maxLife;
          if (p.life >= p.maxLife) return false;
        }

        // Apply velocities
        p.x += p.vx * speedMultiplierRef.current;
        p.y += p.vy * speedMultiplierRef.current;

        // Interactive physics with mouse: pull/push
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          const limit = 120;

          if (dist < limit) {
            // Push away gently
            const force = (limit - dist) / limit;
            const angle = Math.atan2(dy, dx);
            p.x -= Math.cos(angle) * force * 0.5;
            p.y -= Math.sin(angle) * force * 0.5;
          }
        }

        // Border collision for normal particles
        if (p.life === undefined) {
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          // Clamping to stay inside bounds safely
          if (p.x < 0) p.x = 0;
          if (p.x > canvas.width) p.x = canvas.width;
          if (p.y < 0) p.y = 0;
          if (p.y > canvas.height) p.y = canvas.height;
        }

        // Render particle point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        return true;
      });

      // 3. Render connection lines (Constellation style)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Only draw lines for static base particles, skip spark nodes to avoid visual clutter
        if (p1.life !== undefined) continue;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (p2.life !== undefined) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
            ctx.stroke();
          }
        }

        // Draw line to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('companion-theme', handleThemeChange);
      window.removeEventListener('companion-speed', handleSpeedChange);
      window.removeEventListener('companion-spark', handleSparkBurst);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
        parent.removeEventListener('click', handleClick);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
      <canvas ref={canvasRef} className="block w-full h-full opacity-60 pointer-events-none" />
    </div>
  );
}
