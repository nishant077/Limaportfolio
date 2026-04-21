export default function WaveSVG({ color = "var(--diplomatic-blue)", opacity = 0.15, className = "" }) {
  return (
    <svg 
        viewBox="0 0 1440 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`w-full ${className}`}
        preserveAspectRatio="none"
    >
      <path 
        d="M0 80C150 70 300 90 450 80C600 70 750 90 900 80C1050 70 1200 90 1350 80C1400 77 1440 80 1440 80" 
        stroke={color} 
        strokeWidth="1" 
        strokeDasharray="6 6" 
        opacity={opacity} 
      />
      <path 
        d="M0 100C150 90 300 110 450 100C600 90 750 110 900 100C1050 90 1200 110 1350 100C1400 97 1440 100 1440 100" 
        stroke={color} 
        strokeWidth="0.8" 
        strokeDasharray="4 4" 
        opacity={opacity * 0.5} 
      />
    </svg>
  );
}
