export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      aria-label="voiceasy.ai logo"
      className={className}
    >
      <title>voiceasy.ai logo</title>
      <defs>
        <linearGradient id="ve-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b9cff" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#ve-grad)" />
      <g fill="#ffffff" opacity="0.92">
        {/* Equalizer bars to represent voice */}
        <rect x="18" y="26" width="4" height="12" rx="2" />
        <rect x="24" y="22" width="4" height="20" rx="2" />
        <rect x="30" y="18" width="4" height="28" rx="2" />
        <rect x="36" y="22" width="4" height="20" rx="2" />
        <rect x="42" y="26" width="4" height="12" rx="2" />
      </g>
      {/* Subtle outline for definition in light/dark themes */}
      <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeOpacity="0.1" />
    </svg>
  );
}