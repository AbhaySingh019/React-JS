import React from 'react'

const RightContent = () => {
  return (
    <div className='flex items-center absolute top-2 right-0 gap-6 px-4 py-2 text-gray-200 whitespace-nowrap'>
      <button><a href="#">Home</a></button>
      <button><a href="#">Login/Signup</a></button>
      <button><a href="#">Contact</a></button>
    </div>
  )
}

export default RightContent