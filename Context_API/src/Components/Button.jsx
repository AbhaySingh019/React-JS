import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Button = () => {

  const [theme,setTheme]=useContext(ThemeDataContext)

  const changeTheme = () => {
  setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'))
}
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
