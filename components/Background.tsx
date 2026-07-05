import React from "react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial green glow behind profile */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
