import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import Button from './Components/Button'
import { ThemeDataContext } from './Context/ThemeContext'

const App = () => {
  const [theme] = useContext(ThemeDataContext)

  return (
    <div className={`app-container ${theme === 'Light' ? 'light-theme' : 'dark-theme'}`}>
      <Navbar />
      <Button />
    </div>
  )
}

export default App