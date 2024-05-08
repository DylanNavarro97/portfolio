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
      {/* <Header darkMode={darkMode} changeTheme={changeTheme}/> */}
      <main className="h-screen flex flex-col">
        <div className="">
          <LinksHeader/>
        </div>
        
        <section className="flex-grow flex items-center">
          <div className="d-flex w-screen">
            <Principal />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
