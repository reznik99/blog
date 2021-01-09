import "./Nav.css"
import SwitchComponent from './SwitchComponent'
import { useState, useEffect } from 'react';

function Nav() {
    const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme"))
    useEffect(() => switchTheme(theme), [theme])
    return (
        <nav className="nav_container">
            <div>
                <a href="/">
                    <h1 className="logo">Francesco's Tech Blog</h1>
                    {/* <img src={logo} alt="Logo" className="logo" /> */}
                </a>
            </div>
            <div style={{ position: "absolute", top: "100px", right: "0" }} >
                <SwitchComponent label="Dark Mode" onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} checked={theme === "dark" ? 'checked' : ''} />
            </div>
            <ul className="nav_list">
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about-me">About Me</a></li>
                <li><a href="/signup" className="highlight_btn">Sign Up</a></li>
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