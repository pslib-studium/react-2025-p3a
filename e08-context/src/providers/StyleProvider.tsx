import { type FC, type PropsWithChildren, createContext, useState } from "react";
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
    const [color, setColor] = useState<Color>("red");
    return (
        <StyleContext.Provider value={{ color, setColor }}>
          {children}
        </StyleContext.Provider>
      );
}

export default StyleProvider;