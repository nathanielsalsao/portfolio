import { useState } from "react";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import CertificationsSection from "./CertificationsSection";

const AboutMe = () => {
  const [category, setCategory] = useState("TECH STACK");

  const renderSection = () => {
    switch (category) {
      case "TECH STACK":

        return <TechStackSection onCategoryChange={setCategory} />;
      case "PROJECTS":
        return <ProjectsSection onCategoryChange={setCategory} />;
      case "CERTIFICATIONS":
        return <CertificationsSection onCategoryChange={setCategory} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-6">
      {renderSection()}
    </section>
  );
};

export default AboutMe;