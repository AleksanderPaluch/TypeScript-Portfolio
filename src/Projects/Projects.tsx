import SectionHeader from "../SectionHeader/SectionHeader";
import { iPolish } from "../types";
import Project from "./Project";
import React from "react";


const projects = [
  {
    title: "AquaTrack",
    imgSrc: "../../assets/aquatrack.png",
    code: "https://github.com/AleksanderPaluch/water-tracker-app",
    projectLink: "https://water-tracker-app.vercel.app/",
    tech: [
      "React",
      "Redux",
      "Node",
      "Express.js",
      "JWT",
      "OAuth",
      "MongoDB",
      "Heroku",
    ],
    description:
      "AquaTrack is a simple and intuitive app designed to help you monitor and manage your daily water intake.",
    descriptionPl:
      "AquaTrack to prosta i intuicyjna aplikacja zaprojektowana, aby pomóc Ci monitorować i zarządzać codziennym spożyciem wody.",
    modalContent: (
      <>
        <p>
          AquaTrack is an easy-to-use app that helps you track your daily water
          intake. It provides a seamless way to log your hydration and stay on
          top of your health goals.
        </p>
        <p>
          AquaTrack&apos;s front-end is built using <strong>React</strong>,
          allowing for a dynamic and responsive user interface.{" "}
          <strong>Redux</strong> is employed for efficient state management,
          ensuring smooth data flow and a consistent experience across the app.
        </p>
        <p>
          AquaTrack&apos;s backend is built with <strong>Node.js</strong> and{" "}
          <strong>Express.js</strong>, offering a fast and scalable server
          environment for handling user requests and managing hydration data.
        </p>
        <p>
          For user authentication, AquaTrack leverages <strong>JWT</strong> and{" "}
          <strong>Google OAuth</strong>, ensuring secure login and easy access.{" "}
          <strong>MongoDB</strong> serves as the database for storing user
          profiles and hydration logs, while <strong>Heroku</strong> is used for
          seamless cloud deployment, ensuring reliable and scalable performance.
        </p>
      </>
    ),
    modalContentPl: (
      <>
        <p>
          AquaTrack to łatwa w obsłudze aplikacja, która pomaga śledzić dzienne
          spożycie wody. Zapewnia wygodny sposób rejestrowania nawodnienia i
          monitorowania celów zdrowotnych.
        </p>
        <p>
          Front-end AquaTrack został zbudowany przy użyciu{" "}
          <strong>React</strong>, co pozwala na dynamiczny i responsywny
          interfejs użytkownika. <strong>Redux</strong> jest wykorzystywany do
          efektywnego zarządzania stanem aplikacji, zapewniając płynny przepływ
          danych i spójną obsługę aplikacji.
        </p>
        <p>
          Back-end AquaTrack został stworzony przy użyciu{" "}
          <strong>Node.js</strong> i <strong>Express.js</strong>, oferując
          szybkie i skalowalne środowisko serwerowe do obsługi zapytań
          użytkowników oraz zarządzania danymi o nawodnieniu.
        </p>
        <p>
          Do uwierzytelniania użytkowników AquaTrack wykorzystuje{" "}
          <strong>JWT</strong> oraz <strong>Google OAuth</strong>, zapewniając
          bezpieczne logowanie i łatwy dostęp. <strong>MongoDB</strong> pełni
          rolę bazy danych do przechowywania profili użytkowników oraz zapisów o
          nawodnieniu, a <strong>Heroku</strong> jest używane do bezproblemowego
          wdrożenia w chmurze, zapewniając niezawodność i skalowalność
          wydajności.
        </p>
      </>
    ),
  },
  {
    title: "GenAI Guide",
    titlePl: "GenAI Przewodnik",
    imgSrc: "../../assets/GenAI.png",
    code: "https://github.com/AleksanderPaluch/delab-2",
    projectLink: "https://delab-2.vercel.app/",
    tech: [
      "Framer-motion",
      "Intersection-observer",
      "Lazy",
      "Recharts",
      "Tailwind",
    ],
    description:
      "A Guide to Safe and Conscious Use of AI: Principles, Ethical Challenges, and Practical Tips for Students and Educators",
    descriptionPl:
      "Przewodnik po bezpiecznym i świadomym korzystaniu z AI, obejmujący zasady, etyczne wyzwania oraz praktyczne wskazówki dla studentów i wykładowców",
    modalContent: (
      <>
        <p>
          A Guide to Safe and Conscious Use of AI: Principles, Ethical
          Challenges, and Practical Tips for Students and EducatorsP
        </p>
        <p>
          I built my GenAI guide webpage using <strong>Framer Motion</strong> to
          add smooth animations and interactive transitions, making the design
          more engaging. I also used the <strong>Intersection Observer</strong>{" "}
          to detect when elements entered the screen, triggering animations and
          improving the user experience.
        </p>
        <p>
          To optimize performance, I implemented <strong>Lazy loading</strong>,
          ensuring images and components loaded only when needed. For
          visualizing data, I used
          <strong> Recharts</strong> to create clear, responsive charts that
          make complex GenAI concepts easier to understand. These tools helped
          create a fast, interactive, and visually appealing site.
        </p>
      </>
    ),
    modalContentPl: (
      <>
        <p>
          Przewodnik po bezpiecznym i świadomym korzystaniu z AI, obejmujący
          zasady, etyczne wyzwania oraz praktyczne wskazówki dla studentów i
          wykładowców
        </p>
        <p>
          Stworzyłem stronę przewodnika GenAI, używając{" "}
          <strong>Framer Motion</strong> do dodania płynnych animacji i
          interaktywnych przejść, co sprawia, że projekt jest bardziej
          angażujący. Użyłem również <strong>Intersection Observer</strong>, aby
          wykrywać, kiedy elementy pojawiają się na ekranie, wyzwalając animacje
          i poprawiając doświadczenie użytkownika.
        </p>
        <p>
          Aby zoptymalizować wydajność, zaimplementowałem{" "}
          <strong>Lazy loading</strong>, zapewniając, że obrazy i komponenty
          ładowały się tylko wtedy, gdy były potrzebne. Do wizualizacji danych
          użyłem <strong>Recharts</strong>, aby tworzyć czytelne, responsywne
          wykresy, które ułatwiają zrozumienie złożonych koncepcji GenAI. Te
          narzędzia pomogły stworzyć szybki, interaktywny i estetyczny serwis.
        </p>
      </>
    ),
  },
  // {
  //   title: "Plus+Pack",
  //   imgSrc: "../../assets/aquatrack.png",
  //   code: "https://github.com/AleksanderPaluch/water-tracker-app",
  //   projectLink: "https://water-tracker-app.vercel.app/",
  //   tech: [
  //     "React",
  //     "Redux",
  //     "Node",
  //     "Express.js",
  //     "JWT",
  //     "Google OAuth",
  //     "MongoDB",
  //     "Heroku",
  //   ],
  //   description:
  //     "AquaTrack is a simple and intuitive app designed to help you monitor and manage your daily water intake.",
  //   modalContent: (
  //     <>
  //       <p>
  //         AquaTrack is an easy-to-use app that helps you track your daily water
  //         intake. It provides a seamless way to log your hydration and stay on
  //         top of your health goals.
  //       </p>
  //       <p>
  //         AquaTrack&apos;s front-end is built using React, allowing for a
  //         dynamic and responsive user interface. Redux is employed for efficient
  //         state management, ensuring smooth data flow and a consistent
  //         experience across the app.
  //       </p>
  //       <p>
  //         AquaTrack&apos;s backend is built with Node.js and Express.js,
  //         offering a fast and scalable server environment for handling user
  //         requests and managing hydration data.
  //       </p>
  //       <p>
  //         For user authentication, AquaTrack leverages JWT and Google OAuth,
  //         ensuring secure login and easy access. MongoDB serves as the database
  //         for storing user profiles and hydration logs, while Heroku is used for
  //         seamless cloud deployment, ensuring reliable and scalable performance.
  //       </p>
  //     </>
  //   ),
  // },
];

const Projects: React.FC<iPolish> = ({ isPolish }) => {
  return (
    <section id="projects" className="section-wrapper">
      <SectionHeader title={isPolish ? "Projekty" : "Projects"} side="left" />
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => {
          return (
            <Project

              key={project.title}
              isPolish={isPolish}
              title={isPolish ? project.titlePl ?? "" : project.title ?? ""}
              imgSrc={project.imgSrc}
              code={project.code}
              projectLink={project.projectLink}
              tech={project.tech}
              description={
                isPolish ? project.descriptionPl ?? "" : project.description ?? ""
              }
              modalContent={
                isPolish ? project.modalContentPl : project.modalContent
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
