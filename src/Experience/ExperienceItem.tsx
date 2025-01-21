import Reveal from "../Reveal/Reveal";


const ExperienceItem = ({
  isPolish,
  company,
  location,
  position,
  time,
  text,
  description,
}) => {
  return (
    <div>
      <div className="row flex items-center justify-between">
        <div>
          <Reveal>
            <p className="text-xl font-bold md:text-3xl">{company}</p>
          </Reveal>
          <Reveal>
            <p className="ttext-md font-semibold text-primary md:text-2xl">
              {position}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="my-2">
            <p className="text-right md:text-2xl">{isPolish ? "Warszawa" : "Warsaw"}</p>
            <p className="text-right text-xs md:text-lg">{time}</p>
          </div>
        </Reveal>
      </div>
      <Reveal>
        {" "}
        <p>{text}</p>
      </Reveal>

      <div className="my-4 lg:flex gap-4">{description}</div>
      <div className="h-[1px] w-full bg-neutral"></div>
    </div>
  );
};

export default ExperienceItem;
