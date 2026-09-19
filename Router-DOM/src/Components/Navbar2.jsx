import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()

  return (
    <div className='flex justify-between items-center px-4 py-5 text-white border bg-cyan-600 overflow-auto text-wrap w-full'>
      <div className='flex justify-between gap-6 absolute right-15'>
        <button
        className=' bg-gray-600 rounded px-2 py-1'
        onClick={()=>{
            navigate('/')
        }}>
        Back To Home</button>
        <button 
        className=' bg-gray-600 rounded px-2 py-1'
        onClick={()=>{
            navigate(-1)
        }}>Prev</button>
        <button 
        className=' bg-gray-600 rounded px-2 py-1'
        onClick={()=>{
            navigate(+1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default Navbar2
