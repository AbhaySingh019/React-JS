import React from 'react'

const MCenter = () => {
  return (
    <div className="flex-1 flex flex-col justify-center p-6 text-center absolute top-50 left-2.5 leading-relaxed">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-black">
        Welcome to DevHell UI
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-500 max-w-md">
        Simple, clean, and flexible components made with Tailwind CSS and React.
      </p>
      <div>
        <h5 className='uppercase leading-7 justify-around'>Compatible With: <span className='font-bold'>  HTML </span>  <span className='font-bold'> REACT </span>  <span className='font-bold'> VUE </span> </h5>
      </div>
      <div className=" flex justify-around">
      <button className='mt-4 px-4 py-2 bg-black text-white font-medium rounded-lg hover:bg-red-400 transition' >
        Get Started
      </button>
      <button className='mt-4 px-4 py-2 bg-black text-white font-medium rounded-lg hover:bg-red-400 transition'>Yearly Plan</button>
      </div>
      
    </div>
  )
}

export default MCenter