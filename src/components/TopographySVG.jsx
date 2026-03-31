export default function TopographySVG({
  color = "var(--feminist-wisdom)",
  opacity = 0.15,
  className = "",
}) {
  // Each path has individual opacity so we can create fade-in/peak/fade-out altitude effect.
  // strokeWidths vary from thin (low altitude) to thick (ridge line) to thin again.
  const paths = [
    // Low valleys — hair-thin, very faint
    {
      d: "M0,12 C120,3 280,22 460,12 C620,3 800,18 980,10 C1140,3 1300,16 1440,10",
      sw: 0.5,
      op: 0.55,
    },
    {
      d: "M0,26 C160,10 340,42 560,26 C740,12 940,38 1120,24 C1280,13 1390,30 1440,24",
      sw: 0.7,
      op: 0.65,
    },
    // Rising slopes
    {
      d: "M0,44 C200,22 420,64 640,44 C820,27 1020,60 1200,46 C1330,36 1410,54 1440,46",
      sw: 1.0,
      op: 0.75,
    },
    {
      d: "M0,58 C140,36 320,76 520,58 C700,40 900,72 1080,58 C1240,46 1370,64 1440,58",
      sw: 1.3,
      op: 0.85,
    },
    // Main ridgeline — boldest
    {
      d: "M0,72 C180,50 380,90 600,72 C780,56 980,88 1160,73 C1300,62 1390,78 1440,73",
      sw: 2.0,
      op: 1.0,
    },
    // Descending slope
    {
      d: "M0,83 C220,65 460,98 680,83 C860,68 1040,94 1220,80 C1340,70 1410,86 1440,82",
      sw: 1.3,
      op: 0.85,
    },
    {
      d: "M0,92 C160,76 360,106 580,92 C760,79 960,103 1140,90 C1290,80 1400,95 1440,91",
      sw: 1.0,
      op: 0.75,
    },
    // Upper atmosphere — fading back out
    {
      d: "M0,101 C200,88 420,112 640,101 C820,90 1020,110 1200,100 C1330,93 1410,104 1440,101",
      sw: 0.7,
      op: 0.62,
    },
    {
      d: "M0,110 C240,100 480,116 720,109 C900,103 1080,114 1260,108 C1360,104 1420,112 1440,109",
      sw: 0.5,
      op: 0.48,
    },
  ];

  return (
    <svg
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {paths.map((p) => (
        <path
          key={p.d.slice(0, 20)}
          d={p.d}
          fill="none"
          stroke={color}
          strokeWidth={p.sw}
          opacity={p.op * opacity}
        />
      ))}
    </svg>
  );
}
