import React from "react";
import styled, { keyframes } from "styled-components";

/*
 * Rose Stained-Glass Window Mandala
 * ─────────────────────────────────
 * A contemplative mandala inspired by the great rose windows of
 * Chartres, Notre-Dame, and the Basilica of the Sacred Heart.
 *
 * The animation evokes the majesty of Christ — concentric layers
 * of light turning at different speeds like celestial spheres,
 * recalling the medieval concept of the Primum Mobile and Dante's
 * vision of the Empyrean. The outer ring of 24 tracery dots moves
 * at the pace of the stars; the petals breathe with a slow divine
 * pulse; the inner medallion radiates a quiet, eternal stillness
 * broken only by a soft corona of gold light.
 *
 * 8 petals representing literary disciplines, each with its own
 * stained-glass hue drawn from cathedral colour tradition.
 */

const PETALS = [
  { topic: "Psychology", color: "#3b6db5", colorDark: "#1e3a6e" },
  { topic: "Philosophy", color: "#c5a044", colorDark: "#a07e2c" },
  { topic: "Classics", color: "#b86b7a", colorDark: "#6b2d3e" },
  { topic: "History", color: "#6b8f3e", colorDark: "#4a6e28" },
  { topic: "Religion", color: "#8854a0", colorDark: "#5e3470" },
  { topic: "Science", color: "#d4763a", colorDark: "#a85a28" },
  { topic: "Politics", color: "#4a9e9e", colorDark: "#2e7070" },
  { topic: "Mathematics", color: "#c4545a", colorDark: "#983e42" },
];

/* ── Celestial rotation animations ─────────────────────────────── */

/* Outermost layer — the firmament, slow and stately */
const spinFirmament = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

/* Petals — counter-rotation, slower still, like the wheel of Ezekiel */
const spinPetals = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
`;

/* Inner trefoils — forward again, faster, wheels within wheels */
const spinTrefoils = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

/* The divine corona — a gentle, breathing pulse of golden light */
const pulseGlory = keyframes`
  0%, 100% { opacity: 0.12; r: 50; }
  50%      { opacity: 0.28; r: 62; }
`;

/* A soft radiance shimmering across the glass */
const shimmerLight = keyframes`
  0%   { opacity: 0.06; transform: rotate(0deg); }
  50%  { opacity: 0.16; transform: rotate(180deg); }
  100% { opacity: 0.06; transform: rotate(360deg); }
`;

/* ── Styled wrappers ───────────────────────────────────────────── */

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 8px 32px rgba(26, 26, 62, 0.25));
`;

/* Rotating layers — each wraps a group of SVG elements */
const FirmamentLayer = styled.g`
  animation: ${spinFirmament} 180s linear infinite;
  transform-origin: 200px 200px;
`;

const PetalLayer = styled.g`
  animation: ${spinPetals} 240s linear infinite;
  transform-origin: 200px 200px;
`;

const TrefoilLayer = styled.g`
  animation: ${spinTrefoils} 160s linear infinite;
  transform-origin: 200px 200px;
`;

const GloryCorona = styled.circle`
  animation: ${pulseGlory} 8s ease-in-out infinite;
  transform-origin: 200px 200px;
`;

const ShimmerOverlay = styled.g`
  animation: ${shimmerLight} 20s ease-in-out infinite;
  transform-origin: 200px 200px;
`;

/* ── Geometry helpers ──────────────────────────────────────────── */

