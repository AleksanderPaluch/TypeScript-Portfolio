import { useState } from "react";
import Education from "./Education/Education";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import SideBar from "./SideBar/SideBar";

const App: React.FC = () => {
  const [isPolish, setIsPolish] = useState<boolean>(false);

  return (
    <>
      <div className="grid grid-cols-[34px_1fr] md:grid-cols-[54px_1fr]">
        <SideBar isPolish={isPolish} />
        <main>
          <Header setIsPolish={setIsPolish} isPolish={isPolish} />
          <div className="mx-auto max-w-5xl space-y-32 px-4 pb-24 md:px-8">
            <Hero isPolish={isPolish} />
            <About isPolish={isPolish} />
            <Education isPolish={isPolish} />
            <Projects isPolish={isPolish} />
            <Experience isPolish={isPolish} />
            <Contact isPolish={isPolish} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
