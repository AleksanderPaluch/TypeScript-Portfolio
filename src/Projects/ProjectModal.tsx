import  { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import React from "react";
import { iProjectModal } from "../types";

const ProjectModal: React.FC<iProjectModal> = ({
  isPolish,
  isOpen,
  setIsOpen,
  modalContent,
  projectLink,
  imgSrc,
  title,
  code,
  tech,
}) => {

  
    useEffect(() => {
        const body = document.querySelector("body");
    
        if (isOpen) {
          body.style.overflowY = "hidden";
        } else {
          body.style.overflowY = "scroll";
        }
      }, [isOpen]);



  if (!isOpen) return <></>;

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex cursor-pointer justify-center overflow-y-scroll bg-zinc-950/50 px-4 py-12 backdrop-blur"
      >
        <button className="right-2 top-2 btn-circle btn-outline btn-primary btn-sm absolute md:right-6 md:top-6 lg:right-20 lg:top-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className="z-100 h-fit w-full max-w-2xl cursor-auto overflow-hidden rounded-xl bg-base-100 shadow-xl"
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            className="rounded-t-xl"
          />
          <div className="grid col-span-1 gap-4 p-4 md:p-6">
            <h4 className="text-4xl font-bold">{title}</h4>
            <p className="text-lg font-semibold text-primary">
              {tech.join(" - ")}
            </p>
            <div className="text-md grid col-span-1  gap-2">{modalContent}</div>
            <p className="text-2xl font-bold ">{isPolish ? "Linki do projektu" : "Project Links"}<span className="text-primary">.</span> </p>
            <div className="flex items-center gap-6 text-lg ">
              <a
                 className="flex items-center gap-2 no-underline transition-colors hover:text-primary text-lg"
                href={code}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span>
                  {" "}
                  <FaGithub />
                </span>{" "}
                Source Code
              </a>
              <a
                className="flex items-center gap-2 no-underline transition-colors hover:text-primary text-lg"
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  {" "}
                  <ImNewTab />
                </span>{" "}
                Live Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