function petalPath(cx: number, cy: number, angleDeg: number, innerR: number, outerR: number, spread: number): string {
  const a = (angleDeg * Math.PI) / 180;
  const tipX = cx + Math.cos(a) * outerR;
  const tipY = cy + Math.sin(a) * outerR;

  const left = a - spread;
  const right = a + spread;

  const baseLeftX = cx + Math.cos(left) * innerR;
  const baseLeftY = cy + Math.sin(left) * innerR;
  const baseRightX = cx + Math.cos(right) * innerR;
  const baseRightY = cy + Math.sin(right) * innerR;

  const handleLen = outerR * 0.62;
  const cpLeft1X = baseLeftX + Math.cos(left) * handleLen;
  const cpLeft1Y = baseLeftY + Math.sin(left) * handleLen;
  const cpLeft2X = tipX + Math.cos(a - spread * 0.5) * handleLen * 0.3;
  const cpLeft2Y = tipY + Math.sin(a - spread * 0.5) * handleLen * 0.3;

  const cpRight2X = tipX + Math.cos(a + spread * 0.5) * handleLen * 0.3;
  const cpRight2Y = tipY + Math.sin(a + spread * 0.5) * handleLen * 0.3;
  const cpRight1X = baseRightX + Math.cos(right) * handleLen;
  const cpRight1Y = baseRightY + Math.sin(right) * handleLen;

  return `M ${baseLeftX} ${baseLeftY}
          C ${cpLeft1X} ${cpLeft1Y}, ${cpLeft2X} ${cpLeft2Y}, ${tipX} ${tipY}
          C ${cpRight2X} ${cpRight2Y}, ${cpRight1X} ${cpRight1Y}, ${baseRightX} ${baseRightY}
          Z`;
}

function innerPetalPath(cx: number, cy: number, angleDeg: number, innerR: number, outerR: number, spread: number): string {
  return petalPath(cx, cy, angleDeg, innerR * 1.15, outerR * 0.72, spread * 0.7);
}

/* ── Component ─────────────────────────────────────────────────── */

interface RoseWindowProps {
  size?: number;
}

