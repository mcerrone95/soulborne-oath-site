// The oath sigil: a downward-pointing blade inside a broken ring, drawn as SVG.
// No image file is needed, so it stays sharp at any size.
const tickAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]

export default function Sigil() {
  return (
    <svg
      className="sigil"
      viewBox="0 0 400 400"
      role="img"
      aria-label="Oath sigil: a downward-pointing blade inside a broken ring"
    >
      <defs>
        <linearGradient id="ring" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2b84b" />
          <stop offset="1" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="steel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6b625a" />
          <stop offset="0.5" stopColor="#d8cdbd" />
          <stop offset="1" stopColor="#5a524b" />
        </linearGradient>
        <radialGradient id="tip" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f2b84b" stopOpacity="0.9" />
          <stop offset="1" stopColor="#e8741f" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle
        cx="200" cy="200" r="176"
        fill="none" stroke="url(#ring)" strokeWidth="3"
        strokeDasharray="880 226" transform="rotate(-70 200 200)"
      />
      <circle cx="200" cy="200" r="150" fill="none" stroke="#6a5441" strokeWidth="1.5" />

      <g stroke="#8a6a4a" strokeWidth="2">
        {tickAngles.map((angle) => (
          <line key={angle} x1="200" y1="52" x2="200" y2="64" transform={`rotate(${angle} 200 200)`} />
        ))}
      </g>

      <circle cx="200" cy="334" r="44" fill="url(#tip)" />
      <circle cx="200" cy="74" r="9" fill="#3a2a1c" stroke="#c9a24b" strokeWidth="2" />
      <rect x="196" y="84" width="8" height="38" fill="#4a3626" />
      <path d="M138 126 Q200 112 262 126 L262 136 Q200 124 138 136 Z" fill="#c9a24b" />
      <polygon points="186,138 214,138 214,296 200,336 186,296" fill="url(#steel)" />
      <line x1="200" y1="146" x2="200" y2="300" stroke="#2a2623" strokeWidth="3" />
    </svg>
  )
}
