"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const lastScrollY = useRef(0);
  const isHidden = useRef(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: `#${id}`,
        offsetY: 80,
      },
      ease: "power4.inOut",
    });

    setMenuOpen(false);
  };

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "expo.out", delay: 0.5 }
    );

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (Math.abs(delta) < 10) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        if (!isHidden.current) {
          gsap.to(navRef.current, {
            y: -120,
            opacity: 0,
            duration: 0.6,
          });
          isHidden.current = true;
        }
      } else {
        if (isHidden.current) {
          gsap.to(navRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
          });
          isHidden.current = false;
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-4 px-4 sm:px-6">
      <nav
        ref={navRef}
        className="
          w-full max-w-6xl
          backdrop-blur-2xl bg-white/[0.01]
          border border-white/5
          rounded-2xl
          px-5 sm:px-8 md:px-10
          py-3
          flex items-center justify-between
          text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          relative overflow-hidden
        "
      >
   
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

   
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="font-black text-xl sm:text-2xl tracking-tighter relative z-10"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            NS
          </span>
          <span className="text-blue-500">.</span>
        </a>

    
        <div className="hidden md:flex gap-10 lg:gap-12 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 relative z-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="hover:text-white transition-all duration-500 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

      
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-10 text-white/70"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

     
      <div
        ref={mobileMenuRef}
        className="
          md:hidden
          absolute top-[70px]
          w-[92%]
          bg-black/40 backdrop-blur-2xl
          border border-white/10
          rounded-2xl
          overflow-hidden
          opacity-0 h-0
        "
      >
        <div className="flex flex-col p-5 gap-4 text-white/70 text-sm uppercase tracking-widest">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;