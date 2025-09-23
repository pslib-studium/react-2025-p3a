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
    useEffect(() => { 
        console.log("mount");
        return () => {
            console.log("unmount");
        }
    }, []);
    useEffect(() => {
        console.log("code change");
        return () => {
            console.log("unmount 2");
        }
    }, [code]);
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