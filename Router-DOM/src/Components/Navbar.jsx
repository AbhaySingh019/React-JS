import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-2 py-2 text-white border bg-cyan-700 overflow-auto text-wrap w-full'>
      <h3>RouterTesting</h3>
      <div className='flex gap-9 font-bold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Products</Link>
        <Link to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