export default function RoseWindow({ size = 400 }: RoseWindowProps) {
  const cx = 200;
  const cy = 200;
  const outerR = 160;
  const innerR = 42;
  const spread = 0.32;

  return (
    <Wrapper role="img" aria-label="Rose stained-glass window mandala representing book topics">
      <SVG viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Outer border ring gradient */}
          <radialGradient id="rw-border-grad">
            <stop offset="0%" stopColor="#c5a044" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a07e2c" stopOpacity="1" />
          </radialGradient>

          {/* Dark background */}
          <radialGradient id="rw-bg">
            <stop offset="0%" stopColor="#252552" />
            <stop offset="100%" stopColor="#0f0f2a" />
          </radialGradient>

          {/* Centre medallion gradient — Christ in Majesty */}
          <radialGradient id="rw-center">
            <stop offset="0%" stopColor="#f0e1a8" />
            <stop offset="40%" stopColor="#dac278" />
            <stop offset="75%" stopColor="#c5a044" />
            <stop offset="100%" stopColor="#a07e2c" />
          </radialGradient>

          {/* Divine corona — radiant glory emanating from center */}
          <radialGradient id="rw-corona" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5e6b8" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#c5a044" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#c5a044" stopOpacity="0" />
          </radialGradient>

          {/* Petal gradients */}
          {PETALS.map((p, i) => (
            <radialGradient key={`pg-${i}`} id={`rw-petal-${i}`}
              cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor={p.color} stopOpacity="0.95" />
              <stop offset="100%" stopColor={p.colorDark} stopOpacity="1" />
            </radialGradient>
          ))}

          {/* Glass sheen overlay */}
          <radialGradient id="rw-sheen" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>

          {/* Shimmer sweep — a beam of light passing across the glass */}
          <linearGradient id="rw-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="40%" stopColor="#fff" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#f5e6b8" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#fff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ── Background circle ── */}
        <circle cx={cx} cy={cy} r="195" fill="url(#rw-bg)" />

        {/* ── Firmament layer — outer ornamental ring, rotating like the stars ── */}
        <FirmamentLayer>
          {/* Outer ring — gold tracery border */}
          <circle cx={cx} cy={cy} r="185" fill="none"
            stroke="url(#rw-border-grad)" strokeWidth="4" />
          <circle cx={cx} cy={cy} r="176" fill="none"
            stroke="#c5a044" strokeWidth="1" opacity="0.4" />

          {/* 24 ornamental dots — the fixed stars */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15) * Math.PI / 180;
            const r = 172;
            return (
              <circle key={`dot-${i}`}
                cx={cx + Math.cos(angle) * r}
                cy={cy + Math.sin(angle) * r}
                r="2.5"
                fill="#c5a044"
                opacity="0.5"
              />
            );
          })}

          {/* Outer trefoil decorations */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 - 90) * Math.PI / 180;
            const r = 168;
            return (
              <circle key={`trefoil-${i}`}
                cx={cx + Math.cos(angle) * r}
                cy={cy + Math.sin(angle) * r}
                r="6"
                fill={PETALS[i].colorDark}
                stroke="#c5a044"
                strokeWidth="1"
                opacity="0.7"
              />
            );
          })}

          {/* Radial lead lines */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 - 90) * Math.PI / 180;
            return (
              <line key={`lead-${i}`}
                x1={cx + Math.cos(angle) * innerR}
                y1={cy + Math.sin(angle) * innerR}
                x2={cx + Math.cos(angle) * 175}
                y2={cy + Math.sin(angle) * 175}
                stroke="#c5a044"
                strokeWidth="1.5"
                opacity="0.3"
              />
            );
          })}
        </FirmamentLayer>

        {/* ── Petal layer — the eight virtues, counter-rotating ── */}
        <PetalLayer>
          {PETALS.map((p, i) => {
            const angle = i * 45 - 90;
            return (
              <g key={`petal-${i}`}>
                <path
                  d={petalPath(cx, cy, angle, innerR, outerR, spread)}
                  fill={`url(#rw-petal-${i})`}
                  stroke="#c5a044"
                  strokeWidth="1.5"
                  opacity="0.9"
                />
                <path
                  d={innerPetalPath(cx, cy, angle, innerR, outerR, spread)}
                  fill={p.color}
                  opacity="0.45"
                  stroke="#c5a044"
                  strokeWidth="0.75"
                />
              </g>
            );
          })}
        </PetalLayer>

        {/* ── Trefoil layer — small inter-petals, wheels within wheels ── */}
        <TrefoilLayer>
          {PETALS.map((_, i) => {
            const angle = i * 45 - 90 + 22.5;
            return (
              <path key={`sm-${i}`}
                d={petalPath(cx, cy, angle, innerR * 0.9, outerR * 0.52, spread * 0.75)}
                fill={PETALS[(i + 1) % 8].colorDark}
                stroke="#c5a044"
                strokeWidth="1"
                opacity="0.6"
              />
            );
          })}
        </TrefoilLayer>

        {/* ── Divine corona — radiant glory from the centre ── */}
        <GloryCorona cx={cx} cy={cy} r="50"
          fill="url(#rw-corona)"
        />

        {/* ── Centre medallion — the still point of the turning world ── */}
        <circle cx={cx} cy={cy} r={innerR + 2}
          fill="url(#rw-center)"
          stroke="#a07e2c"
          strokeWidth="2"
        />
        <circle cx={cx} cy={cy} r={innerR - 6}
          fill="none"
          stroke="#1a1a3e"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Chi-Rho inspired cross at center */}
        <line x1={cx} y1={cy - 22} x2={cx} y2={cy + 22}
          stroke="#1a1a3e" strokeWidth="2" opacity="0.3" />
        <line x1={cx - 22} y1={cy} x2={cx + 22} y2={cy}
          stroke="#1a1a3e" strokeWidth="2" opacity="0.3" />
        {/* Small diagonal strokes suggesting the Chi */}
        <line x1={cx - 12} y1={cy - 16} x2={cx + 12} y2={cy + 16}
          stroke="#1a1a3e" strokeWidth="1" opacity="0.15" />
        <line x1={cx + 12} y1={cy - 16} x2={cx - 12} y2={cy + 16}
          stroke="#1a1a3e" strokeWidth="1" opacity="0.15" />

        {/* Centre jewel */}
        <circle cx={cx} cy={cy} r="5" fill="#1a1a3e" opacity="0.35" />
        <circle cx={cx} cy={cy} r="2.5" fill="#f0e1a8" />

        {/* ── Glass sheen ── */}
        <circle cx={cx} cy={cy} r="185" fill="url(#rw-sheen)" />

        {/* ── Shimmer — light passing across the window like sun through glass ── */}
        <ShimmerOverlay>
          <circle cx={cx} cy={cy} r="185" fill="url(#rw-shimmer)" />
        </ShimmerOverlay>
      </SVG>
    </Wrapper>
  );
}
