import React from 'react'
import { useState } from 'react'

const App = () => {

  const[title,setTitle] = useState('')
  const[details,setDetails]=useState('')

  const[task,setTask]=useState([])


  const SubmitHandler = (ele) => {
    ele.preventDefault()
    
    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const DeleteTask =[...task]
    DeleteTask.splice(idx,1)

    setTask(DeleteTask)

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
          value={title}
          onChange={(ele)=>{
            setTitle(ele.target.value)
          }}
        />
        <textarea
          className='px-5 py-2 w-full border-2 rounded h-52 bg-transparent text-white'
          placeholder='Enter Notes Details'
          value={details}
          onChange={(ele)=>{
            setDetails(ele.target.value)
          }}
        />
        <button className='active:bg-gray-400 border w-1/3 rounded px-5 py-2 outline-solid outline-red-500 bg-white text-black font-bold self-center cursor-pointer'>
          ADD NOTE
        </button>
      </form>

      <div className='bg-gray-700 flex flex-col gap-5 p-10 border-2 w-1/2 h-full rounded-lg'>
        <h1 className='text-xl font-bold'>YOUR NOTES</h1>
        <div className='flex flex-row flex-wrap gap-5 items-start w-full overflow-y-auto py-3'>
          {task.map(function(elem,idx){
            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='font-bold'>{elem.title}</h3>
                <p>{elem.details}</p>
              </div>
              <button  
              onClick={()=>{
                deleteNote(idx)
              }}
              className='w-full cursor-pointer active:scale-90 bg-red-600 py-1 text-xs rounded font-bold text-white'>Delete</button>

          </div>
          })}

        </div>
      </div>

    </div>
  )
}

export default App