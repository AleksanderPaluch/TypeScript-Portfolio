import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { ImNewTab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Reveal from "../Reveal/Reveal";
import ProjectModal from "./ProjectModal";


const Project = ({
  isPolish,
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  });

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-base-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsOpen(true)}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: isHovered ? "90%" : " 87%",
              rotate: isHovered ? "2deg" : "-1deg",
            }}
            className="absolute bottom-0 left-1/2 w-[85%] -translate-x-1/2 translate-y-[7%] rounded-sm transition-all"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Reveal width="w-full">
            <div className="flex items-center gap-2">
              <h4 className="min-w-fit text-2xl font-bold">{title}</h4>
              <div className="h-[1px] w-full bg-neutral"></div>
              <div className="flex items-center gap-2 text-lg">
                <a
                  className="transition-colors hover:text-primary"
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="transition-colors hover:text-primary"
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImNewTab />
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal>
          <p className="w-full text-justify text-sm font-semibold text-primary">
            {tech.join(" - ")}
          </p>
          </Reveal>
          
          <Reveal>
          <p className="text-sm">
            {description}{" "}
            <span
              onClick={() => setIsOpen(true)}
              className="cursor-pointer text-primary font-semibold"
            >
              Learn More {">"}
            </span>
          </p>
          </Reveal>
        
        </div>
      </motion.div>
      <ProjectModal
      isPolish={isPolish}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalContent={modalContent}
        projectLink={projectLink}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};

export default Project;
