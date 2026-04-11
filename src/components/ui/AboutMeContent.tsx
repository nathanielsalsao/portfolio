import DropText from "./DropText";
import { BentoCard } from "./BentoGrid";
import profileImg from "../../assets/Profile/nathan.png";

export const AboutMeContent = () => {
  const techStack = ["React", "TS", "GSAP", "Tailwind", "Node"];

  return (
    <>

      <BentoCard className="md:col-span-2 lg:col-span-3 lg:row-span-2 relative overflow-hidden p-6 md:p-10 lg:p-14 flex flex-col justify-center">
   
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.14),transparent_45%)] pointer-events-none" />

        <div className="relative z-10 mb-6 md:mb-8">
          <h3 className="text-white/40 font-bold tracking-[0.35em] uppercase text-[10px]">
            Frontend Developer
          </h3>
        </div>

        <h2
          className="
            relative z-10 font-black tracking-tighter leading-[0.9]
            text-[clamp(2.6rem,7vw,6.5rem)]
          "
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            NATHANIEL <br /> SALAO
          </span>
        </h2>


        <DropText
          text="I specialize in building modern web applications with smooth UI, interactive animations, and visually engaging experiences."
          highlightWords={["modern", "interactive", "animations"]}
          className="relative z-10 text-white/60 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mt-6"
        />
      </BentoCard>


      <BentoCard className="md:col-span-1 lg:col-span-1 lg:row-span-1 p-0 flex items-center justify-center bg-white/[0.02] overflow-hidden group min-h-[260px] md:min-h-[300px]">
        <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
          <div className="relative w-full h-full flex items-center justify-center">
            
   
            <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-white/5 blur-2xl opacity-60 group-hover:opacity-80 transition" />

            <img
              src={profileImg}
              className="
                relative z-10
                w-40 h-40
                sm:w-48 sm:h-48
                md:w-56 md:h-56
                lg:w-full lg:h-full
                object-cover rounded-full
                border-4 border-white/10
                shadow-2xl
                transition-transform duration-700 group-hover:scale-105
              "
            />
          </div>
        </div>
      </BentoCard>

<BentoCard className="md:col-span-1 lg:col-span-1 lg:row-span-1 p-6 md:p-8 lg:p-10 relative overflow-hidden group flex flex-col justify-between">


  <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />


  <div className="relative z-10 flex items-center justify-between mb-6">
    <h4 className="text-white/40 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em]">
      Mastered Stack
    </h4>

    <div className="h-[1px] flex-1 mx-4 bg-white/10" />

    <span className="text-white/20 text-[10px] tracking-widest">
      05 SKILLS
    </span>
  </div>


  <div className="relative z-10 grid grid-cols-2 gap-3 flex-1 content-center">

    {techStack.map((tech) => (
      <div
        key={tech}
        className="
          relative flex items-center justify-center
          px-3 py-3 md:py-4

          bg-white/5 backdrop-blur-md
          border border-white/10
          rounded-xl

          text-[10px] md:text-[11px]
          font-bold text-white/80

          transition-all duration-300
          hover:bg-white/10
          hover:border-white/30
          hover:text-white
          hover:scale-[1.03]
          hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]

          overflow-hidden
        "
      >
        {tech}


        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/10 to-transparent" />
      </div>
    ))}
  </div>


  <div className="relative z-10 mt-6 h-[2px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
</BentoCard>
    </>
  );
};