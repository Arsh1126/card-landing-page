"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

interface LinkCardProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  index: number;
}

export default function LinkCard({ title, url, icon, imageUrl, index }: LinkCardProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [rippleCount, setRippleCount] = useState(0);

  const handleTap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && navigator.vibrate) {
      try { navigator.vibrate(40); } catch {}
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((prev) => [...prev, { id: rippleCount, x, y }]);
    setRippleCount((prev) => prev + 1);
  };

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleTap}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.1 * index + 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full overflow-hidden flex items-center justify-between bg-[#111] border border-white/[0.06] text-white rounded-2xl px-4 py-4 shadow-sm hover:border-emerald-500/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.06)] transition-all duration-300 select-none group cursor-pointer"
    >
      {/* Ripple */}
      <span className="absolute inset-0 pointer-events-none block overflow-hidden rounded-2xl">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-emerald-500/10 rounded-full animate-ripple pointer-events-none"
            style={{ left: ripple.x, top: ripple.y, transform: "translate(-50%, -50%)", width: "400px", height: "400px" }}
            onAnimationEnd={() => removeRipple(ripple.id)}
          />
        ))}
      </span>

      {/* Left Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-white/[0.04] border border-white/[0.06] shrink-0">
        {imageUrl ? (
          <Image src={imageUrl} alt={title} width={40} height={40} className="w-full h-full object-cover" />
        ) : (
          <div className="text-white/80">{icon}</div>
        )}
      </div>

      {/* Text */}
      <span className="flex-1 text-left font-semibold text-[14px] text-white leading-snug pl-4 pr-2 select-none">
        {title}
      </span>

      {/* Menu */}
      <div className="w-8 h-8 flex items-center justify-center text-emerald-500/40 group-hover:text-emerald-400 transition-colors shrink-0">
        <MoreVertical className="w-5 h-5" />
      </div>
    </motion.a>
  );
}
