import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import Principal from "./components/inicio/Principal";
import LinksHeader from "./components/LinksHeader";

function App() {
  const sessionTheme = JSON.parse(sessionStorage.getItem("theme"));
  const [darkMode, setDarkMode] = useState(false);

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
      <main className={`${darkMode ? "dark" : "light"}`}>
        <section className={`h-screen flex flex-col`}>
        <div>
          <LinksHeader darkMode={darkMode} changeTheme={changeTheme} />
        </div>

          <div className={`flex-grow flex items-center ${darkMode && "purple-1000"}`}>
            <div className="d-flex w-screen">
              <Principal />
            </div>
          </div>
        </section>

        <section>
          <Header darkMode={darkMode} changeTheme={changeTheme} />
        </section>
      </main>
    </>
  );
}

export default App;
