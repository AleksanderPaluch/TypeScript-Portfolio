import Links from "../Links/Links";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import React from "react"


const Header = ({ setIsPolish, isPolish }) => {
  return (
    <div className="bg-base fixed top-0 z-20 flex w-[90%] items-center justify-between px-4 py-2 backdrop-blur-3xl md:w-[94%] lg:w-[97%]">
      <div>
        <Links />
      </div>
      <div className="flex items-center gap-2">
        {/* Language Toggle Button */}
        <button
          onClick={() => setIsPolish(!isPolish)}
          className="btn-ghost btn-sm rounded-sm"
        >
          {isPolish ? (
            <img
              className="w-6"
              src="../../assets/Flag_of_the_United_Kingdom_(3-5).svg"
              alt="English Flag"
            />
          ) : (
            <img
              className="w-6 border-[1px] border-zinc-700"
              src="../../assets/Flag_of_Poland.svg"
              alt="Polish Flag"
            />
          )}
        </button>

        {/* Resume Button */}
        <button
          onClick={() =>
            window.open(
              isPolish
                ? "../../assets/Paluch_FULLSTACK_CV.pdf"
                : "../../assets/Palyukh_FULLSTACK_CV.pdf",
              "_blank"
            )
          }
          className="btn btn-primary btn-sm min-w-[150px] rounded-sm text-xl text-white"
        >
          {isPolish ? "Moje CV" : "My Resume"}
        </button>

        {/* Theme Button */}
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Header;
