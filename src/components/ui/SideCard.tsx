import { forwardRef } from "react";

interface SideCardItem {
  label: string;
  value: string;
}

interface SideCardProps {
  items: SideCardItem[];
  variant?: "left" | "right";
  className?: string;
}

const SideCard = forwardRef<HTMLDivElement, SideCardProps>(
  ({ items, variant = "left", className = "" }, ref) => {
    const isRight = variant === "right";

    return (
      <div
  ref={ref}
  className={`absolute ${
    isRight ? "right-10" : "left-10"
  } top-[45%] -translate-y-1/2 hidden xl:flex flex-col z-10 ${className}`}
>
        <div
          className={`group relative bg-black/20 backdrop-blur-[50px] border border-white/20 rounded-[2.5rem] p-9 space-y-12 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col transition-all duration-500 hover:border-white/40 ${
            isRight ? "text-right items-end" : "text-left items-start"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
          <div
            className={`relative z-10 w-16 h-[4px] bg-white shadow-[0_0_20px_rgba(255,255,255,1)] rounded-full ${
              isRight ? "ml-auto" : ""
            }`}
          />

          {items.map((item, index) => (
            <div key={index} className="relative z-10 space-y-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.6em] text-white/40 font-bold">
                {item.label}
              </p>
              <p className="text-3xl font-black tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {item.value}
              </p>
            </div>
          ))}
          <div className="absolute -inset-full top-0 block h-full w-1/2 z-5 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
        </div>
      </div>
    );
  }
);

SideCard.displayName = "SideCard";
export default SideCard;