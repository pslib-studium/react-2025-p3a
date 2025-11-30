import { useRef } from "react";
import style from "./Figure.module.css"

type FigureProps = {
    callbackEnd: () => void;
    offsetX?: number;
    offsetY?: number;
    scale?: number;
}

const Figure: React.FC<FigureProps> = ({ callbackEnd, offsetX = 0, offsetY = 0, scale = 1 }) => {
    const transitionsCompleted = useRef(new Set<string>());

    const handleTransitionEnd = (event: React.TransitionEvent) => {
        transitionsCompleted.current.add(event.propertyName);

        if (transitionsCompleted.current.has('translate') && 
            transitionsCompleted.current.has('scale')) {
                transitionsCompleted.current.clear();
                callbackEnd();
        }
    }

    return (
        <div
            className={style.figure}
            onTransitionEnd={handleTransitionEnd}
            style={{
                "--offset-x": `${offsetX}px`,
                "--offset-y": `${offsetY}px`,
                "--scale": scale
            } as React.CSSProperties & Record<string, string | number>}
        >🔴</div>
    );
}

export default Figure;