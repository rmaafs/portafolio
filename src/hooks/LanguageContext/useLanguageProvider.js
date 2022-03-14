import React, { useEffect, useState } from "react";
import { useLanguage } from "./useLanguageContext";

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("EN_es");

  useEffect(() => {
    console.warn("Works");
  }, []);

  const { Provider } = useLanguage;
  return (
    <Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </Provider>
  );
};

export default LanguageProvider;
