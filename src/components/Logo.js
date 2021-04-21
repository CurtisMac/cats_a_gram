import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
    );
}

export default Logo;
