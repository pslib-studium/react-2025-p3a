import { useEffect, useRef, useState } from "react";
import { type Screen } from "../types";

type CodePageProps = { navAction: (scr: Screen) => void };

const Page: React.FC<CodePageProps> = ({ navAction }) => {
  const [code, setCode] = useState("");
  const codeRef = useRef(""); 
  const actionRef = useRef(navAction); 
  const TARGET = "12345";

  useEffect(() => { actionRef.current = navAction; }, [navAction]);
  const updateCode = (next: string) => { codeRef.current = next; setCode(next); };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const k = e.key;

      if (k === "Enter") {
        const current = codeRef.current;
        console.log(">", current);
        if (current === TARGET) actionRef.current("success");
        updateCode("");
        return;
      }

      if (/^[0-9a-zA-Z]$/.test(k)) {
        updateCode(codeRef.current + k);
      } else if (k === "Backspace") {
        updateCode(codeRef.current.slice(0, -1));
      } 
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []); 

  return (
    <>
      <p>Code</p>
      <pre>{code}</pre>
      <button onClick={() => navAction("success")}>Go</button>
    </>
  );
};

export default Page;
