import { useState, useEffect } from "react"; 
import SharedSectionContainer from "../components/ui/SharedSectionContainer";
import { portfolioData } from "../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

const CertificationsSection = ({ onCategoryChange }: { onCategoryChange: (c: string) => void }) => {
  const [isZoomed, setIsZoomed] = useState<string | null>(null);


  useEffect(() => {
    if (isZoomed) {

      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Prevents mobile touch interaction
    } else {
      // Re-enable everything
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    }


    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "auto";
    };
  }, [isZoomed]);

  return (
    <>
      <SharedSectionContainer 
        category="CERTIFICATIONS" 
        data={portfolioData["CERTIFICATIONS"]} 
        themeColor="green"
        onCategoryChange={onCategoryChange}
      >
        {(item) => (
          <div className="w-full h-full p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            <div className="w-full md:w-[40%] flex flex-col justify-center items-start space-y-6 md:space-y-10">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-green-500/50" />
                <span className="text-[10px] text-green-400 font-bold tracking-[0.5em] uppercase">
                  {item.tag || "Verification"}
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.85] drop-shadow-2xl">
                  {item.title}
                </h2>
                <p className="text-white/40 text-sm md:text-base font-light max-w-sm leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
            <div className="flex-1 w-full md:w-[55%] h-full relative flex items-center justify-center">
              {/* Decorative Glow */}
              <div className="absolute w-[90%] h-[90%] bg-green-500/10 blur-[130px] rounded-full animate-pulse" />

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative w-full aspect-[16/10] max-w-[700px] group"
              >
                <div 
                  onClick={() => item.image && setIsZoomed(item.image)}
                  className="relative w-full h-full rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl flex items-center justify-center cursor-zoom-in active:scale-[0.98] transition-transform"
                >
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    />
                  ) : (
                    <div className="opacity-20 uppercase font-black tracking-widest text-[10px]">No Preview Available</div>
                  )}

                  <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-green-500/40 opacity-70" />
                  <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-green-500/40 opacity-70" />
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                        <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">Expand View</span>
                     </div>
                  </div>
                </div>

                {item.date && (
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-5 -left-5 md:-left-10 p-4 px-6 bg-black/95 border border-white/10 backdrop-blur-3xl rounded-xl shadow-xl z-20 pointer-events-none"
                  >
                    <span className="block text-[8px] text-green-400 font-bold uppercase tracking-widest">Certified</span>
                    <span className="text-sm text-white font-mono">{item.date}</span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </SharedSectionContainer>
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(null)}
            className="fixed inset-0 z-[9999] bg-transparent backdrop-blur-3xl flex items-center justify-center p-4 cursor-zoom-out pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(34,197,94,0.15)]"
              onClick={(e) => e.stopPropagation()} 
            >
              <img 
                src={isZoomed} 
                className="w-full h-full object-contain select-none"
                alt="Fullscreen Certification"
              />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/5">
                <p className="text-[9px] text-white/40 font-mono uppercase tracking-[0.2em]">Click outside to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificationsSection;