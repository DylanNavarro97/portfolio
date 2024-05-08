import Github from "./svg/Github";
import Linkedin from "./svg/Linkedin";

const LinksHeader = () => {
  return (
    <div className="flex w-full justify-center items-center h-20 py-5 inset-0 bg-purple-100 backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-lg">
      <div className="flex space-x-10">
        <a href="https://github.com/DylanNavarro97" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/dylan-navarro/" target="_blank">
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default LinksHeader;
