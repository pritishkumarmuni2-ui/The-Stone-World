import React, { useEffect, useRef } from 'react';

export function SettlementCanvas({ eraId }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const draw = () => {
      const w = container.clientWidth || 1200;
      const h = 96;
      canvas.width = w;
      canvas.height = h;

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, w, h);

      // Sky gradient
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      if (eraId <= 2) {
        sky.addColorStop(0, '#10121d');
        sky.addColorStop(1, '#2c1810');
      } else if (eraId <= 4) {
        sky.addColorStop(0, '#1a2332');
        sky.addColorStop(1, '#78281f');
      } else if (eraId <= 6) {
        sky.addColorStop(0, '#1e272e');
        sky.addColorStop(1, '#485460');
      } else {
        sky.addColorStop(0, '#0a3d62');
        sky.addColorStop(1, '#00cec9');
      }
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      // Stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      for (let i = 0; i < 35; i++) {
        const sx = (i * 47) % w;
        const sy = (i * 23) % (h * 0.45);
        ctx.fillRect(sx, sy, 1.5, 1.5);
      }

      // Terrain silhouette
      ctx.fillStyle = eraId >= 4 ? '#1e272e' : '#3d2314';
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, h - 30);
      ctx.quadraticCurveTo(w * 0.3, h - 45, w * 0.6, h - 25);
      ctx.quadraticCurveTo(w * 0.85, h - 15, w, h - 35);
      ctx.lineTo(w, h);
      ctx.fill();

      // Foreground structures according to era
      if (eraId === 1) {
        // Cave
        ctx.fillStyle = '#111419';
        ctx.beginPath();
        ctx.arc(80, h - 25, 45, Math.PI, 0);
        ctx.fill();

        // Roaring Campfire
        ctx.fillStyle = '#e67e22';
        ctx.beginPath();
        ctx.arc(180, h - 28, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#f1c40f';
        ctx.beginPath();
        ctx.arc(180, h - 30, 7, 0, Math.PI * 2);
        ctx.fill();
      } else if (eraId === 2) {
        // Thatched hut
        ctx.fillStyle = '#6d4c41';
        ctx.fillRect(110, h - 45, 40, 20);
        ctx.fillStyle = '#bcaaa4';
        ctx.beginPath();
        ctx.moveTo(105, h - 45);
        ctx.lineTo(130, h - 65);
        ctx.lineTo(155, h - 45);
        ctx.fill();

        // Crops
        ctx.strokeStyle = '#2ecc71';
        ctx.lineWidth = 2;
        for (let x = 180; x < 320; x += 10) {
          ctx.beginPath();
          ctx.moveTo(x, h - 25);
          ctx.lineTo(x, h - 40);
          ctx.stroke();
        }
      } else if (eraId <= 4) {
        // Brick workshops and classical columns
        ctx.fillStyle = '#c0392b';
        ctx.fillRect(120, h - 55, 55, 30);
        ctx.fillStyle = '#ecf0f1';
        ctx.fillRect(240, h - 65, 8, 40);
        ctx.fillRect(260, h - 65, 8, 40);
        ctx.fillRect(280, h - 65, 8, 40);
        ctx.fillRect(235, h - 70, 58, 6);
      } else if (eraId <= 6) {
        // Smokestacks and steam puffs
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(140, h - 75, 18, 50);
        ctx.fillRect(180, h - 95, 22, 70);
        ctx.fillStyle = 'rgba(236, 240, 241, 0.4)';
        ctx.beginPath();
        ctx.arc(149, h - 90, 14, 0, Math.PI * 2);
        ctx.arc(191, h - 110, 20, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Silicon skyline & solar arrays
        ctx.fillStyle = '#00cec9';
        ctx.fillRect(140, h - 95, 30, 70);
        ctx.fillRect(190, h - 115, 40, 90);
        ctx.fillRect(250, h - 85, 30, 60);
        ctx.fillStyle = '#ffeaa7';
        for (let y = h - 105; y < h - 35; y += 14) {
          ctx.fillRect(200, y, 6, 6);
          ctx.fillRect(214, y, 6, 6);
        }
      }
    };

    draw();

    const resizeObserver = new ResizeObserver(() => draw());
    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [eraId]);

  return (
    <div ref={containerRef} className="w-full h-24 bg-black border-b border-slate-800 relative overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
