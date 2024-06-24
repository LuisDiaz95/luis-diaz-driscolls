import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
};

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/users">{t("userList")}</Link>
        </li>
        <li>
          <Link to="/news">{t("newsList")}</Link>
        </li>
      </ul>
      {Object.keys(lngs).map((lng) => (
        <button
          type="submit"
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lng}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
