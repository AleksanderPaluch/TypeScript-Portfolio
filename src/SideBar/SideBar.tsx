import { motion } from "framer-motion";
import SideBarLink from "./SideBarLink";
import { useEffect, useState } from "react";
import React from "react";
import { iPolish } from "../types"; 




const SideBar: React.FC<iPolish> = ({isPolish}) => {

  const [isSelected, setSelected] = useState<string>("")
 

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");
  
    const options = { threshold: 0.4 };
  
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    sections.forEach((section) => observer.observe(section));
  
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky left-0 top-0 z-20 flex h-screen flex-col items-center bg-base-300 gap-24 md:gap-[20px] lg:gap-14 pt-20 md:pt-6 lg:pt-24"
    >
      <span className=" absolute top-2 left-2 md:hidden lg:top-2 lg:left-3.5 text-2xl  font-bold md:text-4xl lg:block">
        A<span className="text-primary">.</span>{" "}
      </span>

      <SideBarLink value="about" href="#about" isSelected={isSelected} setSelected={setSelected}>
       {isPolish ? "O mnie" : "About"} 
      </SideBarLink>
      <SideBarLink value="education" href="#education" isSelected={isSelected} setSelected={setSelected}>
        Edu.
      </SideBarLink>
      <SideBarLink value="projects" href="#projects" isSelected={isSelected} setSelected={setSelected}>
      {isPolish ? "Projekty" : "Projects"}  
      </SideBarLink>
      <SideBarLink value="experience" href="#experience" isSelected={isSelected} setSelected={setSelected}>
      {isPolish ? "Dośw." : "Exp."}  
      </SideBarLink>
      <SideBarLink value="contact" href="#contact" isSelected={isSelected} setSelected={setSelected}>
      {isPolish ? "Kontakt" : "Contact"}  
      </SideBarLink>
    </motion.nav>
  );
};

export default SideBar;
