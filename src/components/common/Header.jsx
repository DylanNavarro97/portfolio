import "./header.css";
import { useState } from "react";
import navLogo from "../../assets/icon.png";
import MoonSVG from "../svg/MoonSVG";
import SunSVG from "../svg/SunSVG";
import NavLinks from "./NavLinks";
import Toggle from "../svg/Toggle";

const Header = ({ darkMode, changeTheme }) => {
  const [isOpen, setisOpen] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && isOpen === true) {
      setisOpen(!isOpen);
    }
  });

  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className={darkMode ? "dark" : "light"}>
      <nav className={`flex justify-between px-4 md:px-12 brandNameContainer ${darkMode && "border-neutral-100"}`}>
        <div className="flex items-center py-3 gap-4 h-24">
          <div className="rounded-lg bg-slate-400 px-3 brandImgContainer">
            <img src={navLogo} alt="foto de Dylan Navarro" className="h-16" />
          </div>
          <p className="flex flex-wrap text-2xl">Dylan Navarro</p>
        </div>

        <div className="hidden md:flex justify-between items-center gap-3">
          <NavLinks toggleNavbar={toggleNavbar}/>
          {darkMode ? <button onClick={changeTheme}><MoonSVG/></button> : <button onClick={changeTheme}><SunSVG /></button>}
        </div>

        <div className="md:hidden flex items-center gap-3">
          {darkMode ? <button onClick={changeTheme}><MoonSVG/></button> : <button onClick={changeTheme}><SunSVG /></button>}
          <button onClick={toggleNavbar}> <Toggle /> </button>
        </div>
      </nav>
      
      <div className={`md:hidden navMenuMob overflow-hidden ${isOpen ? "navMenuMobOpen" : "navMenuMobClosed"}`} >
        <div className="flex flex-col items-center py-4 gap-3 border-t-2 border-t-gray-500">
          <NavLinks toggleNavbar={toggleNavbar}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
