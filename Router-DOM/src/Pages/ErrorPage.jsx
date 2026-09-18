import React from 'react'
import ErrorImg from '../assets/ErrorImg.png'

const Error = () => {
  return (
    <div className='flex-1 w-full flex items-center justify-center overflow-hidden'>
      <img 
        src={ErrorImg} 
        alt="Error" 
        className='max-h-full max-w-full object-contain'
      />
    </div>
  )
}

export default Error