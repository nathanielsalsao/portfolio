"use client";
import React from "react";

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium"; 
}> = ({ children, className = "", intensity = "medium" }) => {
  const blurAmount = intensity === "light" ? "backdrop-blur-sm" : "backdrop-blur-xl";

  return (
    <div
      className={`
        bento-card
        relative overflow-hidden
        ${blurAmount} 
        bg-white/[0.03] 
        border border-white/10 
        rounded-[30px] 
        p-8 
        shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
        group
        transition-all duration-300 ease-out 
        hover:scale-[1.01] hover:bg-white/[0.05] hover:border-white/20
        ${className}
      `}
    >
      <div className="absolute inset-0 pointer-events-none rounded-[30px]">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
      </div>
      {children}
    </div>
  );
};