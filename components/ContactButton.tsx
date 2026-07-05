"use client";

import React, { useState, useEffect } from "react";
import { User, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactInfo } from "../lib/contactData";
import { downloadVCF } from "../lib/generateVCF";

interface ContactButtonProps {
  contact: ContactInfo;
}

export default function ContactButton({ contact }: ContactButtonProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [rippleCount, setRippleCount] = useState(0);

  useEffect(() => {
    const hasVisited = localStorage.getItem("has_visited_nfc_card");
    if (!hasVisited) {
      setShowTooltip(true);
    }
  }, []);

  const handleTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && navigator.vibrate) {
      try { navigator.vibrate(60); } catch {}
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((prev) => [...prev, { id: rippleCount, x, y }]);
    setRippleCount((prev) => prev + 1);

    downloadVCF(contact);
    localStorage.setItem("has_visited_nfc_card", "true");
    setShowTooltip(false);
  };

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="relative w-full">
      {/* First Visit Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-emerald-500 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_4px_12px_rgba(52,211,153,0.4)] flex items-center gap-1 cursor-pointer select-none"
            onClick={() => setShowTooltip(false)}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping mr-1" />
            Tap to Save Contact
            <svg className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-2 text-emerald-500 fill-current" viewBox="0 0 16 8">
              <polygon points="8,8 0,0 16,0" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Save Contact Card */}
      <motion.button
        onClick={handleTap}
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative w-full overflow-hidden flex items-center justify-between bg-[#111] border border-emerald-500/30 text-white rounded-2xl px-4 py-4 shadow-[0_0_15px_rgba(16,185,129,0.08)] hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-shadow duration-300 select-none group cursor-pointer"
      >
        {/* Ripple */}
        <span className="absolute inset-0 pointer-events-none block overflow-hidden rounded-2xl">
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute bg-emerald-500/15 rounded-full animate-ripple pointer-events-none"
              style={{ left: ripple.x, top: ripple.y, transform: "translate(-50%, -50%)", width: "400px", height: "400px" }}
              onAnimationEnd={() => removeRipple(ripple.id)}
            />
          ))}
        </span>

        {/* Left Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
          <User className="w-5 h-5" />
        </div>

        {/* Text */}
        <div className="flex-1 text-left pl-4">
          <span className="block font-bold text-[15px] text-white">Save Contact</span>
          <span className="block text-[11px] text-emerald-400 mt-0.5">Tap to save my contact</span>
        </div>

        {/* Menu Icon */}
        <div className="w-8 h-8 flex items-center justify-center text-emerald-500/50 group-hover:text-emerald-400 transition-colors shrink-0">
          <MoreVertical className="w-5 h-5" />
        </div>
      </motion.button>
    </div>
  );
}
