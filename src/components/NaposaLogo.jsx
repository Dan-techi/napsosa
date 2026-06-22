export default function NaposaLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Shield */}
      <path
        d="M50 4 L92 20 L92 52 C92 72 72 88 50 96 C28 88 8 72 8 52 L8 20 Z"
        fill="#0d1f4e"
        stroke="#c9a84c"
        strokeWidth="3"
      />
      {/* Inner shield border */}
      <path
        d="M50 12 L84 26 L84 52 C84 68 67 82 50 89 C33 82 16 68 16 52 L16 26 Z"
        fill="none"
        stroke="#c9a84c"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Open book */}
      <g transform="translate(50, 54)">
        <path d="M-18 0 Q-9 -6 0 0 Q9 -6 18 0 L18 14 Q9 8 0 14 Q-9 8 -18 14 Z" fill="#c9a84c" opacity="0.9" />
        <line x1="0" y1="0" x2="0" y2="14" stroke="#0d1f4e" strokeWidth="1.2" />
      </g>
      {/* Torch flame */}
      <g transform="translate(50, 22)">
        <ellipse cx="0" cy="6" rx="5" ry="8" fill="#c9a84c" opacity="0.95" />
        <ellipse cx="0" cy="8" rx="3" ry="5" fill="#f0d080" />
        <rect x="-2" y="13" width="4" height="10" rx="1" fill="#c9a84c" />
      </g>
      {/* NAPOSA text */}
      <text
        x="50"
        y="46"
        textAnchor="middle"
        fill="#c9a84c"
        fontSize="9.5"
        fontWeight="900"
        fontFamily="Arial, sans-serif"
        letterSpacing="2"
      >
        NAPOSA
      </text>
    </svg>
  )
}
