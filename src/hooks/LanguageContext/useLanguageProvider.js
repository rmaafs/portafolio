import React, { useState } from "react";
import { useLanguage } from "./useLanguageContext";
import defaultLang from "../../lang/EN_us.json";

const LanguageProvider = ({ children }) => {
  const [langName, setLangName] = useState("EN_us");
  const [lang, setLang] = useState(defaultLang);

  function updateLang(newLang) {
    setLangName(newLang);
    const file = require("../../lang/" + newLang + ".json");
    setLang(file);
  }

  const { Provider } = useLanguage;
  return (
    <Provider
      value={{
        lang,
        langName,
        updateLang,
      }}
    >
      {children}
    </Provider>
  );
};

export default LanguageProvider;
