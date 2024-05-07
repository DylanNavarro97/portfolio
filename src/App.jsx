import { useState } from 'react'
import Header from './components/common/Header'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const changeTheme = () => {
    setDarkMode(!darkMode)
    console.log('dasd')
  }

  return (
    <>
      <Header darkMode={darkMode} changeTheme={changeTheme} />
    </>
  )
}

export default App
