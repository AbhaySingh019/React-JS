import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar2 = () => {

  const [theme,setTheme]=useContext(ThemeDataContext)                    // destructure krke [theme, setTheme] likh diya

  return (
    <div className='navbar2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
    </div>
  )
}

export default Navbar2
