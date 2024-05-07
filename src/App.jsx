import { useEffect, useState } from 'react'
import Header from './components/common/Header'

function App() {
  const sessionTheme = JSON.parse(sessionStorage.getItem("theme"))
  const [darkMode, setDarkMode] = useState(true)
  
  const changeTheme = () => {
    sessionStorage.setItem("theme", !darkMode)
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (sessionTheme !== null){
      setDarkMode(sessionTheme)
    }
  }, [])

  return (
    <>
      <Header darkMode={darkMode} changeTheme={changeTheme} />
    </>
  )
}

export default App
