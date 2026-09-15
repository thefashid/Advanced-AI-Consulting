import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

const NAVY = "#0D1B3E";
const BLUE = "#1B50D4";
const TEAL = "#22D3C6";
const CYAN = "#3B82F6";

function hexPoints(cx: number, cy: number, r: number) {
  const pts: [number, number][] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts;
}

/**
 * Seamless looping "hub network" background animation in Advanced's brand colors.
 * A rotating hexagon (echoing the logo mark) pulses at the center of a satellite
 * node network — meant to sit muted/looped behind the site hero.
 */
export function HubLoop() {
  const frame = useCurrentFrame();
  const { width, height, durationInFrames } = useVideoConfig();
  const cx = width / 2;
  const cy = height / 2;
  const t = frame / durationInFrames; // 0 -> 1, loops seamlessly

  const rotation = t * 360;
  const pulse = 0.5 + 0.5 * Math.sin(t * Math.PI * 2);
  const pulseSlow = 0.5 + 0.5 * Math.sin(t * Math.PI * 2 + Math.PI / 2);

  const coreR = Math.min(width, height) * 0.12;
  const orbitR = Math.min(width, height) * 0.34;
  const satellites = hexPoints(cx, cy, orbitR);
  const corePts = hexPoints(0, 0, coreR)
    .map(([x, y]) => `${x},${y}`)
    .join(" ");

  return (
    <AbsoluteFill style={{ background: NAVY }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={CYAN} stopOpacity={0.35} />
            <stop offset="100%" stopColor={CYAN} stopOpacity={0} />
          </radialGradient>
          <linearGradient id="hexFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={TEAL} />
            <stop offset="100%" stopColor={BLUE} />
          </linearGradient>
        </defs>

        {/* ambient glow, breathing */}
        <circle cx={cx} cy={cy} r={orbitR * (1.1 + pulseSlow * 0.15)} fill="url(#glow)" />

        {/* connecting lines from core to each satellite */}
        {satellites.map(([sx, sy], i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={sx}
            y2={sy}
            stroke={CYAN}
            strokeOpacity={0.15 + 0.2 * (0.5 + 0.5 * Math.sin(t * Math.PI * 2 + i))}
            strokeWidth={1.5}
          />
        ))}

        {/* satellite nodes */}
        {satellites.map(([sx, sy], i) => {
          const local = 0.5 + 0.5 * Math.sin(t * Math.PI * 2 + i * 1.1);
          return (
            <circle
              key={i}
              cx={sx}
              cy={sy}
              r={4 + local * 3}
              fill={i % 2 === 0 ? TEAL : CYAN}
              fillOpacity={0.5 + local * 0.5}
            />
          );
        })}

        {/* rotating core hexagon (logo mark echo) */}
        <g transform={`translate(${cx} ${cy}) rotate(${rotation})`}>
          <polygon
            points={corePts}
            fill="url(#hexFill)"
            fillOpacity={0.85 + pulse * 0.15}
            stroke="#FFFFFF"
            strokeOpacity={0.25}
            strokeWidth={2}
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
}
