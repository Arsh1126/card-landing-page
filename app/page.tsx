"use client";

import React, { useState, useEffect } from "react";
import {
  Globe,
  Youtube,
  Instagram,
  Mail,
  Share2,
  Copy,
  Check,
  MapPin,
  FileDown,
  Phone,
  QrCode,
  Sparkles,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "../components/Background";
import Profile from "../components/Profile";
import SocialIcons from "../components/SocialIcons";
import ContactButton from "../components/ContactButton";
import LinkCard from "../components/LinkCard";
import { contactData } from "../lib/contactData";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState("https://alphanityone.com");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    if (typeof window !== "undefined") setCurrentUrl(window.location.href);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    if (typeof window !== "undefined" && navigator.vibrate) {
      try { navigator.vibrate(20); } catch {}
    }
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleShare = async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Arshdeep Singh | Nexora Technology",
          text: "Connect with Arshdeep Singh - Full-Stack Web Developer",
          url: currentUrl,
        });
      } catch {
        navigator.clipboard.writeText(currentUrl);
        showToast("Link copied to clipboard!");
      }
    } else {
      navigator.clipboard.writeText(currentUrl);
      showToast("Link copied to clipboard!");
    }
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  const links = [
    {
      title: "YouTube",
      url: contactData.socials.youtube,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
          <rect x="2" y="4" width="20" height="16" rx="4" stroke="#ef4444" strokeWidth="2" />
          <polygon points="10,8 16,12 10,16" fill="#ef4444" />
        </svg>
      ),
    },
    {
      title: "Instagram",
      url: contactData.socials.instagram,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="url(#igGrad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="igGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="url(#igGrad2)" stroke="none" />
        </svg>
      ),
    },
    {
      title: "Nexora Technology | Web Development, SEO & Cybersecurity",
      url: contactData.website,
      imageUrl: "/company-logo.png",
    },
    {
      title: "WhatsApp",
      url: contactData.socials.whatsapp,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Background />

      {/* Loader */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-[3px] border-emerald-500/10 border-t-emerald-400 animate-spin" />
              <span className="mt-3 font-mono text-[10px] uppercase tracking-widest text-emerald-400/60 select-none">
                Nexora Technology
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#111] text-emerald-100 border border-emerald-500/20 px-4 py-2 rounded-full shadow-lg text-xs font-medium flex items-center gap-2 backdrop-blur-lg select-none"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className="relative min-h-screen max-w-md mx-auto flex flex-col px-4 pb-6">

        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between pt-4 pb-2">
          {/* Logo */}
          <button
            onClick={() => showToast("Nexora Technology")}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/30 bg-[#111] text-emerald-400 hover:bg-emerald-500/10 active:scale-95 transition-all cursor-pointer"
          >
            <span className="font-bold text-sm">A</span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500/30 bg-[#111] text-emerald-400 hover:bg-emerald-500/10 active:scale-95 transition-all cursor-pointer"
            title="Share"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Profile */}
        <Profile contact={contactData} />

        {/* Social Icons */}
        <SocialIcons contact={contactData} />

        {/* Cards */}
        <div className="flex flex-col gap-3 w-full mt-4">
          <ContactButton contact={contactData} />

          {links.map((link, index) => (
            <LinkCard
              key={link.title}
              title={link.title}
              url={link.url}
              icon={link.icon}
              imageUrl={link.imageUrl}
              index={index}
            />
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full bg-[#111] border border-white/[0.06] rounded-2xl p-4 mt-4"
        >
          <h3 className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest mb-3 font-mono text-center">
            Quick Connections
          </h3>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => handleCopyText(contactData.phone, "Phone number")}
              className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/20 active:scale-95 transition-all text-left cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[9px] text-gray-500 uppercase font-mono tracking-wider">Phone</span>
                <span className="text-[11px] font-bold text-white">Copy</span>
              </div>
            </button>

            <button
              onClick={() => handleCopyText(contactData.email, "Email address")}
              className="flex items-center gap-2.5 px-3 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/20 active:scale-95 transition-all text-left cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[9px] text-gray-500 uppercase font-mono tracking-wider">Email</span>
                <span className="text-[11px] font-bold text-white">Copy</span>
              </div>
            </button>

            <a
              href={contactData.resumeUrl}
              download
              onClick={() => {
                if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(30);
                showToast("Downloading resume...");
              }}
              className="col-span-2 flex items-center justify-center gap-3 px-3 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <FileDown className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] text-gray-500 uppercase font-mono tracking-wider">Resume</span>
                <span className="text-[11px] font-bold text-white">Download PDF</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="w-full flex flex-col items-center pt-8 pb-4 select-none">
          <p className="text-[13px] text-gray-500 mb-2">Let&apos;s connect</p>
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-emerald-500/40" />
            <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-emerald-500/40" />
          </div>
        </footer>
      </div>
    </>
  );
}
