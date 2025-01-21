import { ImNewTab } from "react-icons/im";
import SectionHeader from "../SectionHeader/SectionHeader";
import Reveal from "../Reveal/Reveal";


const Education = ({isPolish}) => {
  return (
    <section id="education" className="section-wrapper" >
      <SectionHeader title={isPolish ? "Edukacja" : "Education"}  side="right" />
      <div className="grid grid-cols-1 gap-8 mb-44">
        <div className="row flex items-center justify-between">
          {" "}
          <div>
            <Reveal>
              {" "}
              <h4 className=" text-xl font-bold md:text-3xl">
                FULLSTACK Developer 
              </h4>
            </Reveal>
            <Reveal>
              {" "}
              <p className="flex gap-2 md:gap-4 items-center text-md font-semibold text-primary md:text-2xl">
                GoIT   <a
                  
                  href={"https://www.linkedin.com/in/aleksander-paluch-37145631a/overlay/1726432058018/single-media-viewer/?profileId=ACoAAFDeT4UBqdyYk67ZKSiZLv_4Yr1ZFh7ZC08"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImNewTab />
                </a>
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div>
              <p className="text-right md:text-2xl">{isPolish ? "Warszawa" : "Warsaw"} </p>
              <p className="text-right text-xs">10/2014 - 06/2019</p>
            </div>{" "}
          </Reveal>
        </div>

        <div className="flex items-center justify-between">
          {" "}
          <div className="w-[240px] md:w-fit">
            <Reveal>
              {" "}
              <h4 className="text-xl font-bold md:text-3xl">
              {isPolish ? "Magister Zarządzania" : (<>   Master&apos;s Degree in Management</>)} 
             
              </h4>
            </Reveal>
            <Reveal>
              {" "}
              <p className="text-md font-semibold text-primary md:text-2xl">
                Społeczna Akademia Nauk
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div>
              <p className="text-right md:text-2xl">{isPolish ? "Warszawa" : "Warsaw"} </p>
              <p  className="text-right text-xs md:text-lg">10/2014 - 06/2019</p>
            </div>{" "}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
