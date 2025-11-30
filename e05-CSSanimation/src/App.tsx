import style from './App.module.css'
import { useState } from "react";
import Notifi from "./components/Notifi"
import Figure from "./components/Figure";
import useWindowSize from './useWindowSize';
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
    const [figure, setFigure] = useState({ offsetX: 10, offsetY: 30, scale: 1 });
    const {width, height} = useWindowSize();

    const handleMoveEnd = () => {
        setPhase(2)
    }

    const handleFaded = () => {
        setPhase(0);
        setFigure({ offsetX: 10, offsetY: 30, scale: 1 });
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
                        <button onClick={() => setFigure({ offsetX: width - 200, offsetY: height * 0.6, scale: 0.25 })}>Posunout</button>
                        <Figure offsetX={figure.offsetX} offsetY={figure.offsetY} scale={figure.scale} callbackEnd={handleMoveEnd} />
                    </>
                :
                    <Notifi message="Figurka v cíli. Znovu..." callbackFadeCompleted={handleFaded} />
            }      
      </div>
    </>
  )
}

export default App