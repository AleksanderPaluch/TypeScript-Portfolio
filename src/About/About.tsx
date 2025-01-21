import { MdOutlineArrowRightAlt } from "react-icons/md";
import SectionHeader from "../SectionHeader/SectionHeader";
import Reveal from "../Reveal/Reveal";
import Links from "../Links/Links";
import Technologies from "./Technologies";






const About = ({ isPolish }) => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title={isPolish ? "O mnie" : "About"} side="left" />
      <div className="prose grid grid-cols-1 gap-8 prose-p:my-2 md:grid-cols-[1fr_300px]">
        <div className="">
          <Reveal>
            <p>
              <span className="float-left mr-1 rounded bg-primary px-3 py-2 text-2xl font-bold text-zinc-100">
                {isPolish ? "Hej" : "Hey!"}
              </span>
              {isPolish
                ? "Jestem Alex, jestem szefem sushi, który zmienił ścieżkę kariery na frontend developera. Mieszkam w Warszawie i specjalizuję się w tworzeniu intuicyjnych oraz estetycznych stron, głównie z wykorzystaniem Reacta, ale zawsze z entuzjazmem odkrywam najlepsze narzędzia do realizacji danego zadania."
                : "I'm Alex, a chef turned frontend developer. Based in Warsaw, I specialize in building easy-to-use and aesthetically pleasinguser interfaces, primarily using React, but I'm always excited to explore the best tools for the job."}
            </p>
          </Reveal>
          <Reveal>
            <p>
              {isPolish ? (
                <>
                  Chociaż jeszcze nie mam formalnego, komercyjnego doświadczenia
                  w developmentcie, mam za sobą{" "}
                  <strong className="text-xl font-bold">dekadę</strong>{" "}
                  różnorodnego doświadczenia zawodowego w wielu dziedzinach.
                </>
              ) : (
                <>
                  While I don&apos;t have formal, commercial experience in
                  front-end development yet, I bring a{" "}
                  <strong className="text-xl font-bold">decade</strong> of
                  diverse professional experience across multiple fields.
                </>
              )}
            </p>
          </Reveal>
          <Reveal>
            <blockquote className="text-2xl">
              {isPolish
                ? "„Jeśli coś robić, to robić dobrze.”"
                : "“How you do anything is how you do everything”"}
            </blockquote>
            <p>
              {isPolish ? (
                <>
                  Już raz osiągnąłem mistrzostwo w jednej dyscyplinie, pracując
                  w Nobu i opanowując sztukę bycia szefem kuchni. Teraz z tą
                  samą determinacją i skupieniem wkraczam w świat programowania,
                  by stać się najlepszym również w tej dziedzinie.
                </>
              ) : (
                <>
                  I&apos;ve already become the best in one discipline, working
                  at Nobu and mastering the art of being a chef. Now, I&apos;m
                  bringing that same focus and dedication to programming, aiming
                  to become the best in this field too.
                </>
              )}
            </p>
          </Reveal>
          <Reveal>
            <p>
              {isPolish ? (
                <>
                  Kiedy nie programuję (a zajmuje to większość mojego czasuP
                  wolnego!), lubię grać w szachy, ćwiczyć jiu-jitsu i
                  podróżować. Zawsze jestem gotów na wyzwanie, niezależnie czy
                  to na szachownicy, na macie, czy w podróży.
                </>
              ) : (
                <>
             
                  When I&apos;m not programming (which is most of my free
                  time!), I enjoy playing chess, practicing jiu-jitsu, and
                  traveling. I&apos;m always up for a challenge, whether
                  it&apos;s on the chessboard, the mat, or the road.
                </>
              )}
            </p>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-primary">
                {isPolish ? "Moje linki" : "My links"}
             
                <span>
               
                  <MdOutlineArrowRightAlt />
                </span>
              </p>

              <Links />
            </div>
          </Reveal>
        </div>
        <div>
          <Technologies isPolish={isPolish} />
        </div>
      </div>
    </section>
  );
};

export default About;
