"use client";

import { useEffect, useRef } from "react";
import { fieldConfig } from "./field-config";

type Point = {
  c: number;
  r: number;
  hx: number;
  hy: number;
  phase: number;
  speed: number;
  jx: number;
  jy: number;
  tw: number;
  twk: number;
  purple: boolean;
  a: number;
  x: number;
  y: number;
};

const PURPLE_RGB = "124,58,205";
const ORANGE_RGB = "255,106,61";

/**
 * Full-viewport canvas field that sits behind every section (z-index 0).
 * Ported near-verbatim from the design prototype's build()/loop() methods —
 * see design/By Hamdi Homepage.dc.html for the reference implementation.
 */
export default function ConstellationField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999, moved: false };
    const glow = { x: 0, y: 0 };
    const start = performance.now();
    let pts: Point[] = [];
    let cols = 0;
    let rows = 0;
    let cell = fieldConfig.cellSize;
    let W = 0;
    let H = 0;
    let raf = 0;

    const build = () => {
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      if (W < 4 || H < 4) return;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      cell = fieldConfig.cellSize;
      cols = Math.ceil(W / cell) + 1;
      rows = Math.ceil(H / cell) + 1;
      const pf = fieldConfig.purpleAmount;

      const nextPts: Point[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const hx = c * cell;
          const hy = r * cell;
          const seed = (c * 73856093) ^ (r * 19349663);
          const rand = (n: number) => {
            const s = Math.sin(seed * 991 + n * 12.9898) * 43758.5453;
            return s - Math.floor(s);
          };
          nextPts.push({
            c,
            r,
            hx,
            hy,
            phase: rand(3) * Math.PI * 2,
            speed: 0.35 + rand(4) * 0.6,
            jx: (rand(7) - 0.5) * cell * 0.5,
            jy: (rand(8) - 0.5) * cell * 0.5,
            tw: rand(9) * Math.PI * 2,
            twk: rand(10),
            purple: rand(5) < pf,
            a: 0,
            x: hx,
            y: hy,
          });
        }
      }
      pts = nextPts;
    };

    const idx = (c: number, r: number) => r * cols + c;

    const draw = () => {
      const t = (performance.now() - start) / 1000;
      const R = fieldConfig.focusRadius;
      const amp = cell * fieldConfig.motionAmplitude;
      ctx.clearRect(0, 0, W, H);

      let mx = mouse.x;
      let my = mouse.y;
      let radius = R;
      const introDur = fieldConfig.introDuration;
      if (!mouse.moved && t < introDur) {
        const p = t / introDur;
        mx = W * 0.5;
        my = H * 0.5;
        radius = Math.sin(Math.PI * p) * Math.hypot(W, H) * 0.4 + 50;
      }
      if (mx > -1000) {
        glow.x += (mx - glow.x) * 0.07;
        glow.y += (my - glow.y) * 0.07;
      }

      if (mx > -1000) {
        const gg = ctx.createRadialGradient(
          glow.x,
          glow.y,
          0,
          glow.x,
          glow.y,
          radius * 1.5
        );
        gg.addColorStop(0, "rgba(255,120,60,0.10)");
        gg.addColorStop(0.5, `rgba(${PURPLE_RGB},0.06)`);
        gg.addColorStop(1, "rgba(255,120,60,0)");
        ctx.fillStyle = gg;
        ctx.fillRect(0, 0, W, H);
      }

      for (const p of pts) {
        const dx = p.hx - mx;
        const dy = p.hy - my;
        const d = Math.hypot(dx, dy);
        const f = Math.max(0, 1 - d / radius);
        const target = f * f * (3 - 2 * f);
        p.a += (target - p.a) * 0.12;
        const drift = 1 - p.a * 0.85;
        p.x = p.hx + p.jx + Math.sin(t * p.speed + p.phase) * amp * drift;
        p.y = p.hy + p.jy + Math.cos(t * p.speed * 0.85 + p.phase) * amp * drift;
      }

      for (const p of pts) {
        const nbs: Point[] = [];
        if (p.c + 1 < cols) nbs.push(pts[idx(p.c + 1, p.r)]);
        if (p.r + 1 < rows) nbs.push(pts[idx(p.c, p.r + 1)]);
        for (const nb of nbs) {
          const aa = Math.min(p.a, nb.a);
          const al = 0.015 + aa * 0.42;
          if (al < 0.03) continue;
          if (aa > 0.34) {
            const g = ctx.createLinearGradient(p.x, p.y, nb.x, nb.y);
            g.addColorStop(0, `rgba(${p.purple ? PURPLE_RGB : ORANGE_RGB},${al.toFixed(3)})`);
            g.addColorStop(1, `rgba(${nb.purple ? PURPLE_RGB : ORANGE_RGB},${al.toFixed(3)})`);
            ctx.strokeStyle = g;
          } else {
            ctx.strokeStyle = `rgba(150,120,150,${al.toFixed(3)})`;
          }
          ctx.lineWidth = 0.6 + aa * 1.2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(nb.x, nb.y);
          ctx.stroke();
        }
      }

      for (const p of pts) {
        const a = p.a;
        const twinkle = a < 0.2 ? p.twk * 0.05 * Math.max(0, Math.sin(t * 0.7 + p.tw)) : 0;
        const size = 1.2 + a * 3.6;
        const alpha = 0.06 + twinkle + a * 0.82;
        const ar = p.purple ? 124 : 255;
        const ag = p.purple ? 58 : 106;
        const ab = p.purple ? 205 : 61;
        const rr = Math.round(20 + (ar - 20) * a);
        const gg2 = Math.round(18 + (ag - 18) * a);
        const bb = Math.round(16 + (ab - 16) * a);
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rr},${gg2},${bb},${alpha.toFixed(3)})`;
        ctx.fill();
        if (a > 0.6) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size + 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ar},${ag},${ab},${(0.12 * a).toFixed(3)})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.moved = true;
    };
    const onResize = () => build();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    build();
    glow.x = W / 2;
    glow.y = H / 2;
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="field"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 block h-screen w-screen"
    />
  );
}
