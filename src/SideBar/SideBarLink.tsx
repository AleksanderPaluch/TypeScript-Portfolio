import { motion } from "framer-motion";
import React from "react";

type SideBarLinkValue = "about" | "education" | "projects" | "experience" | "contact";

interface ISideBarLink {
  value: SideBarLinkValue;
  href: string;
  children: React.ReactNode;
  isSelected: SideBarLinkValue;
  setSelected: React.Dispatch<React.SetStateAction<SideBarLinkValue>>;
}

const SideBarLink: React.FC<ISideBarLink> = ({ value, href, children, isSelected, setSelected }) => {
  return (
    <motion.div initial={{ x: -70 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
      <a
        style={{ rotate: "90deg" }}
        className={`btn btn-ghost btn-sm w-24 rounded-none text-base min-w-20 md:min-w-[82px] lg:min-w-[100px] md:btn-md md:w-min lg:text-xl ${
          isSelected === value ? "border-t-4 border-t-primary bg-neutral text-white" : "border-transparent"
        }`}
        href={href}
        onClick={() => setSelected(value)}
      >
        {children}
      </a>
    </motion.div>
  );
};

export default SideBarLink;
