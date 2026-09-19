import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import { Route, Routes } from 'react-router-dom'
import Error from './Pages/ErrorPage'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import CoursesDetail from './Pages/CoursesDetail'

const App = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-between bg-black'>
      <div className='px-3 py-2'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />

        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CoursesDetail />} /> 
        <Route path='*' element={<Error />} />
      </Routes>
      <div className='px-3 py-2'>
        <Footer />
      </div>
    </div>
  )
}

export default App