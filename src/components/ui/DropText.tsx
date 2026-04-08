"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DropTextProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

const DropText: React.FC<DropTextProps> = ({ text, highlightWords = [], className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll(".drop-letter");
    if (!letters) return;

    letters.forEach((char) => {
      const randomY = -150 - Math.random() * 250;
      const randomDelay = Math.random() * 1.5;

      gsap.fromTo(char,
        { opacity: 0, y: randomY },
        {
          opacity: 1, y: 0,
          duration: 1.4,
          delay: randomDelay,
          ease: "bounce.out", 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [text]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-wrap justify-start items-center ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-3">
          {word.split("").map((char, charIdx) => {
            const isHighlight = highlightWords.includes(word.replace(/[.,]/g, ""));
            return (
              <span key={charIdx} className={`drop-letter inline-block will-change-transform text-lg ${isHighlight ? "text-[#EAB308] font-bold" : "text-white/80"}`}>
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
};

export default DropText;