"use client";
import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface HeroContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const HeroContent: React.FC<HeroContentProps> = ({ contentRef }) => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    if (window.innerWidth < 768) {
      document.querySelector(`#${id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

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
      className="space-y-8 sm:space-y-10 text-center font-sans relative z-10 w-full max-w-5xl mx-auto px-4"
      style={{ transform: "translateZ(60px)" }}
    >
      
      <h1
        className="
          font-black tracking-[-0.04em] leading-[0.9]
          text-[clamp(2.8rem,10vw,7rem)]
          whitespace-nowrap
          origin-center
        "
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          NATHANIEL <br /> SALAO
        </span>
      </h1>

      <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed px-2">
        I build modern, interactive web experiences using{" "}
        <span className="text-white font-semibold">React</span>,{" "}
        <span className="text-white font-semibold">TypeScript</span>,{" "}
        <span className="text-white font-mono italic">GSAP</span>.
      </p>

   
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 pt-4 sm:pt-6">
        <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
          <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-2xl bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
            View Work
          </button>
        </a>

        <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
          <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;