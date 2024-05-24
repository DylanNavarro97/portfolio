import "./header.css";
import { useState } from "react";
import navLogo from "../../assets/inicio/personalPic.png";
import MoonSVG from "../svg/MoonSVG";
import SunSVG from "../svg/SunSVG";
import NavLinks from "./NavLinks";
import Toggle from "../svg/Toggle";

const Header = ({ darkMode, changeTheme }) => {
  const [isOpen, setisOpen] = useState(false);
  let windowWidth = window.innerWidth
  const aboutMeSection = document.getElementById('aboutMe')
  const projectsSection = document.getElementById('projects')
  const skillsSection = document.getElementById('skills')
  const contactSection = document.getElementById('contact')

  window.addEventListener("resize", () => {
    if (window.innerWidth > 990 && isOpen === true) {
      setisOpen(!isOpen);
    }
    windowWidth = window.innerWidth
  });

  const toggleNavbar = () => {
    if (windowWidth < 991){
      setisOpen(!isOpen);
    }
  };

  const scrollTo = (sectionName, toggle) => {
    toggle()
    const scroll = (element) => {
      const sectionTop = element?.offsetTop
      window.scrollTo({
        top: sectionTop - 10,
        behavior: "smooth"
      })
    }

    let timer = 260;

    if (windowWidth < 991){
      timer = 260
    } else {
      timer = 0
    }

    setTimeout(() => {
      switch (sectionName)
    {
      case 'aboutMe':
        scroll(aboutMeSection)
        break
      case 'projects':
        scroll(projectsSection)
        break
      case 'skills':
        scroll(skillsSection)
        break
      case 'contact':
        scroll(contactSection)
        break
    }
    }, timer)
  }

  return (
    <header className={darkMode ? "dark" : "light"}>
      <nav className={`flex justify-between px-4 md:px-12 brandNameContainer shadow-md transition-all duration-500  ${isOpen ? (darkMode ? "shadow-blue-300" : "shadow-purple-400") : ""} ${darkMode ? "purple-1100 text-white" : "bg-purple-100"}`}>
        <a className="flex items-center py-3 gap-4 h-24" href="#">
          <div className="rounded-lg px-3 brandImgContainer">
            <img src={navLogo} alt="foto de Dylan Navarro" className="h-16" />
          </div>
          <p className="flex flex-wrap text-2xl text-indigo-900 dark:text-white">Dylan Navarro</p>
        </a>

        <div className={`${darkMode && "dark"} hidden lg:flex justify-between items-center gap-3`}>
          <NavLinks toggleNavbar={toggleNavbar} scrollTo={scrollTo}/>
          {darkMode ? <button onClick={changeTheme}><MoonSVG/></button> : <button onClick={changeTheme}><SunSVG /></button>}
        </div>

        <div className="lg:hidden flex items-center gap-3">
          {darkMode ? <button onClick={changeTheme}><MoonSVG/></button> : <button onClick={changeTheme}><SunSVG /></button>}
          <button onClick={toggleNavbar}> <Toggle /> </button>
        </div>
      </nav>
      
      <div className={`lg:hidden navMenuMob overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-50 ${isOpen ? "navMenuMobOpen" : "navMenuMobClosed"} ${darkMode && "purple-1000 text-white"} `} >
        <div className={`${darkMode && "dark"} flex flex-col items-center py-8 gap-3 border-b-2 border-purple-400 dark:border-y-blue-300`}>
          <NavLinks toggleNavbar={toggleNavbar} scrollTo={scrollTo}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
