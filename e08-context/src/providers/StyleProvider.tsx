import { type FC, useEffect, type PropsWithChildren, createContext, useState } from "react";
import { type Color } from "../types/style";

type StyleContextValue = {
    color: Color;
    setColor: (color: Color) => void;
};
/*
let initialValue: StyleContextValue = {
    color: "red",
    setColor: () => {}
};
*/

export const StyleContext = createContext<StyleContextValue | null>(null);

export const StyleProvider: FC<PropsWithChildren> = ({ children }) => {
    const [color, setColor] = useState<Color>(() => {
      try {
        const data = localStorage.getItem("color");
        if (!data) return "blue";
        const parsed = JSON.parse(data) as { color?: Color };
        return parsed.color ?? "blue";
      } catch {
        return "blue";
      }
    });
    
    useEffect(() => {
      localStorage.setItem("color", JSON.stringify({ color }));
    }, [color]);

    return (
        <StyleContext.Provider value={{ color, setColor }}>
          {children}
        </StyleContext.Provider>
      );
}

export default StyleProvider;