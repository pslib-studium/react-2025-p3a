import { useRef } from "react";
import style from "./Figure.module.css"

type FigureProps = {
    callbackEnd: () => void;
    field?: number,
}

const Figure: React.FC<FigureProps> = ({ callbackEnd, field = 0 }) => {
    const transitionsCompleted = useRef(new Set<string>());

    const handleTransitionEnd = (event: React.TransitionEvent) => {
        transitionsCompleted.current.add(event.propertyName);

        if (transitionsCompleted.current.has('left') && 
            transitionsCompleted.current.has('top')) {
                transitionsCompleted.current.clear();
                callbackEnd();
        }
    }

    return (
        <div
            className={style.figure + " " + style["pos"+field]}
            onTransitionEnd={handleTransitionEnd}
        >🔴</div>
    );
}

export default Figure;