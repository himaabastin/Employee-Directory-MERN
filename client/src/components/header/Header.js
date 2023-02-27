import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

//Header

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1 className="logo-title">Employee-Directory</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
