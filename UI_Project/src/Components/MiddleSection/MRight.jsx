import React from 'react'
import coder from '../../assets/Coder.png'

const MRight = () => {
  return (
    <div className="flex justify-center md:justify-end items-center w-full">
      <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-gray-800/10 dark:border-gray-800">
        <img 
          src={coder} 
          alt="Coder img" 
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>
  )
}

export default MRight