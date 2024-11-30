import { FaGithub, FaLinkedin } from "react-icons/fa";


const Links = () => {
  return (
    <div className="flex items-center text-lg gap-4">
      <a
      className="hover:text-primary transition-colors"
       
        href="https://github.com/AleksanderPaluch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
       className="hover:text-primary transition-colors"
        href="https://www.linkedin.com/in/aleksander-paluch-37145631a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      
    </div>
  );
};

export default Links;
