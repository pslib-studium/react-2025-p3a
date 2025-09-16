import { useState } from 'react'
import './App.css'
import ControlledInput from './components/ControlledInput'

function App() {
  const [val1, setVal1] = useState<string>("hi");
  return (
    <>
      <ControlledInput defaultValue={val1} label='vstup' onChange={x => {setVal1(x)}} />
      <ControlledInput defaultValue={val1} label='vstup' onChange={x => {}} />
      <div>{val1}</div>
    </>
  )
}

export default App
