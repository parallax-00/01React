import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(7)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [word, setWord] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_'
      for (let i = 1; i < array.length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass=str.charAt(char)
      }
    setWord(pass)
  }, [length, numAllowed, charAllowed, setWord])
    
  


  return (
    <>
      <h1 id='Head'>Password Generator</h1>
      <div id='base'>

      </div>
    </>
  )
}

export default App
