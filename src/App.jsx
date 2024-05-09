import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Principal from "./components/inicio/Principal";
import LinksHeader from "./components/LinksHeader";

function App() {
  const sessionTheme = JSON.parse(sessionStorage.getItem("theme"));
  const [darkMode, setDarkMode] = useState(true);

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
      
      <main className={`${darkMode ? "dark" : "light"} h-screen flex flex-col`}>
        <div className="">
          <LinksHeader darkMode={darkMode} changeTheme={changeTheme} />
        </div>

        <section
          className={`flex-grow flex items-center ${darkMode && "purple-1000"}`}
        >
          <div className="d-flex w-screen">
            <Principal />
          </div>
        </section>
        <Header darkMode={darkMode} changeTheme={changeTheme} />
      </main>
    </>
  );
}

export default App;
