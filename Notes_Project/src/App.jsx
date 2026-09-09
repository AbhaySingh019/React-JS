import React from 'react'

const App = () => {
  const SubmitHandler = (ele) => {
    ele.preventDefault()
    console.log('Submit')
  }

  return (
    <div className='h-screen bg-black text-white px-10 py-10 flex justify-between gap-10'>   
      <form 
        onSubmit={(ele) => SubmitHandler(ele)} 
        className='w-1/2 flex flex-col items-start gap-4 h-full'
      >
        <input 
          className='px-5 py-2 w-full border-2 rounded font-bold text-lg text-center bg-transparent text-white'
          type='text' 
          placeholder='ENTER HEADING'
        />
        <textarea
          className='px-5 py-2 w-full border-2 rounded h-52 bg-transparent text-white resize-none'
          placeholder='Notes Body'
        />
        <button className='border w-1/3 rounded px-5 py-2 outline-solid outline-red-500 bg-white text-black font-bold self-center cursor-pointer'>
          ADD NOTE
        </button>
      </form>

      <div className='bg-gray-700 flex flex-col gap-5 p-10 border-2 w-1/2 h-full rounded-lg'>
        <h1 className='text-xl font-bold'>YOUR NOTES</h1>
        <div className='flex flex-row flex-wrap gap-5 items-start w-full overflow-y-auto py-3'>   
          <div className='h-52 w-40 rounded-2xl bg-white shrink-0'></div>
          <div className='h-52 w-40 rounded-2xl bg-white shrink-0'></div>
          <div className='h-52 w-40 rounded-2xl bg-white shrink-0'></div>
          <div className='h-52 w-40 rounded-2xl bg-white shrink-0'></div>
        </div>
      </div>

    </div>
  )
}

export default App