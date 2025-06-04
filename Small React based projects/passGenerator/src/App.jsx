import { useState, useCallback, useRef, useEffect, useReducer } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(7)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [word, setWord] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass =''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_'
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass +=str.charAt(char)
      }
    setWord(pass)
  }, [length, numAllowed, charAllowed, setWord])
    
  useEffect(()=> {
    passwordGenerator()
  }, [numAllowed, charAllowed, length, passwordGenerator])
  
  const passwordRef = useRef(null)
  
  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(word)
  }, [word])


  return (
    <>
      <h1 id='Head'>Password Generator</h1>
      <div id='base0'>
      <div id='base'>
        <div id='Copied'>
            <input
            id='toBeCopied'
            type="text"
            readOnly
            value={word}
              placeholder='Password'
              ref={passwordRef}
          />
            <button
              onClick={copyToClipBoard}
              class="button-48" role="button"><span class="text">Copy</span>
            </button>
          </div>
          <div id="inputFields">
            <input type="range" id="length"
              min={6}
              max={100}
              onChange={(e)=>{setlength(e.target.value)}}
            /> <label>Length:{length}</label>
            <input type="checkbox" id="number" defaultChecked={numAllowed} onChange={()=>setNumAllowed((prev)=>!prev)} /> <label>Numbers</label>
            <input type="checkbox" id="character" onChange={()=>setCharAllowed((prev)=>!prev)}/> <label>Character</label>
            </div>
        </div>
        </div>
    </>
  )
}

export default App
