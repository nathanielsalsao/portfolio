import React, { forwardRef } from "react";

interface HeroCardProps {
  children: React.ReactNode;
}

const HeroCard = forwardRef<HTMLDivElement, HeroCardProps>(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="relative z-20 max-w-4xl w-full p-12 md:p-14 rounded-[3rem] 
      bg-white/[0.03] backdrop-blur-[40px] border border-white/10 
      shadow-[0_25px_80px_-12px_rgba(0,0,0,0.6)] flex flex-col items-center text-center"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
});

HeroCard.displayName = "HeroCard";
export default HeroCard;