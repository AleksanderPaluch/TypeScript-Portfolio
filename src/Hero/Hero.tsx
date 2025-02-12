import Reveal from "../Reveal/Reveal";
import React from "react";
import { iPolish } from "../types";


const Hero: React.FC<iPolish> = ({ isPolish }) => {
  return (
    <section id="hero" className="section-wrapper">
      <div className="min-h-[400px] overflow-hidden pb-36 pt-44 md:pb-0 md:pt-20 lg:pt-36">
        <Reveal>
          <h1 className="text-4xl font-semibold sm:text-6xl md:text-8xl">
            {isPolish ? "Cześć, tu Alex" : "Hi, I'm Alex"}
            <span className="text-primary">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="my-2 text-xl sm:text-2xl md:my-4 md:text-4xl">
            {isPolish ? "Jestem " : "I'm a"}{" "}
            <span className="font-bold text-primary">
              {" "}
              {isPolish ? "Full Stack Developerem" : "Full Stack Developer"}
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="font-italy max-w-xl leading-relaxed md:text-base md:leading-relaxed">
            {isPolish
              ? "Od 1,5 roku intensywnie zgłębiam tematykę web developmentu, tworząc projekty zarówno front-endowe, jak i back-endowe. Obecnie poszukuję swojej pierwszej roli jako deweloper, aby wykorzystać zdobyte umiejętności w praktyce! Chętnie nawiążę kontakt!"
              : " I've spent the last 1.5 years diving deep into web development, building both front-end and back-end projects. I'm now on the lookout to land my first developer role and bring those skills tolife! Let's connect!"}
          </p>
        </Reveal>
        <Reveal>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView();
            }}
            className="btn-s btn btn-outline btn-primary my-4 text-xl sm:btn-sm md:btn-md sm:text-xl"
          >
           {isPolish ? "Kontakt do mnie" : "Contact me"}
          </button>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
