import React from "react";
import Reveal from "../Reveal/Reveal";

interface iSectionHeader {
  title: string;
  side: "left" | "right"
}

const SectionHeader: React.FC<iSectionHeader> = ({ title, side = "left" }) => {

  return (
    <div
      className="mb-12 flex h-20 items-center gap-8 pt-20"
      style={{ flexDirection: side === "left" ? "row-reverse" : "row" }}
    >
      <div className="h-[1px] mt-4 lg:mt-10 z-50 w-full bg-neutral"></div>

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
