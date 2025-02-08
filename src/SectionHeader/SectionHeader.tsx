import Reveal from "../Reveal/Reveal";

const SectionHeader = ({ title, side = "left" }) => {

  return (
    <div
      className="mb-12 flex h-20 items-center gap-8"
      style={{ flexDirection: side === "left" ? "row-reverse" : "row" }}
    >
      <div className="h-[4px] z-50 w-full bg-neutral"></div>

      <h2 >
        <Reveal>
          <p className=" text-end min-w-32 md:min-w-48 py-2 text-3xl font-black md:text-5xl">
           {title}
            <span className="text-primary">.</span>
          </p>
        </Reveal>
      </h2>
    </div>
  );
};

export default SectionHeader;
