import React from "react";
import { Link } from "react-router-dom";
import "../Header/header.css";
import "../../layout/container.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header = () => {
  return (
    <header className="header">
      <div className="fixer">
        <AccountBoxIcon fontSize="large" className="header__icon" />
      </div>
      <h1 className="header__h1">Magic Round Robin</h1>
      <div className="header__iconContainer">
        <AccountBoxIcon fontSize="large" className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
