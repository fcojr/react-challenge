import React from "react"
import "./Header.scss"
import Logo from "../assets/logo.svg"

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />
        </header>
    )
}

export default Header