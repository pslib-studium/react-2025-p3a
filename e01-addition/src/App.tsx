import './App.css'
import {useState} from "react"
import NumberInput from './components/NumberInput'
import ResultDisplay from './components/ResultDisplay'

function App() {
  const [v1, setV1] = useState(3);
  const [v2, setV2] = useState(2);
  return (
    <>
      <NumberInput valueChange={(x)=>{setV1(x)}} value={v1} /> 
      + 
      <NumberInput valueChange={(x)=>{setV2(x)}} value={v2} /> 
      = 
      <ResultDisplay v1={v1} v2={v2} />
    </>
  )
}

export default App
