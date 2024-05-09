import Github from "./svg/Github";
import Linkedin from "./svg/Linkedin";
import MoonSVG from "./svg/MoonSVG";
import SunSVG from "./svg/SunSVG";

const LinksHeader = ({darkMode, changeTheme}) => {
  return (
    <div className={`${darkMode ? "dark" : "light"} flex w-full h-20 py-5 inset-0 bg-purple-100 backdrop-filter backdrop-blur-lg bg-opacity-50 shadow-lg ${darkMode && "purple-1100"}`}>
      <div className="w-full justify-center items-center flex ">
        <div className="flex space-x-10 mx-auto">
          <a href="https://github.com/DylanNavarro97" target="_blank">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/dylan-navarro/" target="_blank">
            <Linkedin />
          </a>
        </div>

        <div className="absolute right-10">
        {darkMode ? <button onClick={changeTheme}><MoonSVG/></button> : <button onClick={changeTheme}><SunSVG /></button>}
        </div>
      </div>
    </div>
  );
};

export default LinksHeader;
