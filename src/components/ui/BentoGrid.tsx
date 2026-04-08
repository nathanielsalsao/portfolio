"use client";
import React, { useRef } from "react";

export const BentoGrid = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = containerRef.current?.querySelectorAll(".bento-card");
    cards?.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[320px] ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`
        bento-card relative overflow-hidden
        bg-white/[0.03] backdrop-blur-2xl 
        border border-white/10 rounded-[2.5rem] 
        shadow-2xl transition-all duration-500 ease-out
        hover:border-[#FACC15]/40 hover:bg-white/[0.07]
        flex flex-col p-10 group ${className}
      `}
    >
      {children}
    </div>
  );
};