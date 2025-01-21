import { useState } from "react";

import Education from "./Education/Education.js";
import About from "./About/About.js";
import Contact from "./Contact/Contact.js";
import Experience from "./Experience/Experience.js";
import Header from "./Header/Header.js";
import Hero from "./Hero/Hero.js";
import Projects from "./Projects/Projects.js";
import SideBar from "./SideBar/SideBar.js";


function App() {

  const [isPolish, setIsPolish] = useState(false)



  return (
    <>
      <div className="grid grid-cols-[34px_1fr] md:grid-cols-[54px_1fr]">
      
        <SideBar isPolish={isPolish} />
      
        <main>
          <Header setIsPolish={setIsPolish} isPolish={isPolish}/>
          <div className="mx-auto max-w-5xl space-y-32 px-4 pb-24 md:px-8">
            <Hero isPolish={isPolish} />
            <About isPolish={isPolish}/>
            <Education isPolish={isPolish} />
            <Projects isPolish={isPolish} />
            <Experience isPolish={isPolish} />
            <Contact isPolish={isPolish} />
         
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
