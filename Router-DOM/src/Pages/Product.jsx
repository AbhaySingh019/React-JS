import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='w-full flex flex-col flex-1'>
      
      <div className='w-full flex justify-center items-center gap-10 py-4 text-white'>
        <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
        <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
        <Link className='text-xl font-semibold' to='/product/kids'>Kids</Link>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default Product