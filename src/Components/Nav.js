import "./Nav.css"
import logo from '../Res/logo.png'

function Nav() {
    return (
        <nav className="nav_container">
            <div>
                <a url="https://www.digitalocean.com" href="/">
                    <h1 className="logo">FG Blog</h1>
                    {/* <img src={logo} alt="Logo" className="logo" /> */}
                </a>
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

export default Nav;