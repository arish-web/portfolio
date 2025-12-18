"use client";

import { useEffect, useState } from "react";

export default function TechBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10  from-indigo-100 via-white to-pink-100 pointer-events-none"
      style={{ perspective: "75rem", transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-300/40 blur-3xl"
        style={{
          transform: `translateZ(-12rem) rotateX(${
            mouse.y
          }deg) rotateY(${-mouse.x}deg)`,
        }}
      />

      <div
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-blue-300/40 blur-3xl"
        style={{
          transform: `translateZ(-8rem) rotateX(${mouse.y * 0.8}deg) rotateY(${
            -mouse.x * 0.8
          }deg)`,
        }}
      />

      <div
        className="absolute bottom-24 left-1/2 w-64 h-64 rounded-full bg-pink-300/40 blur-2xl"
        style={{
          transform: `translateZ(-4rem) rotateX(${mouse.y * 0.6}deg) rotateY(${
            -mouse.x * 0.6
          }deg)`,
        }}
      />
    </div>
  );
}
