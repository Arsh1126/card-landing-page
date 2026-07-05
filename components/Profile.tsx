"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactInfo } from "../lib/contactData";

interface ProfileProps {
  contact: ContactInfo;
}

export default function Profile({ contact }: ProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center px-6 pt-2 pb-1"
    >
      {/* Profile image with green glow ring */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-[130px] h-[130px] rounded-full p-[3px] mb-4"
        style={{
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(52, 211, 153, 0.4), rgba(16, 185, 129, 0.8))",
          boxShadow: "0 0 30px rgba(16, 185, 129, 0.2), 0 0 60px rgba(16, 185, 129, 0.08)",
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
          <Image
            src="/profile.jpg"
            alt={`${contact.firstName} ${contact.lastName}`}
            width={130}
            height={130}
            priority
            className="w-full h-full object-cover object-top select-none"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Name */}
      <h1 className="text-[28px] font-extrabold tracking-tight text-white mb-1">
        {contact.firstName} {contact.lastName}
      </h1>

      {/* Bio */}
      <p className="max-w-[300px] text-[13px] text-gray-400 leading-relaxed">
        {contact.bio}
      </p>
    </motion.div>
  );
}
