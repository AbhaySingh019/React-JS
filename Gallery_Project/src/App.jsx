import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  
  const[userData,setUserData] = useState([ ]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=20')

    setUserData(response.data)
    console.log(response.data)
  }

  let printUserData = 'User Not Found . . .'

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div className='h-35 w-37'>
        <img className='h-full object-cover'
        src={elem.download_url} alt="" />
      </div>

    })
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button 
      onClick={getData}
      className='bg-amber-50 text-red-600 m-4 px-2 active:scale-95 border-green-300 rounded-3xl border-4 '>
      GET DATA</button>

      <div className='flex flex-wrap gap-3'>
        {printUserData}
      </div>
    </div>
  )
}


export default App
