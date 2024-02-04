import React, { useContext } from "react";
import { useLanguage } from "../../hooks/LanguageContext/useLanguageContext";
import "./Footer.css";

const Footer = () => {
  const { lang } = useContext(useLanguage);
  const language = lang.footer;

  return (
    <div className="footer">
      <div className="text">
        {language.love}
        <svg height="16" viewBox="-5 0 69 64">
          <path
            fillRule="evenodd"
            fill="#d100ff"
            d="M30.3,57.8L8.7,37c-0.3-0.2-7.9-7.2-7.9-15.5C0.8,11.3,7,5.2,17.3,5.2c6.1,0,11.7,4.8,14.5,7.5c2.7-2.7,8.4-7.5,14.5-7.5   c10.4,0,16.6,6.1,16.6,16.2c0,8.3-7.6,15.3-7.9,15.6L33.3,57.8c-0.4,0.4-1,0.6-1.5,0.6C31.3,58.4,30.7,58.2,30.3,57.8z"
          ></path>
        </svg>
        {language.by}
        <br />
        {language.inspired}
        <a href="https://github.com/bchiang7" target="_blank" rel="noreferrer">
          bchiang7
        </a>{" "}
        © Copyright {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
