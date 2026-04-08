import React, { useMemo } from 'react';
import PillNav from './PillNav';

interface NavProps {
  categories: string[];
  activeCategory: string;
  themeColor: string;
  activeColor: string;
  glowEffect: string;
  onChange: (cat: string) => void;
}

export const PortfolioNav = ({ 
  categories, 
  activeCategory, 
  themeColor, 
  onChange 
}: NavProps) => {
  
  const NavComponent = PillNav as any;


  const categoryColors: Record<string, string> = {
    "TECH STACK": "#22c55e", 
    "PROJECTS": "#3b82f6",   
    "ABOUT": "#a855f7",     
    "CONTACT": "#f97316",   
    "HOME": "#3b82f6"       
  };

 
  const currentPillColor = categoryColors[activeCategory.toUpperCase()] || (themeColor === "green" ? "#22c55e" : "#3b82f6");

  const navItems = useMemo(() => {
    return categories.map((cat) => ({
      label: cat,
      href: `#${cat.toLowerCase().replace(/\s+/g, '-')}`,
    }));
  }, [categories]);

  const handleCaptureClick = (e: React.MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest('a');
    if (!anchor) return;

    e.preventDefault();
    e.stopPropagation();

    const labelSpan = anchor.querySelector('.pill-label') as HTMLElement;
    const rawText = labelSpan ? labelSpan.innerText : anchor.innerText;
    const clickedText = rawText.trim().toUpperCase();
    
    const matchedCategory = categories.find(
      (c) => c.toUpperCase() === clickedText
    );

    if (matchedCategory) {
      onChange(matchedCategory);
    }
  };

  return (
    <nav 
    
      className="relative flex items-center justify-center mb-20 z-[100]"
      onClickCapture={handleCaptureClick}
    >
      <NavComponent
        logo="" 
        logoAlt=""
        items={navItems}
        activeHref={`#${activeCategory.toLowerCase().replace(/\s+/g, '-')}`}
        className="hide-nav-logo" 
        ease="power2.easeOut"
        baseColor="rgba(255, 255, 255, 0.4)" 
        pillColor={currentPillColor} // Dynamically changes per category
        pillTextColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        initialLoadAnimation={false}
      />

     
      <div 
        className="absolute -z-10 w-96 h-24 blur-[120px] opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: currentPillColor }} 
      />

      <style>{`
        .hide-nav-logo .pill-logo {
          display: none !important;
        }
        .hide-nav-logo .pill-nav {
          padding-left: 1.5rem !important; 
          padding-right: 1.5rem !important;
          justify-content: center !important;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          min-width: 450px;
        }
        .hide-nav-logo .pill-nav-items {
          margin-left: 0 !important;
        }
        .hide-nav-logo .pill {
          position: relative;
          z-index: 1;
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
};