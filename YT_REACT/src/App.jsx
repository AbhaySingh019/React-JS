import { useState } from "react"

function App() {
  const [Psit, setPsit] = useState("MY Dear Lovely Students")
  const [sir, setSir] = useState("")   

  const Psithandle = () => {
    setPsit("Izz PSIT a Jail, How can you say? (- _ -)")
  }

  const Replysir = () => {
    setSir("SIR ji aag ..........m  aaagggggggggg....")
  }

  return (
    <div>
      <h1>PSIT, KANPUR</h1>
      <h2>{Psit}</h2>
      <button onClick={Psithandle}>Yes Sir?</button><br />
      <h2>{sir}</h2>
      <button onClick={Replysir}>Jail?</button>
    </div>
  )
}

export default App
