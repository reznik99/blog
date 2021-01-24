import "./Nav.css"
import SwitchComponent from './SwitchComponent'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Nav() {
    const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme"))
    useEffect(() => switchTheme(theme), [theme])
    return (
        <nav className="nav_container">
            <div>
                <Link to="/">
                    <h1 className="logo">Francesco's Tech Blog</h1>
                    {/* <img src={logo} alt="Logo" className="logo" /> */}
                </Link>
            </div>
            <div style={{ position: "absolute", top: "100px", right: "0" }} >
                <SwitchComponent label="Dark Mode" onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} checked={theme === "dark" ? 'checked' : ''} />
            </div>
            <ul className="nav_list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/signup" className="highlight_btn">Sign Up</Link></li>
            </ul>
        </nav>
    )
}

// Sets a localStorage variable to track the theme between page loads
function switchTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
}

export default Nav;