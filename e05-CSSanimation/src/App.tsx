import style from './App.module.css'
import { useState } from "react";
import Notifi from "./components/Notifi"
import Figure from "./components/Figure";
//import style from "./AnimCSSEvent.module.css"
/*
   CSS animation a transition eventy - výhody:
    - GPU akcelerované vykreslování bez CPU overhead
    - Automatická optimalizace prohlížečem
    - onTransitionEnd / onAnimationEnd pro detekci dokončení pohybu
    - Minimální kód, vysoký výkon
*/

function App() {
    const [phase, setPhase] = useState(0);
    const [field, setField] = useState(0);

    const handleMoveEnd = () => {
        setPhase(2)
    }

    const handleFaded = () => {
        setPhase(0);
        setField(0);
    }

  return (
    <>
      <div className={style.selPage}>
            {
                phase === 0 ?
                    <button onClick={() => setPhase(1)}>Nasadit</button>
                :
                phase === 1 ?
                    <>
                        <button onClick={() => setField(1)}>Posunout</button>
                        <Figure field={field} callbackEnd={handleMoveEnd} />
                    </>
                :
                    <Notifi message="Figurka v cíli. Znovu..." callbackFadeCompleted={handleFaded} />
            }      
      </div>
    </>
  )
}

export default App