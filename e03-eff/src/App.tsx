import { useState } from 'react'
import './App.css'
import {type Screen} from "./types"
import TitlePage from "./pages/TitlePage"
import CodePage from "./pages/CodePage"
import SuccessPage from "./pages/SuccessPage"

function App() {
  const [current, setCurrent] = useState<Screen>("title")
  const switchPage = (scr: Screen) => {
    setCurrent(scr);
  };

 const decidePage = (scr: Screen) => {
  switch(scr) {
    case "code": return <CodePage navAction={switchPage} />
    case "success": return <SuccessPage navAction={switchPage} />
    default: return <TitlePage navAction={switchPage} />
  }
 }
/*
  switch(current) {
    case "code": return <CodePage />
    case "success": return <SuccessPage />
    default: return <TitlePage />
  }
*/
 return (
  <div>
    {decidePage(current)}
  </div>
 );
}

export default App
