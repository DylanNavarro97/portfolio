const NavLinks = ({ toggleNavbar }) => {

  return (
    <>
      <a
        href="#"
        onClick={toggleNavbar}
        className="hover:text-fuchsia-500 text-xl"
      >
        Inicio
      </a>
      <a
        href="#aboutMe"
        onClick={toggleNavbar}
        className="hover:text-fuchsia-500 text-xl"
      >
        Sobre mi
      </a>
      <a
        href="#proyectos"
        onClick={toggleNavbar}
        className="hover:text-fuchsia-500 text-xl"
      >
        Proyectos
      </a>
      <a
        href="#"
        onClick={toggleNavbar}
        className="hover:text-fuchsia-500 text-xl"
      >
        Habilidades
      </a>
      <a
        href="#"
        onClick={toggleNavbar}
        className="hover:text-fuchsia-500 text-xl"
      >
        Contacto
      </a>
    </>
  );
};

export default NavLinks;
