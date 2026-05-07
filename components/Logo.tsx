export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hexGrad" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <polygon
        points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5"
        fill="url(#hexGrad)"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Trebuchet MS', 'Century Gothic', Inter, sans-serif"
        fontWeight="900"
        fontSize="36"
        letterSpacing="-1.5"
        fill="#0a0e27"
        stroke="#0a0e27"
        strokeWidth="0.8"
      >
        SG
      </text>
    </svg>
  );
}
