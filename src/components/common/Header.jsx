import { useState } from "react";
import navLogo from "../../assets/icon.png";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className="text-white text-lg">
      <nav className="bg-gray-800 flex justify-between px-8 flex-wrap">
        <div className="w-1/3 flex items-center py-3 gap-8">
          <div className="rounded-lg bg-slate-400 px-3">
            <img src={navLogo} alt="foto de Dylan Navarro" className="h-16" />
          </div>
          <p>Dylan Navarro</p>
        </div>

        <div className="hidden md:flex justify-between items-center gap-3">
          <a href="#">Inicio</a>
          <a href="#">Sobre mi</a>
          <a href="#">Experiencia</a>
          <a href="#">Habilidades</a>
          <a href="#">Contacto</a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <p>asd</p> : <p>Falso</p>}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
