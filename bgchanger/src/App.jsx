import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white");
  const [head,setHead] = useState("black")

  return (
    <><div style={{ backgroundColor: color }} id="container">
        <h1 style={{Color: head}} id='heading'>Background color changer</h1>
        <div id='button'>
        <button onClick={() => setColor("blue")}
          style={{backgroundColor:"blue"}}
          id='butt1' class='buttons'>Blue</button>
        <button onClick={() => setColor("green")}
          style={{backgroundColor:"green"}}
          id='butt2' class='buttons'>Green</button>
          <button onClick={() => setColor("yellow")}
          style={{ backgroundColor: "yellow" }}
          id='butt3' class='buttons'>Yellow</button>
          <button onClick={() => setColor("black")}
          style={{ backgroundColor: "black" }}
          id='butt4' class='buttons'>Black</button>
          <button onClick={() => setColor("white")}
          style={{ backgroundColor: "white" }}
          id='butt5' class='buttons'>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
