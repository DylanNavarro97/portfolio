import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Principal from "./components/inicio/Principal";
import LinksHeader from "./components/LinksHeader";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  const sessionTheme = JSON.parse(sessionStorage.getItem("theme"));
  const [darkMode, setDarkMode] = useState(false);
  const [aboveVH, setAboveVH] = useState(false)

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

  useEffect(() => {
    if (sessionTheme !== null) {
      setDarkMode(sessionTheme);
    }
  }, []);

  return (
    <>
      <main className={`${darkMode ? "dark" : "light"}`} id="mainSection">
        <section className="min-h-screen flex flex-col">

            <LinksHeader darkMode={darkMode} changeTheme={changeTheme} />


          <div
            className={`flex-grow flex items-center ${darkMode && "purple-1000"}`}>
            <div className="d-flex w-screen">
              <Principal />
            </div>
          </div>
        </section>

        <section className="flex flex-col">

          <div className={`sticky top-0 ${darkMode ? "purple-1000" : ""}`}>
            <div className={`transition-all duration-200  ${aboveVH ? "visible" : "opacity-0 pointer-events-none"}`}>
              <Header darkMode={darkMode} changeTheme={changeTheme} />
            </div>
          </div>
          
          <article className={`flex pt-40 ${darkMode ? "purple-1000" : ""}`} id="aboutMe">
            <div className={`flex-grow flex items-center`}>
              <AboutMe />
            </div>
          </article>
          
          <article className={`flex pt-40 ${darkMode ? "purple-1000" : ""}`}>
            <div className="flex-grow flex items-center" id="proyectos">
              <AboutMe />
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
