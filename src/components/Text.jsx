import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

export function Text({ page, text }) {
    const languageContext = useContext(LanguageContext);
  
    return languageContext.dictionary[page][text];
  };