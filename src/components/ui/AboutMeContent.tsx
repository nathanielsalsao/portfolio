import DropText from "./DropText";
import { BentoCard } from "./BentoGrid";
import profileImg from "../../assets/Profile/nathan.png"; 

export const AboutMeContent = () => {
  const techStack = ["React", "TS", "GSAP", "Tailwind", "Node"];

  return (
    <>
   
      <BentoCard className="md:col-span-2 lg:col-span-3 lg:row-span-2 justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.12),transparent_40%)] pointer-events-none" />
        <div className="flex items-center gap-3 mb-8 relative z-10">
          <h3 className="text-white/50 font-bold tracking-[0.3em] uppercase text-[10px]">
            Frontend Developer
          </h3>
        </div>

        <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] relative z-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            NATHANIEL <br /> SALAO
          </span>
        </h2>

        <DropText
          text="I specialize in building modern web applications with smooth UI, interactive animations, and visually engaging experiences."
          highlightWords={["modern", "interactive", "animations"]}
          className="text-white/60 text-xl md:text-2xl leading-relaxed max-w-2xl relative z-10"
        />
      </BentoCard>

      
      <BentoCard className="md:col-span-1 lg:col-span-1 lg:row-span-1 p-0 flex items-center justify-center bg-white/[0.01] overflow-hidden group">
        <div className="absolute inset-0 transition-all duration-1000 scale-110 group-hover:scale-100 flex items-center justify-center p-8">
          <img
            src={profileImg} 
            className="w-full h-full object-cover rounded-full border-4 border-white/5 shadow-inner"
          />
        </div>
      </BentoCard>

      <BentoCard className="md:col-span-1 lg:col-span-1 lg:row-span-1 justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.05),transparent_40%)] pointer-events-none" />
        <h4 className="text-white/40 text-[11px] font-black uppercase tracking-[0.2em] mb-6 relative z-10">
          Mastered Stack
        </h4>
        <div className="flex flex-wrap gap-2.5 relative z-10">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[11px] font-bold text-white/80 hover:text-[#FACC15] hover:border-[#FACC15]/50 transition-all cursor-default whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </BentoCard>
    </>
  );
};