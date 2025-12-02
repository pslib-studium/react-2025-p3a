import { useContext } from "react";
import { StyleContext } from "../providers/StyleProvider";

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (context === null) {
    throw new Error("useStyle must be used inside <StyleProvider>.");
  }
  return context;
};