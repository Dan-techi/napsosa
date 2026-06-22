export default function NaposaLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle */}
      <circle cx="50" cy="50" r="47" fill="#0d1f4e" stroke="#c9a84c" strokeWidth="2.5" />

      {/* Inner circle ring */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />

      {/* Laurel left */}
      <g fill="#c9a84c" opacity="0.85">
        <ellipse cx="18" cy="50" rx="5" ry="2.5" transform="rotate(-60 18 50)" />
        <ellipse cx="16" cy="43" rx="5" ry="2.5" transform="rotate(-45 16 43)" />
        <ellipse cx="18" cy="36" rx="5" ry="2.5" transform="rotate(-30 18 36)" />
        <ellipse cx="22" cy="30" rx="5" ry="2.5" transform="rotate(-15 22 30)" />
        <ellipse cx="28" cy="25" rx="5" ry="2.5" transform="rotate(0 28 25)" />
        <ellipse cx="18" cy="57" rx="5" ry="2.5" transform="rotate(-75 18 57)" />
        <ellipse cx="20" cy="64" rx="5" ry="2.5" transform="rotate(-90 20 64)" />
      </g>

      {/* Laurel right */}
      <g fill="#c9a84c" opacity="0.85">
        <ellipse cx="82" cy="50" rx="5" ry="2.5" transform="rotate(60 82 50)" />
        <ellipse cx="84" cy="43" rx="5" ry="2.5" transform="rotate(45 84 43)" />
        <ellipse cx="82" cy="36" rx="5" ry="2.5" transform="rotate(30 82 36)" />
        <ellipse cx="78" cy="30" rx="5" ry="2.5" transform="rotate(15 78 30)" />
        <ellipse cx="72" cy="25" rx="5" ry="2.5" transform="rotate(0 72 25)" />
        <ellipse cx="82" cy="57" rx="5" ry="2.5" transform="rotate(75 82 57)" />
        <ellipse cx="80" cy="64" rx="5" ry="2.5" transform="rotate(90 80 64)" />
      </g>

      {/* Handshake icon — two hands clasped */}
      <g transform="translate(50,47)" fill="#c9a84c">
        {/* Left hand */}
        <path d="M-18 4 C-14 0 -8 -2 -4 0 L4 0 C6 0 6 4 4 4 L0 4 C2 4 2 8 0 8 C2 8 2 12 -2 12 C-2 14 -6 14 -6 12 L-10 8 C-14 8 -18 6 -18 4 Z" />
        {/* Right hand */}
        <path d="M18 4 C14 0 8 -2 4 0 L-4 0 C-6 0 -6 4 -4 4 L0 4 C-2 4 -2 8 0 8 C-2 8 -2 12 2 12 C2 14 6 14 6 12 L10 8 C14 8 18 6 18 4 Z" opacity="0.7"/>
      </g>

      {/* NAPOSA */}
      <text x="50" y="34" textAnchor="middle" fill="#c9a84c" fontSize="10" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="2.5">NAPOSA</text>

      {/* Divider line */}
      <line x1="28" y1="72" x2="72" y2="72" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />

      {/* EST text */}
      <text x="50" y="83" textAnchor="middle" fill="#c9a84c" fontSize="6.5" fontFamily="Arial, sans-serif" letterSpacing="2" opacity="0.8">EST. 2025</text>
    </svg>
  )
}
