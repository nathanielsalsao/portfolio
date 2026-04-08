import { useRef } from "react";
import SharedSectionContainer from "../components/ui/SharedSectionContainer";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import gsap from "gsap";

const TechStackSection = ({ onCategoryChange }: { onCategoryChange: (c: string) => void }) => {
  
  const tooltipRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onHover = (index: number) => {
    gsap.to(tooltipRefs.current[index], {
      opacity: 1,
      y: -10, 
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)",
      overwrite: true,
    });
  };

  const onLeave = (index: number) => {
    gsap.to(tooltipRefs.current[index], {
      opacity: 0,
      y: 0, // Slides back down
      scale: 0.9,
      duration: 0.3,
      ease: "power2.in",
      overwrite: true,
    });
  };

  return (
    <SharedSectionContainer 
      category="TECH STACK" 
      data={portfolioData["TECH STACK"]} 
      onCategoryChange={onCategoryChange}
    >
      {(item) => (
        <div className="w-full h-full p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          
         
          <div className="max-w-xl space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              key={item.title}
            >
              <h2 className="text-6xl md:text-8xl font-black text-white italic leading-none tracking-tighter">
                {item.title}
              </h2>
              <div className="h-1 w-20 bg-green-500 mt-4 mb-6 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
              <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          </div>

      
          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {item.icons?.map((icon, i) => {
              const techName = (icon as any)?.key || "Technology";

              return (
                <motion.div
                  key={i}
                  onMouseEnter={() => onHover(i)}
                  onMouseLeave={() => onLeave(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-20 h-20 md:w-24 md:h-24 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-center text-4xl md:text-5xl backdrop-blur-xl transition-all duration-500 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                >
                  <div className="absolute inset-0 bg-green-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  
                  <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                    {icon}
                  </div>

                    <div 
                   ref={(el) => { tooltipRefs.current[i] = el; }}
                    className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 scale-90 z-50"
                  >
                    <div className="relative bg-white/[0.05] border border-white/10 backdrop-blur-2xl px-5 py-2 rounded-full shadow-2xl flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold tracking-[0.25em] uppercase whitespace-nowrap text-center block w-full">
                        {techName}
                      </span>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full blur-[2px] animate-pulse" />
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/10 group-hover:border-green-500/50 transition-colors" />
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </SharedSectionContainer>
  );
};

export default TechStackSection;