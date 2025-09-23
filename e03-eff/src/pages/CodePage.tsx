import { type Screen } from "../types"
import { useEffect, useState, useCallback } from "react"

type CodePageProps = {
    navAction: (scr: Screen) => void
}

const Page: React.FC<CodePageProps> = ({ navAction }) => {
    const [code, setCode] = useState("");
    const targetSequence = 'abcd';

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        const k = e.key;
        if (k === 'Enter') {
            console.log(code)
            if (code === targetSequence) {
                navAction("success");
                setCode('');
            }
            return;
        }

        if (k.match(/[0-9a-zA-Z]/)) {
            setCode(prev => {
                const newSequence = prev + k;
                if (newSequence.length > targetSequence.length) { return k; }
                return newSequence;
            });
        } else {
            setCode('');
        }

    }, [navAction, code]);

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);
        return (() => {
            window.removeEventListener("keydown", onKeyDown);
        });
    }, [onKeyDown])

    return (
        <>
            <p>Code</p>
            <pre>{code}</pre>
            <button onClick={() => navAction("success")}>Go</button>
        </>
    );
}

export default Page;
