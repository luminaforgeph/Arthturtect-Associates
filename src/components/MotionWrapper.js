"use client";

import { useState, useEffect } from "react";

export function MotionWrapper({
  children,
  className = "",
  delay = 0,
  duration = "var(--duration-slow)",
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all ${className}`}
      style={{
        transitionDuration: duration,
        transitionTimingFunction: "var(--ease-architectural)",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(16px)",
      }}
    >
      {children}
    </div>
  );
}
