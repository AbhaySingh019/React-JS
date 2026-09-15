import React, { useState } from "react";
import axios from "axios";

const App = () => {

  const [data,setData] = useState([])

  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=5')

    setData(response.data);
  }
  return (
    <div>
      <button onClick={getData}>Fetch Data</button>
      <div>
        {data.map(function(elem,idx){

          return <h3 key={idx}>Hello, {idx} {elem.author}</h3>

        })}
      </div>

    </div>
  )
}

export default App
