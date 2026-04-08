"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BentoGrid } from "../components/ui/BentoGrid";
import { AboutMeContent } from "../components/ui/AboutMeContent";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".bento-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
  id="about"
  ref={sectionRef}
  className="w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-transparent flex items-center justify-center scroll-mt- -10" 
>
      <BentoGrid >
        <AboutMeContent />
      </BentoGrid>
    </section>
  );
};

export default AboutSection;