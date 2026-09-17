import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/card'

const App = () => {
  
  const[userData,setUserData] = useState([ ]);

  const[index,setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)

    setUserData(response.data)
  }

  useEffect(function(){
    getData()

  },[index])

  let printUserData = <h3 className='font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white overflow-auto'>
      <div className='flex flex-wrap gap-3 '>
        {printUserData}
      </div>
      <div className='flex justify-center items-center w-full bg-gray-800 gap-8 p-3 border rounded-2xl'>
        <button 
        style={{opacity: index==1? 0.5:1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        className='bg-yellow-300 p-3 active:scale-95 font-bold text-black rounded'>Prev</button>
        <h3>Page: {index}</h3>
        <button 
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
        className='bg-yellow-300 p-3 active:scale-95 font-bold text-black rounded'>Next</button>
      </div>
    </div>
  )
}


export default App
