import React from 'react'

const App = () => {
  const SubmitHandler=(ele)=>{
    ele.preventDefault()
    console.log('Submit')

  }
  return (
    <div className='h-screen bg-black text-white px-15 py-10'>
      <form onSubmit={(ele)=>{
        SubmitHandler(ele)
      }} className='flex gap-5'>
        <div className='w-1/2  flex items-start flex-col gap-3 '>
          <input className='flex gap-2 px-5 items-center w-full py-2 border-2 rounded font-bold text-lg self-center text-center'
            type='text' 
            placeholder='ENTER HEADING'
          />
          <textarea
            className='px-5 w-full py-2 border-2 rounded self-center  h-40'
            type='text'
            placeholder='Notes Body'
          />
          <button className='border w-1/3 rounded w-full px-5 py-2 outline-solid outline-red-500 bg-white text-black text-bold items-center self-center '>
            ADD NOTE
          </button>
        </div>
          <img className='absolute right-28'
            src='https://play-lh.googleusercontent.com/XGlKNhHspmM1S1-Ea9isKSmdzMCwv-q2ALf9a-FXfRRo4IuxyVGX3HkhW6tpxAACRSIXHcdPRL0fSmZD-JSUkA=w240-h480-rw' 
            alt='Notes Image' 
          />
        
      </form>
    </div>
  )
}

export default App
