const NavLinks = ({ toggleNavbar, scrollTo }) => {

  return (
    <>
      <a
        onClick={toggleNavbar}
        href="#"
        className="hover:text-fuchsia-500 text-xl cursor-pointer"
      >
        Inicio
      </a>
      <a
        onClick={(e) => scrollTo('aboutMe', toggleNavbar)}
        className="hover:text-fuchsia-500 text-xl cursor-pointer"
      >
        Sobre mi
      </a>
      <a
        onClick={(e) => scrollTo('projects', toggleNavbar)}
        className="hover:text-fuchsia-500 text-xl cursor-pointer"
      >
        Proyectos
      </a>
      <a
        onClick={(e) => scrollTo('skills', toggleNavbar)}
        className="hover:text-fuchsia-500 text-xl cursor-pointer"
      >
        Habilidades
      </a>
      <a
        onClick={(e) => scrollTo('contact', toggleNavbar)}
        className="hover:text-fuchsia-500 text-xl cursor-pointer"
      >
        Contacto
      </a>
    </>
  );
};

export default NavLinks;
