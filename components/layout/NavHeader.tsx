"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";

export function NavHeader() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const popConfetti = useCallback(() => {
    const emojis = ["🎉", "✨", "🚀", "⭐", "💫", "🎊", "🔥", "💥", "😼"];

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("span");
      particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      const fromLeft = Math.random() > 0.5;
      const startX = fromLeft ? Math.random() * 120 : window.innerWidth - Math.random() * 120;
      const startY = window.innerHeight;

      particle.style.position = "fixed";
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.fontSize = `${16 + Math.random() * 14}px`;
      particle.style.pointerEvents = "none";
      particle.style.zIndex = "9999";
      particle.style.opacity = "1";

      document.body.appendChild(particle);

      const totalDuration = 3000 + Math.random() * 1500;
      const delay = Math.random() * 300;

      const vx = (fromLeft ? 1 : -1) * (150 + Math.random() * 200);
      const vy = -(600 + Math.random() * 300);
      const gravity = 400 + Math.random() * 100;

      // Generate parabolic path keyframes
      const steps = 30;
      const dt = totalDuration / 1000 / steps;
      const keyframes = [];
      const totalRotation = (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 360);

      for (let s = 0; s <= steps; s++) {
        const t = s * dt;
        const progress = s / steps;
        const x = startX + vx * t;
        const y = startY + vy * t + 0.5 * gravity * t * t;
        const rotation = progress * totalRotation;
        const opacity = progress > 0.7 ? 1 - (progress - 0.7) / 0.3 : 1;
        const scale = progress > 0.8 ? 1 - (progress - 0.8) * 2 : 1;

        keyframes.push({
          left: `${x}px`,
          top: `${y}px`,
          opacity: opacity,
          transform: `rotate(${rotation}deg) scale(${scale})`,
        });
      }

      const anim = particle.animate(keyframes, {
        duration: totalDuration,
        delay: delay,
        easing: "linear",
        fill: "forwards",
      });

      anim.onfinish = () => particle.remove();
    }
  }, []);

  return (
    <>
      <header className="w-full border-b border-border-subtle bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-[960px] mx-auto px-6 md:px-24 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="text-label-caps tracking-[0.1em] font-bold hover:opacity-80 transition-opacity hidden sm:block"
          >
            Portfolio
          </Link>

          {/* Center Navigation Links */}
          <nav className="flex items-center gap-6 md:gap-8" aria-label="Main navigation">
            <Link
              href="/"
              className="text-meta-sm font-semibold hover:border-b-2 hover:border-on-background pb-1 transition-all"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="text-meta-sm font-semibold hover:border-b-2 hover:border-on-background pb-1 transition-all"
            >
              Work
            </Link>
            <Link
              href="/posts"
              className="text-meta-sm font-semibold hover:border-b-2 hover:border-on-background pb-1 transition-all"
            >
              Posts
            </Link>
          </nav>

          {/* Right side: Dark Mode & Confetti */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="p-1.5 rounded-sm hover:bg-surface-container-low transition-colors text-on-background/70 hover:text-on-background"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={popConfetti}
              aria-label="Celebrate"
              className="p-1.5 rounded-sm hover:bg-surface-container-low hover:scale-110 active:scale-95 transition-all text-[16px] leading-none"
            >
              🎉
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
