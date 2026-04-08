import Bg from "./components/bg";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import AboutMe from "./sections/AboutMe"; // Import the new slider
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Bg />
      </div>


      <div className="fixed top-0 left-0 w-full z-20 flex justify-center">
        <Navbar />
      </div>


      <div className="relative z-10 pt-32 pointer-events-none">

<div className="pointer-events-auto">
        <HeroSection />
</div>

  
        <AboutSection />

        <div className="pointer-events-auto" id="projects">
          <AboutMe />
        </div>
<div className="pointer-events-auto" id="contact">
  <ContactSection />

</div>

      </div>
    </div>
  );
} 