import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
      <div>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("es")}>ES</button>
      </div>
    </nav>
  );
};

export default Navbar;
