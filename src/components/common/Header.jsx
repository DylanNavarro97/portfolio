import "./header.css";
import { useState } from "react";
import navLogo from "../../assets/icon.png";
import MoonSVG from "../svg/MoonSVG";
import SunSVG from "../svg/SunSVG";

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

  const toggle = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        fill="currentColor"
        className="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    );
  };

  const navLinks = () => {
    return (
      <>
        <a
          href="#"
          onClick={toggleNavbar}
          className="hover:text-fuchsia-500 transition duration-200 ease-in-out"
        >
          Inicio
        </a>
        <a
          href="#"
          onClick={toggleNavbar}
          className="hover:text-fuchsia-500 transition duration-200 ease-in-out"
        >
          Sobre mi
        </a>
        <a
          href="#"
          onClick={toggleNavbar}
          className="hover:text-fuchsia-500 transition duration-200 ease-in-out"
        >
          Experiencia
        </a>
        <a
          href="#"
          onClick={toggleNavbar}
          className="hover:text-fuchsia-500 transition duration-200 ease-in-out"
        >
          Habilidades
        </a>
        <a
          href="#"
          onClick={toggleNavbar}
          className="hover:text-fuchsia-500 transition duration-200 ease-in-out"
        >
          Contacto
        </a>
      </>
    );
  };

  return (
    <header className="bg-slate-900 text-white">
      <nav className=" flex justify-between px-8 brandNameContainer">
        <div className="flex items-center py-3 gap-8 h-24">
          <div className="rounded-lg bg-slate-400 px-3 brandImgContainer">
            <img src={navLogo} alt="foto de Dylan Navarro" className="h-16" />
          </div>
          <p className="flex flex-wrap ">Dylan Navarro</p>
        </div>

        <div className="hidden md:flex justify-between items-center gap-3">
          {navLinks()}
          {darkMode ? <button onClick={changeTheme}><MoonSVG/></button> : <button onClick={changeTheme}><SunSVG /></button>}
        </div>

        <div className="md:hidden flex items-center gap-3">
          {darkMode ? <button onClick={changeTheme}><MoonSVG/></button> : <button onClick={changeTheme}><SunSVG /></button>}
          <button onClick={toggleNavbar}>{toggle()}</button>
        </div>
      </nav>
      
      <div className={`md:hidden navMenuMob ${isOpen ? "navMenuMobOpen" : "navMenuMobClosed"}`} >
        <div className="flex flex-col items-center py-4 gap-3 border-t-2 border-t-gray-500">
          {navLinks()}
        </div>
      </div>
    </header>
  );
};

export default Header;
