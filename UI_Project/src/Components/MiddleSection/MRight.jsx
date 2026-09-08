import React from 'react'
import coder from '../../assets/Coder.png'
const MRight = () => {
  return (
    <div className='flex justify-end items-center w-full h-full p-5'>
      <img src={coder} alt='Coder img' 
      className='max-h-10/12 w-full max-w-1/2 object-contain py-2'
      />
    </div>
  )
}

export default MRight
