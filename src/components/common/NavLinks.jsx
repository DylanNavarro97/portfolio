const NavLinks = ({ toggleNavbar, scrollTo }) => {

  return (
    <>
      <a
        onClick={toggleNavbar}
        href="#"
        className="hover:text-fuchsia-500 text-xl"
      >
        Inicio
      </a>
      <a
        onClick={(e) => scrollTo('aboutMe', toggleNavbar)}
        className="hover:text-fuchsia-500 text-xl"
      >
        Sobre mi
      </a>
      <a
        onClick={(e) => scrollTo('projects', toggleNavbar)}
        className="hover:text-fuchsia-500 text-xl"
      >
        Proyectos
      </a>
      <a
        onClick={(e) => scrollTo('skills', toggleNavbar)}
        className="hover:text-fuchsia-500 text-xl"
      >
        Habilidades
      </a>
      <a
        onClick={(e) => scrollTo('contact', toggleNavbar)}
        className="hover:text-fuchsia-500 text-xl"
      >
        Contacto
      </a>
    </>
  );
};

export default NavLinks;
