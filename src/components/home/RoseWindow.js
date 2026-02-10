import React from "react";
import styled, { keyframes } from "styled-components";

/*
 * Rose Stained-Glass Window Mandala
 * ─────────────────────────────────
 * 8 petals representing top literary interests, inspired by the great
 * rose windows of Chartres and Notre-Dame. Each petal corresponds to a
 * book topic: Psychology, Philosophy, Classics, History, Religion,
 * Science, Politics, and Mathematics.
 *
 * The colour palette merges cathedral stained-glass hues (cobalt, ruby,
 * amber, emerald) with our existing navy / gold design tokens.
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

const slowSpin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

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

const GlowRing = styled.circle`
  animation: ${slowSpin} 120s linear infinite;
  transform-origin: center;
`;

/**
 * Compute the SVG path for one petal of the rose window.
 * Each petal is an elongated leaf shape (two cubic curves).
 */
function petalPath(cx, cy, angleDeg, innerR, outerR, spread) {
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

/**
 * Build a smaller "inner petal" for the lighter glass highlight.
 */
function innerPetalPath(cx, cy, angleDeg, innerR, outerR, spread) {
  return petalPath(cx, cy, angleDeg, innerR * 1.15, outerR * 0.72, spread * 0.7);
}

export default function RoseWindow({ size = 400 }) {
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

          {/* Centre medallion gradient */}
          <radialGradient id="rw-center">
            <stop offset="0%" stopColor="#dac278" />
            <stop offset="60%" stopColor="#c5a044" />
            <stop offset="100%" stopColor="#a07e2c" />
          </radialGradient>

          {/* Petal gradients — each petal gets its own custom gradient */}
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

          {/* Lead line (tracery) stroke pattern */}
          <filter id="rw-leadglow">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        {/* ── Background circle ── */}
        <circle cx={cx} cy={cy} r="195" fill="url(#rw-bg)" />

        {/* ── Outer ring — gold tracery border ── */}
        <circle cx={cx} cy={cy} r="185" fill="none"
          stroke="url(#rw-border-grad)" strokeWidth="4" />
        <circle cx={cx} cy={cy} r="176" fill="none"
          stroke="#c5a044" strokeWidth="1" opacity="0.4" />

        {/* ── Secondary ornamental ring of small circles ── */}
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

        {/* ── Main petals ── */}
        {PETALS.map((p, i) => {
          const angle = i * 45 - 90; // start from top
          return (
            <g key={`petal-${i}`}>
              {/* Dark petal (main shape) */}
              <path
                d={petalPath(cx, cy, angle, innerR, outerR, spread)}
                fill={`url(#rw-petal-${i})`}
                stroke="#c5a044"
                strokeWidth="1.5"
                opacity="0.9"
              />
              {/* Inner lighter glass area */}
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

        {/* ── Small petals between main petals (trefoils) ── */}
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

        {/* ── Radial "lead" lines from center through each petal ── */}
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

        {/* ── Centre medallion ── */}
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

        {/* Cross / compass in center */}
        <line x1={cx} y1={cy - 22} x2={cx} y2={cy + 22}
          stroke="#1a1a3e" strokeWidth="2" opacity="0.3" />
        <line x1={cx - 22} y1={cy} x2={cx + 22} y2={cy}
          stroke="#1a1a3e" strokeWidth="2" opacity="0.3" />

        {/* Centre dot */}
        <circle cx={cx} cy={cy} r="5" fill="#1a1a3e" opacity="0.35" />
        <circle cx={cx} cy={cy} r="2.5" fill="#dac278" />

        {/* ── Outer trefoil decorations ── */}
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

        {/* ── Glass sheen overlay ── */}
        <circle cx={cx} cy={cy} r="185" fill="url(#rw-sheen)" />

        {/* Subtle animated glow ring */}
        <GlowRing cx={cx} cy={cy} r="182"
          fill="none"
          stroke="#c5a044"
          strokeWidth="0.5"
          opacity="0.2"
          strokeDasharray="8 16"
        />
      </SVG>
    </Wrapper>
  );
}
