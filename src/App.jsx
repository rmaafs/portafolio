import React from "react";
import "./App.css";
import LanguageProvider from "./hooks/LanguageContext/useLanguageProvider";
import Main from "./Main/Main";

function App() {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
}

export default App;
