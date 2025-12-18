"use client";

import { useEffect, useState } from "react";
const stickers = [
  // React — primary hero tech
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    x: "24%",
    y: "18%",
    r: 0,
  },

  // ✅ Vercel — deployment focus (important)
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/512px-Vercel_logo_black.svg.png",
    x: "42%",
    y: "88%",
    r: 0,
  },

  // Node.js — top right
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png",
    x: "78%",
    y: "50%",
    r: 0,
  },

  // Render — bottom-left subtle
  {
    src: "https://avatars.githubusercontent.com/u/36424661?s=512&v=4",
    x: "42%",
    y: "4%",
    r: 0,
  },

  // MongoDB — center bottom anchor
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png",
    x: "42%",
    y: "50%",
    r: 0,
  },

  // JavaScript — right mid
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png",
    x: "64%",
    y: "68%",
    r: 0,
  },

  // Express — left mid
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/512px-Expressjs.png",
    x: "14%",
    y: "50%",
    r: 0,
  },

  // TypeScript — lower right
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    x: "64%",
    y: "18%",
    r: 0,
  },

  // AWS — infra (subtle bottom)
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
    x: "24%",
    y: "74%",
    r: 0,
  },
];

export default function DevStickerBackground() {
  const [scroll, setScroll] = useState(0);
  // 🆕 NEW: rotation state
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // run once
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    // 🆕 NEW: continuous rotation animation
    let raf: number;
    const animate = () => {
      setRotation((r) => (r - 0.4) % 360); // anti-clockwise
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };

  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Paper background */}
      <div className="absolute inset-0 bg-[#f7f7f8]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-\[size\:48_48\]" />

      {/* Stickers */}
      {stickers.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt="tech logo"
          className="
            absolute
            w-24 sm:w-28 md:w-36
            opacity-12
            grayscale
            pointer-events-none

            /* mobile: stack naturally */
            max-md:static
            max-md:block
            max-md:mx-auto
            max-md:my-12
            "
          style={{
            left: s.x,
            top: s.y,
            transform: `
    translateY(${scroll * 0.08}px)
    rotate(${
      isMobile
        ? "0deg" // 📱 mobile → no rotation
        : s.src.includes("MongoDB")
        ? "0deg" // 🧊 MongoDB always static
        : `${rotation + i * 40}deg`
    })
  `,
          }}
        />
      ))}
    </div>
  );
}
