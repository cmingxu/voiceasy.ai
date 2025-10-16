"use client";

// Aurora-style animated gradient background inspired by React Bits backgrounds.
// Lightweight CSS-only approach compatible with Tailwind v4.

export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
    >
      {/* Gradient blobs */}
      <div
        className="aurora__blob"
        style={{ top: "-10%", left: "-15%" }}
      />
      <div
        className="aurora__blob"
        style={{ top: "35%", left: "55%" }}
      />
      <div
        className="aurora__blob"
        style={{ top: "65%", left: "-10%" }}
      />
    </div>
  );
}