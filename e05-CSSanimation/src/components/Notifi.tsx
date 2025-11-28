import { useState, type FC } from "react";
import style from "./Notifi.module.css"

type MessageType = { 
    message: string,
    callbackFadeCompleted: () => void;
};

const Notifi: FC<MessageType> = ({ message, callbackFadeCompleted }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldExit, setShouldExit] = useState(false);

    const handleDismiss = () => {
        setShouldExit(true);
    }

    const handleAnimationEnd = (event: React.AnimationEvent) => {
        if (event.animationName.includes('slideOut')) {
            // po dokončení slideOut animace odstraní z DOMu
            setIsVisible(false);
            callbackFadeCompleted();
        }
    }

    if (!isVisible) return null;

    return (
        <div
            className={style.notification + (shouldExit ? ` ${style.slideOut}` : ` ${style.slideIn}`)}
            onAnimationEnd={handleAnimationEnd}
        >
            {message}&nbsp;
            <button onClick={handleDismiss}>Zavřít</button>
        </div>
    )
}

export default Notifi