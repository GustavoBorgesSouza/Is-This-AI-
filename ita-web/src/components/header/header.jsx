import "../../assets/css/header.css";
import React from "react";
import Logo from "../../assets/img/IsThisAILogo.svg"

export default function Header() {
    return (
      <header className="container">
        <div className="c-header">
            <img className="header-img" src={Logo} alt="is this ai? challenge logo" />
        </div>
      </header>
    );
}