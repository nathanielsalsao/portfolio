"use client";
import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

interface HeroContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const HeroContent: React.FC<HeroContentProps> = ({ contentRef }) => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: `#${id}`,
        offsetY: 80, 
      },
      ease: "power4.inOut",
    });
  };

  return (
    <div
      ref={contentRef}
      className="space-y-10 text-center font-sans relative z-10"
      style={{ transform: "translateZ(60px)" }}
    >
      <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-[-0.04em] leading-[0.9]">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          NATHANIEL <br /> SALAO
        </span>
      </h1>

      <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed">
        I build modern, interactive web experiences using{" "}
        <span className="text-white font-semibold">React</span>,{" "}
        <span className="text-white font-semibold">TypeScript</span>, and{" "}
        <span className="text-white font-mono italic">GSAP</span>.
      </p>

      <div className="flex flex-wrap justify-center gap-6 pt-6">
        <a 
          href="#projects" 
          onClick={(e) => handleScroll(e, "projects")}
          className="inline-block"
        >
          <button className="px-10 py-4 rounded-2xl bg-white text-black font-semibold text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl cursor-pointer">
            View Work
          </button>
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleScroll(e, "contact")}
          className="inline-block"
        >
          <button className="px-10 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;