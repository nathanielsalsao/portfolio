"use client";
import { motion } from "framer-motion";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import DropText from "../components/ui/DropText";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <SiGmail className="text-[#EA4335]" />,
      label: "Email",
      value: "nathanielsalao13@gmail.com",
      link: "mailto:nathanielsalao13@gmail.com",
    },
    {
      icon: <SiGithub className="text-white/80" />,
      label: "GitHub",
      value: "github.com/nathanielsalao",
      link: "https://github.com/nathanielsalsao",
    },
    {
      icon: <FaLinkedin className="text-[#0A66C2]" />,
      label: "LinkedIn",
      value: "Nathaniel Salao",
      link: "https://www.linkedin.com/in/nathaniel-salao-6a557a3a8/",
    },
    {
      icon: <FaFacebook className="text-[#1877F2]" />,
      label: "Facebook",
      value: "Nathaniel Salao",
      link: "https://www.facebook.com/nathaniel.salao.2024",
    },
  ];

  return (
    <section className="relative w-full min-h-screen py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center bg-transparent overflow-hidden">
      

      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_right,_rgba(168,85,247,0.15),transparent_50%)]" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-blue-400/80 font-mono tracking-[0.4em] uppercase text-[10px]">
              <DropText text="Available for opportunities" />
            </h3>
            
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.85]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 block">
                LET'S
              </span>
              <span className="text-blue-500 block">
                CONNECT
              </span>
            </h2>
          </div>

          <DropText 
            text="I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!"
            highlightWords={["opportunities", "collaborations", "inbox"]}
            className="text-white/40 text-lg md:text-xl max-w-md font-light leading-relaxed"
          />
        </motion.div>
        <div className="grid gap-5">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="
                group relative flex items-center justify-between
                p-7 md:p-9 rounded-[2.5rem] 
                bg-white/[0.01] backdrop-blur-3xl 
                border border-white/5 
                shadow-[0_8px_32px_rgba(0,0,0,0.37)] 
                hover:border-blue-500/30 hover:bg-white/[0.04]
                hover:shadow-[0_8px_40px_rgba(59,130,246,0.1)]
                transition-all duration-500 overflow-hidden
              "
            >
              <div className="flex items-center gap-7 relative z-10">
                <div className="text-5xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out">
                  {method.icon}
                </div>
                
                <div className="space-y-1">
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.25em]">
                    {method.label}
                  </p>
                  <p className="text-white/90 text-xl font-medium tracking-tight transition-colors duration-500 group-hover:text-blue-400">
                    {method.value}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 text-white/5 group-hover:text-blue-400 text-3xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;