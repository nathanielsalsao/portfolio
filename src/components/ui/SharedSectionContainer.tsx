import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { PortfolioNav } from "./PortfolioNav";
import type { PortfolioItem } from "../../data/portfolioData";

interface ContainerProps {
  category: string;
  data: PortfolioItem[];
  themeColor?: "blue" | "green";
  onCategoryChange: (newCategory: string) => void;
  children: (item: PortfolioItem, index: number) => React.ReactNode;
}

export const SharedSectionContainer: React.FC<ContainerProps> = ({ 
  category, data = [], themeColor = "blue", onCategoryChange, children 
}) => {
  const [itemIndex, setItemIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const categories = ["TECH STACK", "PROJECTS", "CERTIFICATIONS"];

  useEffect(() => setItemIndex(0), [category]);

  const paginate = (newDir: number) => {
    if (data.length === 0) return;
    setDirection(newDir);
    setItemIndex((prev) => (prev + newDir + data.length) % data.length);
  };

  const activeColor = themeColor === "green" ? "bg-green-500" : "bg-blue-500";
  const glowEffect = themeColor === "green" ? "shadow-[0_0_20px_rgba(34,197,94,0.4)]" : "shadow-[0_0_20px_rgba(59,130,246,0.4)]";

  return (
    <div className="relative w-full max-w-[120rem] mx-auto flex flex-col items-center py-10 px-4">
      <PortfolioNav 
        categories={categories} 
        activeCategory={category} 
        themeColor={themeColor} 
        activeColor={activeColor}
        glowEffect={glowEffect}
        onChange={onCategoryChange} 
      />

      <div className="flex w-full items-center gap-4 md:gap-8">
        <NavButton icon={<IoChevronBackOutline />} onClick={() => paginate(-1)} />

        <div className="relative flex-1 aspect-[21/10] min-h-[450px] rounded-[3rem] md:rounded-[4rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {data.length > 0 && (
              <motion.div
                key={`${category}-${itemIndex}`}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                {children(data[itemIndex], itemIndex)}
              </motion.div>
            )}
          </AnimatePresence>

      
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {data.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-700 ${itemIndex === i ? `w-16 ${activeColor} ${glowEffect}` : 'w-3 bg-white/10'}`} />
            ))}
          </div>
        </div>

        <NavButton icon={<IoChevronForwardOutline />} onClick={() => paginate(1)} />
      </div>
    </div>
  );
};

const NavButton = ({ icon, onClick }: { icon: React.ReactNode, onClick: () => void }) => (
  <button onClick={onClick} className="hidden md:flex w-16 h-16 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all active:scale-90 text-white/20 text-2xl">
    {icon}
  </button>
);

export default SharedSectionContainer;