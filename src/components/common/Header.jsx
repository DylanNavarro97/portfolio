import './header.css'
import { useState } from "react";
import navLogo from "../../assets/icon.png";
import toggleIcon from "../../assets/list.svg";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isOpen === true){
        setisOpen(!isOpen)
    }
  })

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

  return (
    <header className="bg-gray-800 text-white text-lg">
      <nav className=" flex justify-between px-8">
        <div className="flex items-center py-3 gap-8 h-24">
          <div className="rounded-lg bg-slate-400 px-3 brandImgContainer">
            <img src={navLogo} alt="foto de Dylan Navarro" className="h-16" />
          </div>
          <p className="flex flex-wrap">Dylan Navarro</p>
        </div>

        <div className="hidden md:flex justify-between items-center gap-3">
          <a href="#">Inicio</a>
          <a href="#">Sobre mi</a>
          <a href="#">Experiencia</a>
          <a href="#">Habilidades</a>
          <a href="#">Contacto</a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar}>{toggle()}</button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-4">
          <a href="#">Inicio</a>
          <a href="#">Sobre mi</a>
          <a href="#">Experiencia</a>
          <a href="#">Habilidades</a>
          <a href="#">Contacto</a>
        </div>
      )}
    </header>
  );
};

export default Header;
