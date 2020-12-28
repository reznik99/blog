import "./Nav.css"

function Nav() {
    return (
        <nav className="nav_container">
            <ul className="nav_list">
                <li><a href="">Home</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="" className="highlight_btn">Sign Up</a></li>
            </ul>
        </nav>
    )
}

export default Nav;