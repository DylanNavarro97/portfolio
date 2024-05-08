import { useEffect, useState } from 'react'
import Header from './components/common/Header'
import Principal from './components/inicio/Principal'

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
      {/* <Header darkMode={darkMode} changeTheme={changeTheme}/> */}
      <div className=''>
        <Principal />
      </div>
      
    </>
  )
}

export default App
