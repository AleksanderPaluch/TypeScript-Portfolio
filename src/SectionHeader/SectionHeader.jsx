import Reveal from "../Reveal/Reveal";

const SectionHeader = ({ title, side = "left" }) => {
    console.log(title);
    console.log(side);
  return (
    
    <div
      className="mb-12 flex items-center gap-8"
      style={{ flexDirection: side === "left" ? "row-reverse" : "row" }}
    >
      <div className="h-[1px] w-full bg-neutral"></div>

      <h2>
        <Reveal>
          <span className="text-end text-3xl font-black md:text-5xl">
            {title}
            <span className="text-primary">.</span>
          </span>
        </Reveal>
      </h2>
    </div>
  );
};

export default SectionHeader;
