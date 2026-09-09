import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex gap-5'>
        <div className='w-1/2  flex items-start flex-col gap-3'>
          <input className='px-5  py-2 border-2 rounded font-bold text-lg'
            type='text' 
            placeholder='ENTER HEADING'
          />
          <input className='px-5  py-2 border-2 rounded'
            type='text'
            placeholder='Notes Body'
          />
          <button className='border rounded w-auto px-5 py-2 outline-solid outline-red-500'>
            ADD NOTE
          </button>
        </div>
          <img 
            src='https://play-lh.googleusercontent.com/XGlKNhHspmM1S1-Ea9isKSmdzMCwv-q2ALf9a-FXfRRo4IuxyVGX3HkhW6tpxAACRSIXHcdPRL0fSmZD-JSUkA=w240-h480-rw' 
            alt='Notes Image' 
          />
        
      </form>
    </div>
  )
}

export default App
