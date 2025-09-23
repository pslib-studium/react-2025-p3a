import {type Screen} from "../types"
import { useEffect, useState} from "react"

type CodePageProps = {
    navAction: (scr: Screen) => void
}

const Page: React.FC<CodePageProps> = ({navAction}) => {
    const [code, setCode] = useState("");
    const handleChangeCode = () => {
        setCode(x => x + ".")
    }
    const checkCode = () => {
        console.log(">", code);
    }
    useEffect(() => { 
        console.log("mount");
        return () => {
            console.log("unmount");
        }
    }, []);
    useEffect(() => {
        console.log("code change", code);
        return () => {
            console.log("unmount 2");
        }
    }, [code]);
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const k = e.key;
            console.log("State:",k,code);
            if (k === "Enter") {
                checkCode();
                console.log("X", k, code);
                if (code === "12345") {
                    console.log("GO", code, k);
                    navAction("success");
                }
            }
            else {
                setCode(x => x + k);
            }   
        }
        window.addEventListener("keydown", onKeyDown);
        return (() => {
            window.removeEventListener("keydown", onKeyDown);
        });
    }, [])
    console.log("render");
    return (
        <>
        <p>Code</p>
        <pre>{code}</pre>
        <button onClick={() => navAction("success")}>Go</button>
        <button onClick={() => handleChangeCode()}>Change</button>
        </>
    );
}

export default Page;