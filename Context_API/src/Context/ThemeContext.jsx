import { createContext, useState } from 'react'

 export const ThemeDataContext = createContext()    //context create kr liya yaha pr

const ThemeContext = (props) => {

    const [theme,setTheme]=useState('Light')

  return (
    <div>
        <ThemeDataContext.Provider value={[theme, setTheme]}>             {/*   jo create kra tha ab usko yaha data provide kr rhe */}
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
