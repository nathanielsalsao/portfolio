"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SideCard from "../components/ui/SideCard";
import HeroCard from "../components/ui/HeroCard";
import HeroContent from "../components/ui/HeroContent";
gsap.registerPlugin(ScrollTrigger);
const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 1280) return;

    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, { opacity: 0, scale: 0.9, y: 50 });

      gsap.set([leftTextRef.current, rightTextRef.current], {
        opacity: 0,
        yPercent: -50,
        filter: "blur(12px)",
      });

      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 1.5 },
        onComplete: () => createScrollAnimations(),
      });

      tl.to(cardRef.current, { opacity: 1, scale: 1, y: 0 })
        .to(
          [leftTextRef.current, rightTextRef.current],
          {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.1,
          },
          "-=1.2"
        )
        .to(
          contentRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
          },
          "-=1"
        );

      const createScrollAnimations = () => {
        const scrollConfig = {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
        };

        gsap.to(leftTextRef.current, {
          yPercent: -120,
          scrollTrigger: scrollConfig,
        });

        gsap.to(rightTextRef.current, {
          yPercent: 20,
          scrollTrigger: scrollConfig,
        });

        gsap.to(cardRef.current, {
          y: 100,
          scale: 0.95,
          scrollTrigger: scrollConfig,
          ease: "none",
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || window.innerWidth < 1280) return;

    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xPos = (clientX / innerWidth - 0.5) * 12;
    const yPos = (clientY / innerHeight - 0.5) * -12;

    gsap.to(cardRef.current, {
      rotationY: xPos,
      rotationX: yPos,
      transformPerspective: 1200,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || window.innerWidth < 1280) return;

    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex items-start justify-center pt-7 px-4 sm:px-6 text-white overflow-hidden font-['Plus_Jakarta_Sans'] [perspective:1500px]"
    >
  
      <div className="hidden xl:block">
        <SideCard
          ref={leftTextRef}
          variant="left"
          items={[
            { label: "Specialization", value: "Frontend Dev" },
            { label: "Core Focus", value: "UI / UX Motion" },
          ]}
        />
      </div>

   
      <HeroCard ref={cardRef}>
        <HeroContent
          contentRef={contentRef as React.RefObject<HTMLDivElement>}
        />
      </HeroCard>

      <div className="hidden xl:block">
        <SideCard
          ref={rightTextRef}
          variant="right"
          items={[
            { label: "used tech", value: "React + TSX" },
            { label: "Philosophy", value: "Modern Design" },
          ]}
        />
      </div>
    </section>
  );
};

export default HeroSection;