import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Principal from "./components/Principal/Principal";
import LinksHeader from "./components/LinksHeader";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  const sessionTheme = JSON.parse(sessionStorage.getItem("theme"));
  const [darkMode, setDarkMode] = useState(false);
  const [aboveVH, setAboveVH] = useState(false)
  const mainSection = document.getElementById('mainSection')
  const aboutMeSection = document.getElementById('aboutMe')
  const projectsSection = document.getElementById('projects')
  const skillsSection = document.getElementById('skills')
  const contactSection = document.getElementById('contact')

  

  window.addEventListener('scroll', () => {
    const currentY = window.pageYOffset
    if (currentY >= window.innerHeight){
      setAboveVH(true)
    }
    if (currentY < window.innerHeight){
      setAboveVH(false)
    }
  })

  const changeTheme = () => {
    sessionStorage.setItem("theme", !darkMode);
    setDarkMode(!darkMode);
  };

  const scrollTo = (sectionName, toggle) => {
    toggle()
    const scroll = (element) => {
      const sectionTop = element.offsetTop
      window.scrollTo({
        top: sectionTop - 10,
        behavior: "smooth"
      })
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
    }, 260)
  }

  useEffect(() => {
    if (sessionTheme !== null) {
      setDarkMode(sessionTheme);
    }
  }, []);

  return (
    <>
      <main className={`${darkMode ? "dark" : "light"}`} id="mainSection">
        <section className="min-h-screen flex flex-col relative">
            <LinksHeader darkMode={darkMode} changeTheme={changeTheme} />
          <div
            className={`flex-grow flex items-center ${darkMode && "purple-1000"}`}>
            <div className="d-flex w-screen">
              <Principal />
            </div>
          </div>
          <div className="bg-opacity-20 bg-gray-50 absolute bottom-0 ">
            <p className="text-center">asd</p>
          </div>
        </section>

        <section className="flex flex-col">
          <div className={`sticky top-0 ${darkMode ? "purple-1000" : ""}`}>
            <div className={`transition-all duration-200  ${aboveVH ? "visible" : "opacity-0 pointer-events-none"}`}>
              <Header darkMode={darkMode} changeTheme={changeTheme} scrollTo={scrollTo}/>
            </div>
          </div>
          
          <article className={`flex pt-24 ${darkMode ? "purple-1000" : ""}`} id="aboutMe">
            <div className={`flex-grow flex items-center`}>
              <AboutMe />
            </div>
          </article>

          <section className={`flex pt-28 ${darkMode ? "purple-1000" : ""}`} id="projects">
            <div className={`flex-grow flex items-center`}>
              <Projects />
            </div>
          </section>

          <article className={`flex pt-24 ${darkMode ? "purple-1000" : ""}`} id="skills">
            <div className={`flex-grow flex items-center`}>
              <Skills />
            </div>
          </article>

          <section className={`flex py-28 ${darkMode ? "purple-1000" : ""}`} id="contact">
            <div className={`flex-grow flex items-center justify-center`}>
              <Contact darkMode={darkMode}/>
            </div>
          </section>
          
        </section>
      </main>
    </>
  );
}

export default App;
