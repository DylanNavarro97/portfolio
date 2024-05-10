import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Principal from "./components/inicio/Principal";
import LinksHeader from "./components/LinksHeader";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  const sessionTheme = JSON.parse(sessionStorage.getItem("theme"));
  const [darkMode, setDarkMode] = useState(false);
  const [scrolling, setScrolling] = useState(false)
  const aboutMeHeight = document.getElementById('aboutMe')?.getBoundingClientRect()
  const mainSection = document.getElementById('mainSection')
  let prevY = window.pageYOffset

  window.addEventListener("scroll", () => {
    const currentY = window.pageYOffset

    if (currentY > prevY){
      if (currentY > 0 && currentY < window.innerHeight){
        if (currentY < window.innerHeight){
          setScrolling('bajando')
        }
      }
      
    } else {
      if (currentY < window.innerHeight){
        setScrolling('subiendo')
      }
    }

    prevY = currentY

  });

  const changeTheme = () => {
    sessionStorage.setItem("theme", !darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (sessionTheme !== null) {
      setDarkMode(sessionTheme);
    }
  }, []);

  useEffect(() => {
    if (scrolling === 'bajando'){
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    } else if (scrolling === 'subiendo'){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [scrolling])
  return (
    <>
      <main className={`${darkMode ? "dark" : "light"}`} id="mainSection">
        <section className="h-screen flex flex-col">
          <div>
            <LinksHeader darkMode={darkMode} changeTheme={changeTheme} />
          </div>

          <div
            className={`flex-grow flex items-center ${
              darkMode && "purple-1000"
            }`}
          >
            <div className="d-flex w-screen">
              <Principal />
            </div>
          </div>
        </section>

        <section className="h-screen flex flex-col" id="aboutMe">
          <Header darkMode={darkMode} changeTheme={changeTheme} />
          <div className={`flex-grow ${darkMode && "purple-1000"}`}>
            <AboutMe />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
