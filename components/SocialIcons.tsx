"use client";

import React from "react";
import { motion } from "framer-motion";
import { ContactInfo } from "../lib/contactData";

interface SocialIconsProps {
  contact: ContactInfo;
}

export default function SocialIcons({ contact }: SocialIconsProps) {
  const socials = [
    {
      name: "Instagram",
      url: contact.socials.instagram,
      borderColor: "border-pink-500/60",
      hoverShadow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="url(#igGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="url(#igGrad)" stroke="none" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: contact.socials.youtube,
      borderColor: "border-red-500/60",
      hoverShadow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="4" stroke="#ef4444" strokeWidth="2" />
          <polygon points="10,8 16,12 10,16" fill="#ef4444" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: contact.socials.whatsapp,
      borderColor: "border-green-500/60",
      hoverShadow: "hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex justify-center gap-5 py-2">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2 + index * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`group flex items-center justify-center w-12 h-12 rounded-full border-2 ${social.borderColor} bg-[#111]/80 backdrop-blur-sm transition-all duration-300 ${social.hoverShadow}`}
          title={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
