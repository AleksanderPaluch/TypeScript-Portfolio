import { Dispatch, SetStateAction } from "react";

export interface iPolish {
    isPolish: boolean;
  }
  
  
export interface iPolishHeader {
    isPolish: boolean;
    setIsPolish: React.Dispatch<React.SetStateAction<boolean>>;
  }
  



  export  interface iProject {
    isPolish: boolean;
    modalContent: React.ReactNode;
    projectLink: string;
    description: string;
    imgSrc: string;
    title: string;
    code: string;
    tech: string[];
  }



  export interface iProjectModal extends Omit<iProject, "description"> {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

