import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const lngs = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
};

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Button color="inherit" component={Link} to="/users">
            {t("userList")}
          </Button>
          <Button color="inherit" component={Link} to="/news">
            {t("newsList")}
          </Button>
        </Box>
        <Box>
          {Object.keys(lngs).map((lng) => (
            <Button
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
              color="inherit"
            >
              {lng}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
