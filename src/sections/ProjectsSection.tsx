import SharedSectionContainer from "../components/ui/SharedSectionContainer";
import { portfolioData } from "../data/portfolioData";

const ProjectsSection = ({ onCategoryChange }: { onCategoryChange: (c: string) => void }) => {
  return (
    <SharedSectionContainer 
      category="PROJECTS" 
      data={portfolioData["PROJECTS"]} 
      themeColor="blue"
      onCategoryChange={onCategoryChange}
    >
      {(item, index) => (
        <div className="w-full h-full p-10 md:p-20 flex flex-col md:flex-row items-center gap-10 md:gap-20">
      
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] text-blue-400 font-black tracking-[0.4em] uppercase opacity-60">
                Project / 0{index + 1}
              </span>
              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
                {item.title}
              </h2>
            </div>
            
            <p className="text-white/40 text-lg md:text-2xl leading-relaxed max-w-xl font-light">
              {item.desc}
            </p>

            <div className="flex items-center gap-4">
               <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/[0.05] text-xs text-blue-300 font-mono italic uppercase tracking-[0.2em]">
                 {item.tag}
               </div>
               
               {item.link && (
                 <span className="text-[10px] text-white/20 font-mono uppercase tracking-widest">
                   Click image to visit ↗
                 </span>
               )}
            </div>
          </div>
          <a 
            href={item.link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`w-full md:w-[45%] aspect-video rounded-[2.5rem] md:rounded-[3.5rem] bg-white/[0.03] border border-white/5 flex items-center justify-center relative overflow-hidden shadow-2xl group ${!item.link ? 'pointer-events-none' : 'cursor-pointer'}`}
          >
              {item.image ? (
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
              />
            ) : (
              <span className="relative z-10 text-white/5 font-black italic tracking-tighter text-4xl md:text-6xl uppercase select-none">
                Preview
              </span>
            )}

             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
               <span className="text-white font-black italic uppercase tracking-tighter text-2xl border-b-2 border-blue-500">
                 View Live Project
               </span>
            </div>
          </a>
        </div>
      )}
    </SharedSectionContainer>
  );
};

export default ProjectsSection;