import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Principal from "./components/Principal/Principal";
import LinksHeader from "./components/LinksHeader";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Down from "./components/svg/Down";

function App() {
  const sessionTheme = JSON.parse(sessionStorage.getItem("theme"));
  const [darkMode, setDarkMode] = useState(false);
  const [aboveVH, setAboveVH] = useState(false)
  const [onTopZero, setOnTopZero] = useState(true)

  window.addEventListener('scroll', () => {
    const currentY = window.pageYOffset
    if (currentY >= window.innerHeight){
      setAboveVH(true)
    }
    if (currentY < window.innerHeight){
      setAboveVH(false)
    }
    if (currentY !== 0){
      setOnTopZero(false)
    } else {
      setOnTopZero(true)
    }
  })

  const changeTheme = () => {
    sessionStorage.setItem("theme", !darkMode);
    setDarkMode(!darkMode);
  };

  const indexScroll = () => {
    const topElement = document.getElementById('aboutMe').offsetTop
    window.scrollTo({top: topElement - 10})
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
            className={`flex-grow flex justify-center items-center ${darkMode && "purple-1000"}`}>
            <div className="d-flex w-screen">
              <Principal />
            </div>
          </div>
          <div className={`${onTopZero ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-300 py-2 absolute bottom-0 w-full`}>
            <div className="flex justify-center ">
              <Down indexScroll={indexScroll}/>
            </div>
          </div>
        </section>

        <section className="flex flex-col">
          <div className={`sticky top-0 ${darkMode ? "purple-1000" : ""}`}>
            <div className={`transition-all duration-200  ${aboveVH ? "visible" : "opacity-0 pointer-events-none"}`}>
              <Header darkMode={darkMode} changeTheme={changeTheme}/>
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
